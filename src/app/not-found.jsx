"use client"

import Link from "next/link"
import { Home, ArrowRight, AlertCircle } from "lucide-react"
import { useState, useEffect } from "react"

export default function NotFound() {
   const [isLoaded, setIsLoaded] = useState(false)

   useEffect(() => {
      setIsLoaded(true)
   }, [])

   return (
      <div
         className="min-h-screen w-full"
         style={{ background: "linear-gradient(135deg, #1E3A5F 0%, #2B4A6F 50%, #028090 100%)" }}
      >
         {/* Content Container */}
         <div className="flex flex-col items-center justify-center min-h-screen px-4 py-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
               <div
                  className="absolute top-10 left-10 w-20 h-20 rounded-full opacity-10"
                  style={{ background: "#00A896" }}
               />
               <div
                  className="absolute bottom-20 right-10 w-32 h-32 rounded-full opacity-10"
                  style={{ background: "#F77F00" }}
               />
            </div>

            {/* Main Content */}
            <div
               className={`relative z-10 text-center max-w-2xl transition-all duration-1000 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
               {/* Animated 404 Graphic */}
               <div className="mb-8">
                  <div className="relative inline-block">
                     <div
                        className="text-9xl font-black text-white drop-shadow-2xl"
                        style={{ textShadow: "0 10px 30px rgba(0, 0, 0, 0.5)" }}
                     >
                        404
                     </div>

                     {/* Medical Alert Icon */}
                     <div className="absolute -top-6 -right-8 animate-bounce">
                        <div className="bg-red-500 text-white p-3 rounded-full shadow-lg">
                           <AlertCircle size={32} />
                        </div>
                     </div>

                     {/* Animated Pulse */}
                     <div
                        className="absolute inset-0 rounded-lg"
                        style={{
                           animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                           border: "2px solid #00A896",
                           opacity: "0.3",
                        }}
                     />
                  </div>
               </div>

               {/* Animated GIF Container */}
               <div className="mb-8 relative h-48 flex items-center justify-center">
                  <div className="relative w-full h-full bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center overflow-hidden">
                     {/* Placeholder for animated GIF - Using CSS Animation instead */}
                     <div className="text-center">
                        <div className="inline-block">
                           <div
                              className="w-32 h-32 rounded-full flex items-center justify-center"
                              style={{
                                 background: "linear-gradient(135deg, #00A896, #7DD3C0)",
                                 animation: "spin 3s linear infinite",
                              }}
                           >
                              <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                                 <span className="text-4xl">🏥</span>
                              </div>
                           </div>
                        </div>
                        <p className="mt-4 text-white/80 font-medium">Page Not Found!</p>
                     </div>
                  </div>
               </div>

               {/* Heading */}
               <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                  Oops! This Page Went Missing
               </h1>

               {/* Description */}
               <p className="text-lg text-white/90 mb-6 leading-relaxed">
                  Looks like this page checked out of our system. It might have been transferred to another department or
                  simply doesn't exist. Don't worry, we'll help you find what you're looking for!
               </p>

               {/* Stats Cards */}
               <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 hover:bg-white/20 transition-all">
                     <div className="text-2xl font-bold text-orange-400">50+</div>
                     <div className="text-sm text-white/70">Services</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 hover:bg-white/20 transition-all">
                     <div className="text-2xl font-bold text-teal-300">100+</div>
                     <div className="text-sm text-white/70">Doctors</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 hover:bg-white/20 transition-all">
                     <div className="text-2xl font-bold text-blue-300">24/7</div>
                     <div className="text-sm text-white/70">Support</div>
                  </div>
               </div>

               {/* Action Buttons */}
               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                     href="/"
                     className="group flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                     style={{
                        background: "linear-gradient(135deg, #00A896, #028090)",
                        color: "white",
                     }}
                  >
                     <Home size={24} />
                     <span>Back to Home</span>
                     <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>

                  <Link
                     href="/contact"
                     className="px-8 py-4 rounded-lg font-semibold text-lg text-white border-2 border-white/30 hover:border-white/60 transition-all duration-300 hover:bg-white/10"
                  >
                     Contact Support
                  </Link>
               </div>

               {/* Helpful Links */}
               <div className="mt-12 pt-8 border-t border-white/20">
                  <p className="text-white/70 mb-4 text-sm">Quick Navigation:</p>
                  <div className="flex flex-wrap justify-center gap-3">
                     {[
                        { label: "About Us", href: "/about" },
                        { label: "Doctors", href: "/doctors" },
                        { label: "Departments", href: "/departments" },
                        { label: "Gallery", href: "/gallery" },
                     ].map((link) => (
                        <Link
                           key={link.href}
                           href={link.href}
                           className="text-sm px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
                        >
                           {link.label}
                        </Link>
                     ))}
                  </div>
               </div>

               {/* Emoji Animation */}
               <div
                  className="mt-8 flex justify-center gap-4 text-3xl animate-bounce"
                  style={{ "--bounce-height": "1rem" }}
               >
                  <span>🩺</span>
                  <span style={{ animationDelay: "0.1s" }}>💊</span>
                  <span style={{ animationDelay: "0.2s" }}>🏥</span>
               </div>
            </div>
         </div>

         {/* Custom CSS for animations */}
         <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
      </div>
   )
}
