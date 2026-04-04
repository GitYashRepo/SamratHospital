import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'smshospitalsecretkeynewone';

export async function middleware(request) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  // 1. If at /login and already have a valid token, redirect to dashboard
  if (pathname === '/login') {
    if (token) {
      try {
        const secret = new TextEncoder().encode(JWT_SECRET);
        const { payload } = await jwtVerify(token, secret);
        
        if (payload.role === 'director') {
          return NextResponse.redirect(new URL('/dashboard/director', request.url));
        } else if (payload.role === 'receptionist') {
          return NextResponse.redirect(new URL('/dashboard/receptionist', request.url));
        }
      } catch (err) {
        // Token invalid, let them stay at login
      }
    }
    return NextResponse.next();
  }

  // 2. Protect dashboard and api/director routes (but allow public GET on /api/director/doctors)
  const isPublicApiRoute = pathname === '/api/director/doctors';
  if ((pathname.startsWith('/dashboard') || pathname.startsWith('/api/director')) && !isPublicApiRoute) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      const secret = new TextEncoder().encode(JWT_SECRET);
      const { payload } = await jwtVerify(token, secret);

      // Role-based authorization for dashboards
      if (pathname.startsWith('/dashboard/director') && payload.role !== 'director') {
        return NextResponse.redirect(new URL('/dashboard/receptionist', request.url));
      }

      if (pathname.startsWith('/dashboard/receptionist') && payload.role !== 'receptionist') {
        // If director tries to access receptionist board, they might be allowed or not. 
        // Typically director can access everything, but for a clean UI, redirect them if they visit the wrong one.
        if (payload.role === 'director') {
            return NextResponse.redirect(new URL('/dashboard/director', request.url));
        }
      }

      // If all good, proceed
      return NextResponse.next();
    } catch (err) {
      // Token invalid or expired
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('token');
      return response;
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard/:path*', '/login', '/api/director/:path*'],
};
