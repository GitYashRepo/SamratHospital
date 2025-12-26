"use client";

import { Star, Heart, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const TeamPage = () => {
   const departments = [
      {
         name: "Medical Leadership",
         count: "25+",
         role: "Senior Physicians & Specialists",
         color: "from-[#D62828] to-[#F77F00]",
      },
      {
         name: "Nursing & Care",
         count: "150+",
         role: "Registered Nurses & Care Providers",
         color: "from-[#00A896] to-[#028090]",
      },
      {
         name: "Support Services",
         count: "80+",
         role: "Administrative & Technical Staff",
         color: "from-[#7B2D8E] to-[#9D4EDD]",
      },
      {
         name: "Diagnostic Team",
         count: "45+",
         role: "Technicians & Lab Specialists",
         color: "from-[#F77F00] to-[#FCBF49]",
      },
   ]

   const team = [
      {
         name: "Dr. Priya Mittal",
         position: "Chief of Cardiology",
         image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=faces",
         experience: "10+ years",
         specialization: "Interventional Cardiology",
      },
      {
         name: "Dr. Manish Yadav",
         position: "Chief of Neurology",
         image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=faces",
         experience: "18+ years",
         specialization: "Neuro-surgery",
      },
      {
         name: "Dr. Sejal Pandey",
         position: "Chief of Pediatrics",
         image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&crop=faces",
         experience: "15+ years",
         specialization: "Pediatric Emergency Medicine",
      },
      {
         name: "Dr. Yuvraj Soni",
         position: "Chief of Orthopedics",
         image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&crop=faces",
         experience: "22+ years",
         specialization: "Joint Replacement Surgery",
      },
      {
         name: "Dr. Vivek Mishra",
         position: "Chief of Surgery",
         image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=faces",
         experience: "25+ years",
         specialization: "General & Trauma Surgery",
      },
      {
         name: "Dr. Himanshu Singh",
         position: "Chief of Radiology",
         image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=faces",
         experience: "19+ years",
         specialization: "Diagnostic Imaging",
      },
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
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Dedicated Team</h1>
                  <p className="text-xl text-gray-200 leading-relaxed">
                     Over 300 talented healthcare professionals committed to delivering exceptional patient care every single
                     day.
                  </p>
               </div>
            </div>
         </section>

         {/* Team Overview */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
               <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-4xl font-bold text-[#1E3A5F] mb-4">Building Excellence Together</h2>
                  <p className="text-gray-600">
                     Our team is composed of highly trained medical professionals, nurses, and support staff united by a common
                     mission: providing outstanding patient care.
                  </p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  {departments.map((dept, index) => (
                     <div
                        key={index}
                        style={{
                           background: `linear-gradient(135deg, ${dept.color.split(" to ")[1]})`,
                        }}
                        className="p-8 rounded-2xl text-white shadow-lg"
                     >
                        <p className="text-5xl font-bold mb-2">{dept.count}</p>
                        <h3 className="text-xl font-bold mb-2">{dept.name}</h3>
                        <p className="text-sm text-white/80">{dept.role}</p>
                     </div>
                  ))}
               </div>

               <div
                  style={{ borderColor: "rgba(0, 168, 150, 0.2)" }}
                  className="bg-gradient-to-r from-[#E6F4F1] to-white p-10 rounded-2xl border"
               >
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">Our Team Culture</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                     <div>
                        <Heart className="w-8 h-8 text-[#00A896] mb-3" />
                        <h4 className="font-bold text-[#1E3A5F] mb-2">Compassion First</h4>
                        <p className="text-gray-600 text-sm">
                           Every team member shares a deep commitment to patient well-being and compassionate care.
                        </p>
                     </div>
                     <div>
                        <Award className="w-8 h-8 text-[#F77F00] mb-3" />
                        <h4 className="font-bold text-[#1E3A5F] mb-2">Excellence Driven</h4>
                        <p className="text-gray-600 text-sm">
                           We maintain the highest standards of clinical excellence and continuous professional development.
                        </p>
                     </div>
                     <div>
                        <Star className="w-8 h-8 text-[#FCBF49] mb-3" />
                        <h4 className="font-bold text-[#1E3A5F] mb-2">Collaborative Spirit</h4>
                        <p className="text-gray-600 text-sm">
                           Our team works together seamlessly across departments to achieve the best patient outcomes.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Leadership Team */}
         <section
            style={{
               background: "linear-gradient(to right, rgb(230, 244, 241), rgb(240, 249, 248))",
            }}
            className="py-20"
         >
            <div className="container mx-auto px-6">
               <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-4xl font-bold text-[#1E3A5F] mb-4">Department Heads & Specialists</h2>
                  <p className="text-gray-600">Leading physicians with decades of combined experience in their specialties</p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {team.map((member, index) => (
                     <div
                        key={index}
                        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                     >
                        <div className="relative overflow-hidden h-72">
                           <img
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                           <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                              <p className="text-sm text-gray-200">{member.position}</p>
                           </div>
                        </div>
                        <div className="p-6">
                           <div className="space-y-3">
                              <div>
                                 <p className="text-xs text-gray-500 uppercase font-semibold">Experience</p>
                                 <p className="text-sm font-bold text-[#1E3A5F]">{member.experience}</p>
                              </div>
                              <div>
                                 <p className="text-xs text-gray-500 uppercase font-semibold">Specialization</p>
                                 <p className="text-sm font-bold text-[#00A896]">{member.specialization}</p>
                              </div>
                           </div>
                           <Button className="w-full mt-4 bg-white border border-[#00A896] text-[#00A896] hover:bg-[#00A896] hover:text-white rounded-full text-sm font-medium transition-all">
                              View Full Profile
                           </Button>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Nursing & Support Staff */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
               <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                     <h2 className="text-4xl font-bold text-[#1E3A5F] mb-6">Nursing & Support Excellence</h2>
                     <div className="space-y-6 text-gray-600 leading-relaxed">
                        <p>
                           Our nursing team consists of highly trained registered nurses, nurse practitioners, and certified
                           nursing assistants who provide compassionate, skilled care around the clock. They are the backbone of
                           our patient care operations.
                        </p>

                        <div>
                           <h3 className="font-bold text-[#1E3A5F] mb-3">Our Nursing Team Includes:</h3>
                           <ul className="space-y-2">
                              <li className="flex items-start gap-3">
                                 <span className="text-[#00A896] font-bold">✓</span>
                                 <span>150+ registered nurses with specialized certifications</span>
                              </li>
                              <li className="flex items-start gap-3">
                                 <span className="text-[#00A896] font-bold">✓</span>
                                 <span>Advanced practice nurses in critical care and specialty units</span>
                              </li>
                              <li className="flex items-start gap-3">
                                 <span className="text-[#00A896] font-bold">✓</span>
                                 <span>Certified nursing assistants providing patient support services</span>
                              </li>
                              <li className="flex items-start gap-3">
                                 <span className="text-[#00A896] font-bold">✓</span>
                                 <span>Continuous training in latest patient care protocols</span>
                              </li>
                           </ul>
                        </div>

                        <p>
                           Beyond physicians and nurses, our support staff—from administrative personnel to maintenance
                           workers—play a crucial role in ensuring Samrat Hospital operates smoothly and patients receive comprehensive
                           care.
                        </p>
                     </div>
                  </div>

                  <div className="relative">
                     <img
                        src="https://images.unsplash.com/photo-1576091160745-112996f3a299?w=600&h=400&fit=crop"
                        alt="Nursing team"
                        className="rounded-2xl shadow-2xl w-full"
                     />
                  </div>
               </div>
            </div>
         </section>

         {/* Continuous Learning */}
         <section
            style={{
               background: "linear-gradient(to right, #F77F00, #FCBF49)",
            }}
            className="py-20 text-white"
         >
            <div className="container mx-auto px-6">
               <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-4xl font-bold mb-6">Commitment to Continuous Learning</h2>
                  <p className="text-xl leading-relaxed mb-8">
                     We invest heavily in the professional development of our team members. Regular training programs,
                     conferences, certifications, and mentorship opportunities ensure our staff stays at the forefront of
                     medical science and best practices.
                  </p>
                  <Button className="bg-white text-[#F77F00] hover:bg-gray-100 px-8 py-6 rounded-full text-base font-medium">
                     Join Our Team
                  </Button>
               </div>
            </div>
         </section>

         {/* Team Stats */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
               <div className="grid md:grid-cols-4 gap-8 text-center">
                  <div>
                     <p className="text-5xl font-bold text-[#00A896] mb-2">300+</p>
                     <p className="text-gray-600 font-medium">Team Members</p>
                  </div>

                  <div>
                     <p className="text-5xl font-bold text-[#F77F00] mb-2">500+</p>
                     <p className="text-gray-600 font-medium">Years Combined Experience</p>
                  </div>

                  <div>
                     <p className="text-5xl font-bold text-[#1E3A5F] mb-2">95%</p>
                     <p className="text-gray-600 font-medium">Staff Retention Rate</p>
                  </div>

                  <div>
                     <p className="text-5xl font-bold text-[#D62828] mb-2">98%</p>
                     <p className="text-gray-600 font-medium">Patient Satisfaction</p>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}

export default TeamPage
