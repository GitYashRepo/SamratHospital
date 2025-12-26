"use client";

import { Star, Award, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link";

const DoctorsPage = () => {
   const doctors = [
      {
         id: 1,
         name: "Dr. Priya Mittal",
         specialty: "Cardiology",
         experience: "10+ years",
         image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=faces",
         rating: 4.9,
         reviews: 247,
         bio: "Chief of Cardiology with expertise in interventional cardiology and complex heart procedures.",
         qualifications: [
            "MD - Harvard Medical School",
            "Board Certified in Cardiology",
            "Fellowship in Interventional Cardiology",
         ],
         availability: "Mon-Fri 9AM-5PM",
         color: "#D62828",
      },
      {
         id: 2,
         name: "Dr. Manish Yadav",
         specialty: "Neurology",
         experience: "18+ years",
         image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=faces",
         rating: 4.8,
         reviews: 198,
         bio: "Expert neurologist specializing in neurosurgery and complex neurological disorders.",
         qualifications: ["MD - Johns Hopkins University", "Board Certified in Neurology", "Fellowship in Neurosurgery"],
         availability: "Tue-Sat 10AM-6PM",
         color: "#7B2D8E",
      },
      {
         id: 3,
         name: "Dr. Sejal Pandey",
         specialty: "Pediatrics",
         experience: "15+ years",
         image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&crop=faces",
         rating: 5.0,
         reviews: 215,
         bio: "Compassionate pediatrician with special focus on emergency medicine and infant care.",
         qualifications: [
            "MD - Stanford University",
            "Board Certified in Pediatrics",
            "Fellowship in Pediatric Emergency Medicine",
         ],
         availability: "Mon-Thu 8AM-4PM",
         color: "#F77F00",
      },
      {
         id: 4,
         name: "Dr. Yuvraj Soni",
         specialty: "Orthopedics",
         experience: "22+ years",
         image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&crop=faces",
         rating: 4.9,
         reviews: 267,
         bio: "Leading orthopedic surgeon specializing in joint replacement and sports medicine.",
         qualifications: [
            "MD - Yale School of Medicine",
            "Board Certified in Orthopedic Surgery",
            "Fellowship in Joint Replacement",
         ],
         availability: "Mon-Wed-Fri 7AM-3PM",
         color: "#00A896",
      },
      {
         id: 5,
         name: "Dr. Vivek Mishra",
         specialty: "General Surgery",
         experience: "25+ years",
         image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=faces",
         rating: 4.8,
         reviews: 289,
         bio: "Senior surgeon with extensive experience in general and trauma surgery.",
         qualifications: [
            "MD - Columbia University",
            "Board Certified in General Surgery",
            "Fellowship in Trauma Surgery",
         ],
         availability: "Tue-Thu-Sat 8AM-5PM",
         color: "#D62828",
      },
      {
         id: 6,
         name: "Dr. Himanshu Singh",
         specialty: "Radiology",
         experience: "19+ years",
         image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=faces",
         rating: 4.7,
         reviews: 156,
         bio: "Expert radiologist specializing in diagnostic imaging and interventional procedures.",
         qualifications: [
            "MD - Duke University",
            "Board Certified in Radiology",
            "Fellowship in Interventional Radiology",
         ],
         availability: "Mon-Fri 9AM-6PM",
         color: "#028090",
      },
      // {
      //    id: 7,
      //    name: "Dr. Vishal Gupta",
      //    specialty: "Obstetrics & Gynecology",
      //    experience: "17+ years",
      //    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=faces",
      //    rating: 4.9,
      //    reviews: 223,
      //    bio: "Compassionate OB/GYN providing comprehensive women's health care and obstetric services.",
      //    qualifications: [
      //       "MD - University of Pennsylvania",
      //       "Board Certified in OB/GYN",
      //       "Fellowship in Maternal Fetal Medicine",
      //    ],
      //    availability: "Tue-Thu-Sat 8AM-4PM",
      //    color: "#F77F00",
      // },
      // {
      //    id: 8,
      //    name: "Dr. Ajit Sharma",
      //    specialty: "Internal Medicine",
      //    experience: "21+ years",
      //    image: "https://images.unsplash.com/photo-1537746727612-13b3971a58f3?w=400&h=500&fit=crop&crop=faces",
      //    rating: 4.8,
      //    reviews: 201,
      //    bio: "Dedicated internist providing primary care and management of chronic diseases.",
      //    qualifications: [
      //       "MD - Boston University",
      //       "Board Certified in Internal Medicine",
      //       "Board Certified in Geriatric Medicine",
      //    ],
      //    availability: "Mon-Wed-Fri 8AM-5PM",
      //    color: "#00A896",
      // },
   ]

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

         {/* Search & Filter Section */}
         <section className="py-12 bg-white border-b border-gray-100">
            <div className="container mx-auto px-6">
               <div className="flex flex-col md:flex-row gap-4">
                  <input
                     type="text"
                     placeholder="Search by doctor name or specialty..."
                     style={{ borderColor: "rgba(30, 58, 95, 0.2)" }}
                     className="flex-1 px-6 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A896]"
                  />
                  <select
                     style={{ borderColor: "rgba(30, 58, 95, 0.2)" }}
                     className="px-6 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A896]"
                  >
                     <option>All Specialties</option>
                     <option>Cardiology</option>
                     <option>Neurology</option>
                     <option>Pediatrics</option>
                     <option>Orthopedics</option>
                     <option>General Surgery</option>
                     <option>Radiology</option>
                  </select>
               </div>
            </div>
         </section>

         {/* Doctors Grid */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {doctors.map((doctor) => (
                     <div
                        key={doctor.id}
                        style={{ borderColor: `${doctor.color}20` }}
                        className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border bg-white group"
                     >
                        {/* Doctor Image */}
                        <div className="relative overflow-hidden h-72">
                           <img
                              src={doctor.image || "/placeholder.svg"}
                              alt={doctor.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                           {/* Rating Badge */}
                           <div
                              style={{ background: `${doctor.color}99` }}
                              className="absolute top-4 right-4 flex items-center gap-1 px-3 py-2 rounded-full text-white text-sm font-semibold"
                           >
                              <Star className="w-4 h-4 fill-current" />
                              {doctor.rating}
                           </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                           <div className="mb-3">
                              <span
                                 style={{ background: `${doctor.color}15`, color: doctor.color }}
                                 className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                              >
                                 {doctor.specialty}
                              </span>
                           </div>

                           <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">{doctor.name}</h3>

                           <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                              <Award className="w-4 h-4" />
                              <span>{doctor.experience}</span>
                           </div>

                           <p className="text-sm text-gray-600 mb-4 line-clamp-2">{doctor.bio}</p>

                           {/* Stats */}
                           <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
                              <span className="flex items-center gap-1">
                                 <Star className="w-3 h-3 text-[#F77F00]" />
                                 {doctor.reviews} reviews
                              </span>
                              <span className="flex items-center gap-1">
                                 <Clock className="w-3 h-3" />
                                 {doctor.availability}
                              </span>
                           </div>

                           {/* Action Buttons */}
                           <div className="flex gap-2">
                              <Link href="book-appointment">
                                 <Button
                                    style={{ background: doctor.color }}
                                    className="flex-1 text-white rounded-lg text-sm font-medium hover:opacity-90"
                                 >
                                    Book Appointment
                                 </Button>
                              </Link>
                              <Button
                                 variant="outline"
                                 style={{ borderColor: doctor.color, color: doctor.color }}
                                 className="flex-1 rounded-lg text-sm font-medium hover:bg-gray-50 bg-transparent"
                              >
                                 View Profile
                              </Button>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Credentials & Qualifications */}
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
               <Button className="bg-white text-[#00A896] hover:bg-gray-100 px-8 py-6 rounded-full text-base font-medium shadow-lg">
                  Book Now
               </Button>
            </div>
         </section>
      </div>
   )
}

export default DoctorsPage
