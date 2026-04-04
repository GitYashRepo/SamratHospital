"use client"

import { useState, useEffect } from "react"
import { 
   Calendar, 
   LogOut, 
   Check, 
   X, 
   Clock,
   Loader2,
   Hospital,
   Activity,
   CheckCircle,
   AlertCircle
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function ReceptionistDashboard() {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true)
   const [appointments, setAppointments] = useState([])
   const [activeFilter, setActiveFilter] = useState("all")
   const router = useRouter()

   useEffect(() => {
      fetchUser()
      fetchAppointments()
   }, [])

   const fetchUser = async () => {
      try {
         const res = await fetch("/api/auth/me")
         const d = await res.json()
         if (res.ok) {
            setUser(d.user)
         }
      } catch (err) {
         console.error("Auth error", err)
      } finally {
         setLoading(false)
      }
   }

   const fetchAppointments = async () => {
      try {
         const res = await fetch("/api/appointments")
         const d = await res.json()
         if (res.ok) {
            setAppointments(d.data || [])
         }
      } catch (err) {
         console.error("Error fetching appointments:", err)
      }
   }

   const handleUpdateStatus = async (id, newStatus) => {
      try {
         const res = await fetch(`/api/appointments/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: newStatus })
         })
         if (res.ok) fetchAppointments()
      } catch (err) {
         console.error(err)
      }
   }

   const handleLogout = async () => {
      await fetch("/api/auth/logout", { method: "POST" })
      router.push("/login")
   }

   const filteredAppointments = appointments.filter(app => {
      if (activeFilter === "all") return true
      return app.status === activeFilter
   })

   const stats = {
      pending: appointments.filter(a => a.status === "pending").length,
      confirmed: appointments.filter(a => a.status === "confirmed").length,
      total: appointments.length
   }

   if (loading) return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
         <Loader2 className="w-10 h-10 animate-spin text-[#00A896]" />
      </div>
   )

   return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
         {/* Top Header */}
         <header className="bg-[#1E3A5F] text-white p-6 shadow-xl sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center px-4">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#00A896] flex items-center justify-center shadow-lg shadow-[#00A896]/20">
                     <Hospital className="w-7 h-7 text-white" />
                  </div>
                  <div>
                     <h1 className="text-xl font-bold font-display">Reception Portal</h1>
                     <p className="text-sm text-white/50 tracking-wide uppercase">Samrat Hospital</p>
                  </div>
               </div>

               <div className="flex items-center gap-6">
                  <div className="hidden md:flex flex-col items-end">
                     <span className="text-sm font-semibold text-[#00A896]">Ready for Duty</span>
                     <span className="text-xs text-white/40 uppercase font-bold tracking-widest">{user?.name}</span>
                  </div>
                  <button 
                     onClick={handleLogout}
                     className="p-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl transition-all border border-red-500/10"
                     title="Logout"
                  >
                     <LogOut className="w-5 h-5" />
                  </button>
               </div>
            </div>
         </header>

         <main className="container mx-auto p-6 md:p-10 flex-grow">
            {/* Quick Stats Banner */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
               <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-5">
                  <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center">
                     <Clock className="w-7 h-7 text-yellow-500" />
                  </div>
                  <div>
                     <p className="text-sm text-gray-500 font-medium">Pending Appointments</p>
                     <h4 className="text-3xl font-bold text-[#1E3A5F]">{stats.pending}</h4>
                  </div>
               </div>
               <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-5">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
                     <CheckCircle className="w-7 h-7 text-blue-500" />
                  </div>
                  <div>
                     <p className="text-sm text-gray-500 font-medium">Confirmed Today</p>
                     <h4 className="text-3xl font-bold text-[#1E3A5F]">{stats.confirmed}</h4>
                  </div>
               </div>
               <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-5">
                  <div className="w-14 h-14 bg-[#00A896]/5 rounded-2xl flex items-center justify-center">
                     <Activity className="w-7 h-7 text-[#00A896]" />
                  </div>
                  <div>
                     <p className="text-sm text-gray-500 font-medium">Total Bookings</p>
                     <h4 className="text-3xl font-bold text-[#1E3A5F]">{stats.total}</h4>
                  </div>
               </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-4 mb-4">
               {["all", "pending", "confirmed", "cancelled", "completed"].map(tab => (
                  <button
                     key={tab}
                     onClick={() => setActiveFilter(tab)}
                     className={`px-6 py-3 rounded-2xl transition-all font-bold text-sm uppercase tracking-wide border-2 ${
                        activeFilter === tab 
                        ? "bg-[#1E3A5F] border-[#1E3A5F] text-white shadow-xl" 
                        : "bg-white border-gray-100 text-gray-400 hover:border-gray-200"
                     }`}
                  >
                     {tab}
                  </button>
               ))}
            </div>

            {/* Appointment List */}
            <div className="bg-white rounded-[40px] p-4 md:p-10 shadow-sm border border-gray-100 min-h-[600px]">
               <div className="overflow-x-auto">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-gray-50 text-gray-400 text-xs uppercase font-extrabold tracking-widest">
                           <th className="pb-6 px-4">Patient Information</th>
                           <th className="pb-6 px-4">Department</th>
                           <th className="pb-6 px-4">Schedule</th>
                           <th className="pb-6 px-4">Notes</th>
                           <th className="pb-6 px-4">Status</th>
                           <th className="pb-6 px-4 text-right">Quick Actions</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-50">
                        {filteredAppointments.length > 0 ? (
                           filteredAppointments.map((app) => (
                              <tr key={app._id} className="hover:bg-gray-50/50 transition-all group">
                                 <td className="py-6 px-4">
                                    <div className="font-bold text-[#1E3A5F] text-lg">{app.fullName}</div>
                                    <div className="text-xs font-semibold text-gray-400">{app.email} | {app.phone}</div>
                                 </td>
                                 <td className="py-6 px-4">
                                    <span className="bg-gray-100 px-4 py-2 rounded-xl text-xs font-bold text-gray-600 uppercase tracking-widest border border-gray-200">
                                       {app.selectedSpecialty}
                                    </span>
                                 </td>
                                 <td className="py-6 px-4">
                                    <div className="flex items-center gap-2 text-sm text-gray-700 font-bold">
                                       <Calendar className="w-4 h-4 text-[#00A896]" />
                                       {app.appointmentDate}
                                    </div>
                                    <div className="text-xs text-[#00A896] font-extrabold ml-6">{app.appointmentTime}</div>
                                 </td>
                                 <td className="py-6 px-4">
                                    <p className="text-sm text-gray-500 max-w-[200px] truncate" title={app.notes}>
                                       {app.notes || "No notes provided"}
                                    </p>
                                 </td>
                                 <td className="py-6 px-4">
                                    <span className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-tighter shadow-sm border ${
                                       app.status === "pending" ? "bg-yellow-50 border-yellow-100 text-yellow-600" :
                                       app.status === "confirmed" ? "bg-blue-50 border-blue-100 text-blue-600" :
                                       app.status === "completed" ? "bg-green-50 border-green-100 text-green-600" :
                                       "bg-red-50 border-red-100 text-red-600"
                                    }`}>
                                       {app.status}
                                    </span>
                                 </td>
                                 <td className="py-6 px-4 text-right">
                                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all">
                                       {app.status === "pending" && (
                                          <>
                                             <button 
                                                onClick={() => handleUpdateStatus(app._id, "confirmed")}
                                                className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-500/20"
                                                title="Confirm Appointment"
                                             >
                                                <Check className="w-4 h-4" />
                                             </button>
                                             <button 
                                                onClick={() => handleUpdateStatus(app._id, "cancelled")}
                                                className="p-3 bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-lg shadow-red-500/20"
                                                title="Cancel Appointment"
                                             >
                                                <X className="w-4 h-4" />
                                             </button>
                                          </>
                                       )}
                                       {app.status === "confirmed" && (
                                          <button 
                                             onClick={() => handleUpdateStatus(app._id, "completed")}
                                             className="p-3 bg-green-500 hover:bg-green-600 text-white rounded-xl shadow-lg shadow-green-500/20"
                                             title="Mark as Completed"
                                          >
                                             <CheckCircle className="w-4 h-4" />
                                          </button>
                                       )}
                                    </div>
                                 </td>
                              </tr>
                           ))
                        ) : (
                           <tr>
                              <td colSpan="6" className="py-20 text-center">
                                 <div className="flex flex-col items-center gap-4 text-gray-300">
                                    <AlertCircle className="w-16 h-16" />
                                    <p className="font-bold text-xl">No appointments found matching this filter.</p>
                                 </div>
                              </td>
                           </tr>
                        )}
                     </tbody>
                  </table>
               </div>
            </div>
         </main>

         {/* Simple Footer */}
         <footer className="p-8 text-center text-gray-400 text-xs font-bold uppercase tracking-widest border-t border-gray-100">
            © 2026 Samrat Hospital Reception Portal | Privacy Secured
         </footer>
      </div>
   )
}
