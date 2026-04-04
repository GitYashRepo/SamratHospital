"use client"

import { useState } from "react"
import {
   Calendar,
   Clock,
   User,
   Phone,
   Mail,
   MessageSquare,
   Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BookAppointment() {
   const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      phone: "",
      appointmentDate: "",
      appointmentTime: "",
      notes: "",
   })

   const [submitted, setSubmitted] = useState(false)
   const [loading, setLoading] = useState(false)

   const handleInputChange = (e) => {
      const { name, value } = e.target
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }))
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      setLoading(true)
      
      try {
         const res = await fetch("/api/appointments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
         })

         if (res.ok) {
            setSubmitted(true)
            setTimeout(() => {
               setFormData({
                  fullName: "",
                  email: "",
                  phone: "",
                  appointmentDate: "",
                  appointmentTime: "",
                  notes: "",
               })
               setSubmitted(false)
            }, 5000)
         } else {
            alert("Something went wrong. Please try again.")
         }
      } catch (err) {
         console.error(err)
         alert("An error occurred. Please try again.")
      } finally {
         setLoading(false)
      }
   }

   return (
      <div className="min-h-screen bg-white flex flex-col">
         {/* Hero Section */}
         <section
            style={{
               background: "linear-gradient(to bottom right, rgb(240, 249, 248), rgb(255, 255, 255), rgb(230, 244, 241))",
            }}
            className="relative overflow-hidden pt-12 pb-16"
         >
            <div
               className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"
               style={{ background: "rgba(0, 168, 150, 0.1)" }}
            />
            <div
               className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"
               style={{ background: "rgba(247, 127, 0, 0.1)" }}
            />

            <div className="container mx-auto px-6 relative">
               <div className="max-w-3xl mx-auto text-center space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A5F]">Book Your Appointment</h1>
                  <p className="text-lg text-gray-600">
                     Schedule a consultation with our expert doctors. Fill in your details and preferred time slot.
                  </p>
               </div>
            </div>
         </section>

         {/* Main Form Section */}
         <section className="flex-grow py-16 bg-gray-50">
            <div className="container mx-auto px-6">
               <div className="max-w-2xl mx-auto">
                  <form onSubmit={handleSubmit} className="space-y-6">

                     {/* Personal Information */}
                     <div className="bg-white p-8 rounded-2xl border border-gray-200">
                        <h2 className="text-xl font-bold text-[#1E3A5F] mb-6">Your Information</h2>

                        <div className="space-y-5">
                           {/* Full Name */}
                           <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                              <div className="relative">
                                 <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                 <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    placeholder="Enter your full name"
                                    required
                                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A896] focus:outline-none transition-colors"
                                 />
                              </div>
                           </div>

                           {/* Email */}
                           <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                              <div className="relative">
                                 <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                 <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="your@email.com"
                                    required
                                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A896] focus:outline-none transition-colors"
                                 />
                              </div>
                           </div>

                           {/* Phone */}
                           <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                              <div className="relative">
                                 <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                 <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="+91 55500-00000"
                                    required
                                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A896] focus:outline-none transition-colors"
                                 />
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Appointment Details */}
                     <div className="bg-white p-8 rounded-2xl border border-gray-200">
                        <h2 className="text-xl font-bold text-[#1E3A5F] mb-6">Appointment Details</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                           {/* Date */}
                           <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date *</label>
                              <div className="relative">
                                 <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                 <input
                                    type="date"
                                    name="appointmentDate"
                                    value={formData.appointmentDate}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A896] focus:outline-none transition-colors"
                                 />
                              </div>
                           </div>

                           {/* Time */}
                           <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time *</label>
                              <div className="relative">
                                 <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                 <select
                                    name="appointmentTime"
                                    value={formData.appointmentTime}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A896] focus:outline-none transition-colors appearance-none bg-white cursor-pointer"
                                 >
                                    <option value="">Select a time slot</option>
                                    <option value="09:00">09:00 AM</option>
                                    <option value="09:30">09:30 AM</option>
                                    <option value="10:00">10:00 AM</option>
                                    <option value="10:30">10:30 AM</option>
                                    <option value="11:00">11:00 AM</option>
                                    <option value="11:30">11:30 AM</option>
                                    <option value="14:00">02:00 PM</option>
                                    <option value="14:30">02:30 PM</option>
                                    <option value="15:00">03:00 PM</option>
                                    <option value="15:30">03:30 PM</option>
                                    <option value="16:00">04:00 PM</option>
                                    <option value="16:30">04:30 PM</option>
                                    <option value="17:00">05:00 PM</option>
                                    <option value="17:30">05:30 PM</option>
                                    <option value="18:00">06:00 PM</option>
                                    <option value="18:30">06:30 PM</option>
                                    <option value="19:00">07:00 PM</option>
                                    <option value="19:30">07:30 PM</option>
                                    <option value="20:00">08:00 PM</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Additional Notes */}
                     <div className="bg-white p-8 rounded-2xl border border-gray-200">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Additional Notes</label>
                        <div className="relative">
                           <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                           <textarea
                              name="notes"
                              value={formData.notes}
                              onChange={handleInputChange}
                              placeholder="Please describe your symptoms or reason for visit..."
                              rows={4}
                              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A896] focus:outline-none transition-colors resize-none"
                           />
                        </div>
                     </div>

                     {/* Submit Button */}
                     <div className="flex gap-4 justify-between items-center">
                        <p className="text-sm text-gray-500">* Required fields</p>
                        <Button
                           type="submit"
                           disabled={
                              !formData.fullName ||
                              !formData.email ||
                              !formData.phone ||
                              !formData.appointmentDate ||
                              !formData.appointmentTime ||
                              loading
                           }
                           style={{
                              background: "linear-gradient(to right, #00A896, #028090)",
                           }}
                           className="text-white px-8 py-6 rounded-full text-base font-medium shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                           {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : submitted ? "Booking Confirmed!" : "Book Appointment"}
                        </Button>
                     </div>

                     {/* Success Message */}
                     {submitted && (
                        <div
                           style={{ backgroundColor: "rgba(0, 168, 150, 0.1)", borderColor: "#00A896" }}
                           className="p-6 rounded-2xl border-2 text-center"
                        >
                           <h3 className="font-bold text-[#028090] mb-2">Appointment Booked Successfully!</h3>
                           <p className="text-gray-600">
                              We&apos;ve received your booking. Our team will confirm your appointment shortly via email and phone.
                           </p>
                        </div>
                     )}
                  </form>
               </div>
            </div>
         </section>
      </div>
   )
}
