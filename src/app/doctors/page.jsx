"use client";

import { Star, Award, Clock, Users, Loader2 } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link";

const DoctorsPage = () => {
   const [doctors, setDoctors] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      fetchDoctors()
   }, [])

   const fetchDoctors = async () => {
      try {
         const res = await fetch("/api/director/doctors")
         const data = await res.json()
         if (res.ok) {
            setDoctors(data.data || [])
         }
      } catch (err) {
         console.error("Error fetching doctors:", err)
      } finally {
         setLoading(false)
      }
   }

   return (
      <div className="min-h-screen bg-white">
         {/* Hero Section */}
         <section
            style={{
               background: "linear-gradient(to bottom right, rgb(30, 58, 95), rgb(43, 74, 111))",
            }}
            className="relative py-20 lg:py-32 overflow-hidden text-white"
         >
            <div className="absolute inset-0 opacity-10">
               <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full" />
               <div className="absolute bottom-20 right-20 w-96 h-96 border border-white rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative">
               <div className="max-w-3xl">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Expert Doctors</h1>
                  <p className="text-xl text-gray-200 leading-relaxed">
                     Meet our team of highly qualified physicians dedicated to providing exceptional patient care.
                  </p>
               </div>
            </div>
         </section>

         {/* Doctors Grid */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {loading ? (
                     <div className="col-span-full py-20 flex justify-center">
                        <Loader2 className="w-12 h-12 animate-spin text-[#00A896]" />
                     </div>
                  ) : doctors.length > 0 ? (
                     doctors.map((doctor) => (
                        <div
                           key={doctor._id}
                           className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-[#00A896]/10 bg-white group"
                        >
                           {/* Doctor Image */}
                           <div className="relative overflow-hidden h-72">
                              <img
                                 src={doctor.image || "/placeholder.svg"}
                                 alt={doctor.name}
                                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                              {/* Specialty Badge */}
                              {doctor.specialty && (
                                 <div
                                    className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1.5 rounded-full text-white text-xs font-bold"
                                    style={{ background: "rgba(0,168,150,0.85)", backdropFilter: "blur(4px)" }}
                                 >
                                    <Star className="w-3 h-3 fill-current" />
                                    {doctor.specialty}
                                 </div>
                              )}

                              {/* Name over image */}
                              <div className="absolute bottom-0 left-0 right-0 p-5">
                                 <h3 className="text-xl font-bold text-white">{doctor.name}</h3>
                                 <p className="text-sm text-[#7DD3C0] font-medium">{doctor.qualification}</p>
                              </div>
                           </div>

                           {/* Content */}
                           <div className="p-5">
                              {/* Experience & Availability */}
                              <div className="flex flex-wrap gap-2 mb-4">
                                 {doctor.experience && (
                                    <span className="flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                                       <Award className="w-3.5 h-3.5" />
                                       {doctor.experience}
                                    </span>
                                 )}
                                 {doctor.availability && (
                                    <span className="flex items-center gap-1.5 text-xs font-semibold text-orange-700 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100">
                                       <Clock className="w-3.5 h-3.5" />
                                       {doctor.availability}
                                    </span>
                                 )}
                              </div>

                              <p className="text-sm text-gray-600 mb-5 line-clamp-2 leading-relaxed">{doctor.description}</p>

                              {/* Action Button */}
                              <Link href="/book-appointment" className="block">
                                 <Button
                                    style={{ background: "#00A896" }}
                                    className="w-full text-white rounded-xl text-sm font-bold hover:opacity-90 py-5"
                                 >
                                    Book Appointment
                                 </Button>
                              </Link>
                           </div>
                        </div>
                     ))
                  ) : (
                     <div className="col-span-full py-20 text-center">
                        <div className="text-gray-400 text-6xl mb-4">🏥</div>
                        <p className="text-gray-500 font-medium text-lg">No doctors found. Please check back later.</p>
                     </div>
                  )}
               </div>
            </div>
         </section>

         {/* Why Choose Section */}
         <section
            style={{
               background: "linear-gradient(to right, rgb(230, 244, 241), rgb(240, 249, 248))",
            }}
            className="py-20"
         >
            <div className="container mx-auto px-6">
               <div className="max-w-3xl mx-auto">
                  <h2 className="text-4xl font-bold text-[#1E3A5F] mb-12 text-center">Why Choose Our Doctors?</h2>

                  <div className="grid md:grid-cols-2 gap-8">
                     <div style={{ borderColor: "rgba(0, 168, 150, 0.2)" }} className="p-8 rounded-2xl bg-white border">
                        <Award className="w-10 h-10 text-[#00A896] mb-4" />
                        <h3 className="text-lg font-bold text-[#1E3A5F] mb-3">Board Certified</h3>
                        <p className="text-gray-600">All our physicians are board-certified in their respective specialties.</p>
                     </div>

                     <div style={{ borderColor: "rgba(247, 127, 0, 0.2)" }} className="p-8 rounded-2xl bg-white border">
                        <Users className="w-10 h-10 text-[#F77F00] mb-4" />
                        <h3 className="text-lg font-bold text-[#1E3A5F] mb-3">Patient Centered</h3>
                        <p className="text-gray-600">We prioritize patient comfort and satisfaction in all treatments.</p>
                     </div>

                     <div style={{ borderColor: "rgba(1, 128, 144, 0.2)" }} className="p-8 rounded-2xl bg-white border">
                        <Star className="w-10 h-10 text-[#028090] mb-4" />
                        <h3 className="text-lg font-bold text-[#1E3A5F] mb-3">Highly Experienced</h3>
                        <p className="text-gray-600">Our doctors have an average of 20+ years of clinical experience.</p>
                     </div>

                     <div style={{ borderColor: "rgba(214, 40, 40, 0.2)" }} className="p-8 rounded-2xl bg-white border">
                        <Clock className="w-10 h-10 text-[#D62828] mb-4" />
                        <h3 className="text-lg font-bold text-[#1E3A5F] mb-3">Always Available</h3>
                        <p className="text-gray-600">Flexible scheduling and emergency services available 24/7.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section
            style={{
               background: "linear-gradient(to right, #00A896, #028090)",
            }}
            className="py-20 text-white"
         >
            <div className="container mx-auto px-6 text-center">
               <h2 className="text-4xl font-bold mb-6">Ready to Schedule an Appointment?</h2>
               <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Contact our scheduling team or book your appointment online today. Our doctors look forward to serving you.
               </p>
               <Link href="/book-appointment">
                  <Button className="bg-white text-[#00A896] hover:bg-gray-100 px-8 py-6 rounded-full text-base font-medium shadow-lg">
                     Book Now
                  </Button>
               </Link>
            </div>
         </section>
      </div>
   )
}

export default DoctorsPage
