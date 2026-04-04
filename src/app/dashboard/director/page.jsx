"use client"

import { useState, useEffect } from "react"
import { 
   Users, 
   Stethoscope, 
   Calendar, 
   MessageSquare, 
   LogOut, 
   Plus, 
   Trash2, 
   Clock,
   Loader2,
   Upload,
   Hospital,
   Award,
   Star
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function DirectorDashboard() {
   const [activeTab, setActiveTab] = useState("receptionists")
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true)
   const [data, setData] = useState({
      receptionists: [],
      doctors: [],
      appointments: [],
      messages: []
   })
   const [isModalOpen, setIsModalOpen] = useState(false)
   const [formData, setFormData] = useState({})
   const [actionLoading, setActionLoading] = useState(false)
   const router = useRouter()

   const messageStatuses = ["unread", "read", "meeting_scheduled", "resolved"]

   useEffect(() => {
      fetchUser()
      fetchAllData()
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

   const fetchAllData = async () => {
      try {
         const [recRes, docRes, appRes, msgRes] = await Promise.all([
            fetch("/api/director/receptionists"),
            fetch("/api/director/doctors"),
            fetch("/api/appointments"),
            fetch("/api/contact")
         ])
         
         const [receptionists, doctors, appointments, messages] = await Promise.all([
            recRes.json(),
            docRes.json(),
            appRes.json(),
            msgRes.json()
         ])

         setData({
            receptionists: receptionists.data || [],
            doctors: doctors.data || [],
            appointments: appointments.data || [],
            messages: messages.data || []
         })
      } catch (err) {
         console.error("Error fetching data:", err)
      }
   }

   const handleLogout = async () => {
      await fetch("/api/auth/logout", { method: "POST" })
      router.push("/login")
   }

   const handleDelete = async (type, id) => {
      if (!confirm("Are you sure?")) return
      try {
         const endpoint = type === "receptionist" ? `/api/director/receptionists/${id}` : `/api/director/doctors/${id}`
         const res = await fetch(endpoint, { method: "DELETE" })
         if (res.ok) {
            fetchAllData()
         }
      } catch (err) {
         console.error(err)
      }
   }

   const handleCreate = async (e) => {
      e.preventDefault()
      setActionLoading(true)
      try {
         let res
         if (activeTab === "receptionists") {
            res = await fetch("/api/director/receptionists", {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify(formData)
            })
         } else if (activeTab === "doctors") {
            const fd = new FormData()
            fd.append("name", formData.name || "")
            fd.append("qualification", formData.qualification || "")
            fd.append("specialty", formData.specialty || "")
            fd.append("experience", formData.experience || "")
            fd.append("availability", formData.availability || "")
            fd.append("description", formData.description || "")
            fd.append("image", formData.imageFile)
            
            res = await fetch("/api/director/doctors", {
               method: "POST",
               body: fd
            })
         }

         if (res.ok) {
            setIsModalOpen(false)
            setFormData({})
            fetchAllData()
         } else {
            const error = await res.json()
            alert(error.message || "Failed to create")
         }
      } catch (err) {
         console.error(err)
      } finally {
         setActionLoading(false)
      }
   }

   const handleUpdateStatus = async (type, id, newStatus) => {
      try {
         const endpoint = type === "appointment" ? `/api/appointments/${id}` : `/api/contact/${id}`
         const res = await fetch(endpoint, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: newStatus })
         })
         if (res.ok) fetchAllData()
      } catch (err) {
         console.error(err)
      }
   }

   if (loading) return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
         <Loader2 className="w-10 h-10 animate-spin text-[#00A896]" />
      </div>
   )

   return (
      <div className="min-h-screen bg-[#F8FAFC] flex">
         {/* Sidebar */}
         <aside className="w-72 bg-[#1E3A5F] text-white flex flex-col shadow-2xl">
            <div className="p-8 border-b border-white/10 flex items-center gap-3">
               <div className="w-10 h-10 rounded-xl bg-[#00A896] flex items-center justify-center">
                  <Hospital className="w-6 h-6 text-white" />
               </div>
               <div>
                  <h1 className="font-bold text-lg leading-tight">Director</h1>
                  <p className="text-xs text-white/50">Samrat Hospital</p>
               </div>
            </div>

            <nav className="flex-grow p-6 space-y-2">
               {[
                  { id: "receptionists", icon: Users, label: "Receptionists" },
                  { id: "doctors", icon: Stethoscope, label: "Doctors" },
                  { id: "appointments", icon: Calendar, label: "Appointments" },
                  { id: "messages", icon: MessageSquare, label: "Contact Inquiries" }
               ].map((item) => (
                  <button
                     key={item.id}
                     onClick={() => setActiveTab(item.id)}
                     className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        activeTab === item.id 
                        ? "bg-[#00A896] text-white shadow-lg" 
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                     }`}
                  >
                     <item.icon className="w-5 h-5" />
                     <span className="font-medium">{item.label}</span>
                  </button>
               ))}
            </nav>

            <div className="p-6 mt-auto">
               <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-300 hover:bg-red-500/10 hover:text-red-400 transition-all font-medium"
               >
                  <LogOut className="w-5 h-5" />
                  Sign Out
               </button>
            </div>
         </aside>

         {/* Main Content */}
         <main className="flex-grow p-10 overflow-y-auto max-h-screen">
            <header className="flex justify-between items-center mb-10">
               <div>
                  <h2 className="text-3xl font-bold text-[#1E3A5F] capitalize">
                     {activeTab.replace("-", " ")}
                  </h2>
                  <p className="text-gray-500 mt-1">Manage and monitor hospital {activeTab}.</p>
               </div>
               
               {(activeTab === "receptionists" || activeTab === "doctors") && (
                  <button 
                     onClick={() => setIsModalOpen(true)}
                     className="flex items-center gap-2 bg-[#00A896] hover:bg-[#008F7E] text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-[#00A896]/20"
                  >
                     <Plus className="w-5 h-5" />
                     Add New {activeTab === "receptionists" ? "Receptionist" : "Doctor"}
                  </button>
               )}
            </header>

            {/* Content Tables/Cards */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
               {activeTab === "receptionists" && (
                  <div className="overflow-x-auto">
                     <table className="w-full text-left">
                        <thead>
                           <tr className="border-b border-gray-100 text-gray-400 text-sm uppercase font-semibold">
                              <th className="pb-4 px-4 font-semibold">Name</th>
                              <th className="pb-4 px-4 font-semibold">Email</th>
                              <th className="pb-4 px-4 font-semibold">Created At</th>
                              <th className="pb-4 px-4 font-semibold text-right">Actions</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                           {data.receptionists.map((rec) => (
                              <tr key={rec._id} className="hover:bg-gray-50/50 transition-colors">
                                 <td className="py-4 px-4 font-medium text-[#1E3A5F]">{rec.name}</td>
                                 <td className="py-4 px-4 text-gray-500">{rec.email}</td>
                                 <td className="py-4 px-4 text-gray-400 text-sm">
                                    {new Date(rec.createdAt).toLocaleDateString()}
                                 </td>
                                 <td className="py-4 px-4 text-right">
                                    <button 
                                       onClick={() => handleDelete("receptionist", rec._id)}
                                       className="p-2 text-red-500 hover:bg-red-50 border border-transparent rounded-lg transition-all"
                                    >
                                       <Trash2 className="w-5 h-5" />
                                    </button>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               )}

               {activeTab === "doctors" && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {data.doctors.map((doc) => (
                        <div key={doc._id} className="group bg-[#FBFDFF] border border-gray-100 p-6 rounded-2xl hover:shadow-xl transition-all relative">
                           <button 
                              onClick={() => handleDelete("doctor", doc._id)}
                              className="absolute top-4 right-4 p-2 text-red-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all pointer-events-auto"
                           >
                              <Trash2 className="w-4 h-4" />
                           </button>
                           <div className="flex items-center gap-4 mb-4">
                              <img src={doc.image} alt={doc.name} className="w-16 h-16 rounded-xl object-cover shadow-md" />
                              <div>
                                 <h3 className="font-bold text-[#1E3A5F]">{doc.name}</h3>
                                 <p className="text-sm font-medium text-[#00A896]">{doc.qualification}</p>
                              </div>
                           </div>
                           <div className="flex flex-wrap gap-2 mb-3">
                              {doc.specialty && (
                                 <span className="bg-[#00A896]/10 text-[#00A896] px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
                                    <Star className="w-3 h-3" />{doc.specialty}
                                 </span>
                              )}
                              {doc.experience && (
                                 <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
                                    <Award className="w-3 h-3" />{doc.experience}
                                 </span>
                              )}
                              {doc.availability && (
                                 <span className="bg-orange-50 text-orange-600 px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
                                    <Clock className="w-3 h-3" />{doc.availability}
                                 </span>
                              )}
                           </div>
                           <p className="text-sm text-gray-500 line-clamp-3">{doc.description}</p>
                        </div>
                     ))}
                  </div>
               )}

               {activeTab === "appointments" && (
                  <div className="overflow-x-auto">
                     <table className="w-full text-left">
                        <thead>
                           <tr className="border-b border-gray-100 text-gray-400 text-sm uppercase font-semibold">
                              <th className="pb-4 px-4 font-semibold">Patient</th>
                              <th className="pb-4 px-4 font-semibold">Contact</th>
                              <th className="pb-4 px-4 font-semibold">Specialty</th>
                              <th className="pb-4 px-4 font-semibold">Time Slot</th>
                              <th className="pb-4 px-4 font-semibold">Status</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                           {data.appointments.map((app) => (
                              <tr key={app._id} className="hover:bg-gray-50/50 transition-colors">
                                 <td className="py-4 px-4">
                                    <div className="font-medium text-[#1E3A5F]">{app.fullName}</div>
                                    <div className="text-xs text-gray-400">{app.email}</div>
                                 </td>
                                 <td className="py-4 px-4 text-gray-600">{app.phone}</td>
                                 <td className="py-4 px-4">
                                    <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                       {app.selectedSpecialty}
                                    </span>
                                 </td>
                                 <td className="py-4 px-4">
                                    <div className="text-sm text-gray-700">{app.appointmentDate}</div>
                                    <div className="text-xs text-[#00A896] font-medium">{app.appointmentTime}</div>
                                 </td>
                                 <td className="py-4 px-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                                       app.status === "pending" ? "bg-yellow-50 text-yellow-600" :
                                       app.status === "confirmed" ? "bg-blue-50 text-blue-600" :
                                       app.status === "completed" ? "bg-green-50 text-green-600" :
                                       "bg-red-50 text-red-600"
                                    }`}>
                                       {app.status}
                                    </span>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               )}

               {activeTab === "messages" && (
                  <div className="space-y-4">
                     {data.messages.map((msg) => (
                        <div key={msg._id} className="border border-gray-100 p-6 rounded-2xl bg-white hover:border-[#00A896]/20 transition-all group">
                           <div className="flex justify-between items-start mb-4">
                              <div>
                                 <h3 className="font-bold text-[#1E3A5F]">{msg.subject}</h3>
                                 <p className="text-sm text-gray-500">From: {msg.name} ({msg.email})</p>
                              </div>
                              <select 
                                 value={msg.status}
                                 onChange={(e) => handleUpdateStatus("message", msg._id, e.target.value)}
                                 className={`text-xs font-bold uppercase rounded-lg px-3 py-2 border outline-none cursor-pointer ${
                                    msg.status === "unread" ? "bg-red-50 border-red-100 text-red-500" :
                                    msg.status === "meeting_scheduled" ? "bg-orange-50 border-orange-100 text-orange-500" :
                                    msg.status === "read" ? "bg-gray-50 border-gray-100 text-gray-500" :
                                    "bg-green-50 border-green-100 text-green-500"
                                 }`}
                              >
                                 {messageStatuses.map(s => (
                                    <option key={s} value={s}>{s.replace("_", " ")}</option>
                                 ))}
                              </select>
                           </div>
                           <p className="text-gray-600 text-sm leading-relaxed mb-4">{msg.message}</p>
                           <div className="flex items-center gap-4 text-xs text-gray-400">
                              <span>Phone: {msg.phone || "N/A"}</span>
                              <span>•</span>
                              <span>Sent: {new Date(msg.createdAt).toLocaleString()}</span>
                           </div>
                        </div>
                     ))}
                  </div>
               )}
            </div>
         </main>

         {/* Modal for Creating */}
         {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E3A5F]/40 backdrop-blur-sm p-6">
               <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
                  {/* Modal Header */}
                  <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-[#FBFDFF] shrink-0">
                     <h3 className="text-xl font-bold text-[#1E3A5F]">
                        Add New {activeTab === "receptionists" ? "Receptionist Account" : "Doctor Profile"}
                     </h3>
                     <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full text-gray-400">
                        <span className="text-2xl leading-none">&times;</span>
                     </button>
                  </div>

                  {/* Scrollable Form Body */}
                  <div className="overflow-y-auto flex-1">
                     <form onSubmit={handleCreate} className="p-8 space-y-5">
                        {activeTab === "receptionists" ? (
                           <>
                              <div>
                                 <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">Full Name</label>
                                 <input 
                                    type="text" 
                                    required
                                    placeholder="e.g. Priya Sharma"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00A896]/20 focus:border-[#00A896] outline-none"
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                 />
                              </div>
                              <div>
                                 <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">Email Address</label>
                                 <input 
                                    type="email" 
                                    required
                                    placeholder="e.g. priya@samrathospital.com"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00A896]/20 focus:border-[#00A896] outline-none"
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                 />
                              </div>
                              <div>
                                 <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">Password</label>
                                 <input 
                                    type="password" 
                                    required
                                    placeholder="Set a secure password"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00A896]/20 focus:border-[#00A896] outline-none"
                                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                                 />
                              </div>
                           </>
                        ) : (
                           <>
                              {/* Row 1: Name & Qualification */}
                              <div className="grid md:grid-cols-2 gap-4">
                                 <div>
                                    <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">Doctor Name</label>
                                    <input 
                                       type="text" 
                                       required
                                       placeholder="e.g. Dr. Ramesh Gupta"
                                       className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00A896]/20 focus:border-[#00A896] outline-none"
                                       onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                                 </div>
                                 <div>
                                    <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">Qualification</label>
                                    <input 
                                       type="text" 
                                       required
                                       placeholder="e.g. MBBS, MD - Cardiology"
                                       className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00A896]/20 focus:border-[#00A896] outline-none"
                                       onChange={(e) => setFormData({...formData, qualification: e.target.value})}
                                    />
                                 </div>
                              </div>

                              {/* Row 2: Specialty & Experience */}
                              <div className="grid md:grid-cols-2 gap-4">
                                 <div>
                                    <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">Specialty / Department</label>
                                    <input 
                                       type="text" 
                                       required
                                       placeholder="e.g. Cardiology"
                                       className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00A896]/20 focus:border-[#00A896] outline-none"
                                       onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                                    />
                                 </div>
                                 <div>
                                    <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">Experience</label>
                                    <input 
                                       type="text" 
                                       required
                                       placeholder="e.g. 12+ years"
                                       className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00A896]/20 focus:border-[#00A896] outline-none"
                                       onChange={(e) => setFormData({...formData, experience: e.target.value})}
                                    />
                                 </div>
                              </div>

                              {/* Row 3: Availability */}
                              <div>
                                 <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">Availability / Timings</label>
                                 <input 
                                    type="text" 
                                    required
                                    placeholder="e.g. Mon-Fri 9AM-5PM"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00A896]/20 focus:border-[#00A896] outline-none"
                                    onChange={(e) => setFormData({...formData, availability: e.target.value})}
                                 />
                              </div>

                              {/* Row 4: Description */}
                              <div>
                                 <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">Short Bio / Description</label>
                                 <textarea 
                                    required
                                    rows={3}
                                    placeholder="A brief professional bio highlighting expertise..."
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00A896]/20 focus:border-[#00A896] outline-none resize-none"
                                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                                 />
                              </div>

                              {/* Row 5: Photo Upload */}
                              <div>
                                 <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">Doctor&apos;s Portrait Photo</label>
                                 <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center bg-[#FBFDFF] group hover:bg-[#F3F7FA] transition-all">
                                    <Upload className="w-8 h-8 text-gray-300 group-hover:text-[#00A896] mb-2 transition-all" />
                                    <span className="text-sm text-gray-500 font-medium">
                                       {formData.imageFile ? formData.imageFile.name : "Click to upload image"}
                                    </span>
                                    <span className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</span>
                                    <input 
                                       type="file" 
                                       required
                                       accept="image/*"
                                       className="absolute inset-0 opacity-0 cursor-pointer"
                                       onChange={(e) => setFormData({...formData, imageFile: e.target.files[0]})}
                                    />
                                 </div>
                              </div>
                           </>
                        )}

                        <button 
                           type="submit" 
                           disabled={actionLoading}
                           className="w-full py-4 bg-[#1E3A5F] text-white rounded-xl font-bold shadow-xl shadow-[#1E3A5F]/20 transition-all hover:bg-[#152a45] disabled:opacity-50"
                        >
                           {actionLoading ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : "Save Profile"}
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         )}
      </div>
   )
}
