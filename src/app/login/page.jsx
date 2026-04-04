"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Lock, Mail, ChevronRight, Loader2, Hospital } from "lucide-react"

export default function LoginPage() {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState("")
   const router = useRouter()

   const handleLogin = async (e) => {
      e.preventDefault()
      setLoading(true)
      setError("")

      try {
         const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
         })

         const data = await res.json()

         if (res.ok) {
            if (data.user.role === "director") {
               router.push("/dashboard/director")
            } else {
               router.push("/dashboard/receptionist")
            }
         } else {
            setError(data.message || "Login failed")
         }
      } catch (err) {
         setError("An error occurred. Please try again.")
      } finally {
         setLoading(false)
      }
   }

   return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 relative overflow-hidden">
         {/* Background Ornaments */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#00A896]/10 blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#1E3A5F]/10 blur-[100px]" />
         </div>

         <div className="w-full max-w-md relative z-10">
            {/* Logo/Header */}
            <div className="text-center mb-10">
               <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-xl mb-6 text-[#00A896]">
                  <Hospital className="w-8 h-8" />
               </div>
               <h1 className="text-3xl font-bold text-[#1E3A5F]">Welcome Back</h1>
               <p className="text-gray-500 mt-2">Sign in to manage Samrat Hospital</p>
            </div>

            {/* Login Card */}
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white">
               {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl text-center">
                     {error}
                  </div>
               )}

               <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                     <label className="block text-sm font-semibold text-[#1E3A5F] mb-2 ml-1">Email Address</label>
                     <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                           type="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#00A896]/20 focus:border-[#00A896] outline-none transition-all shadow-sm"
                           placeholder="name@hospital.com"
                           required
                        />
                     </div>
                  </div>

                  <div>
                     <label className="block text-sm font-semibold text-[#1E3A5F] mb-2 ml-1">Password</label>
                     <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                           type="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#00A896]/20 focus:border-[#00A896] outline-none transition-all shadow-sm"
                           placeholder="••••••••"
                           required
                        />
                     </div>
                  </div>

                  <button
                     type="submit"
                     disabled={loading}
                     className="w-full py-4 bg-[#1E3A5F] hover:bg-[#152a45] text-white rounded-xl font-bold shadow-lg shadow-[#1E3A5F]/20 transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
                  >
                     {loading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                     ) : (
                        <>
                           Sign In
                           <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                     )}
                  </button>
               </form>
            </div>

            {/* Footer Note */}
            <p className="text-center text-sm text-gray-500 mt-8">
               Authorized personal only. <br />
               Contact administration for credential issues.
            </p>
         </div>
      </div>
   )
}
