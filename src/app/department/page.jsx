"use client";


import { Heart, Brain, Bone, Baby, Activity, Stethoscope, Users, Clock, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const DepartmentsPage = () => {
   const departments = [
      {
         id: 1,
         icon: Heart,
         name: "Cardiology",
         color: "from-[#D62828] to-[#F77F00]",
         description:
            "Comprehensive heart and cardiovascular care with advanced diagnostic and treatment options including interventional procedures.",
         services: [
            "Coronary Angiography",
            "Angioplasty & Stenting",
            "Pacemaker Implantation",
            "Echocardiography",
            "Cardiac Rehabilitation",
         ],
         doctors: 8,
         beds: 24,
         image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500&h=400&fit=crop",
      },
      {
         id: 2,
         icon: Brain,
         name: "Neurology & Neurosurgery",
         color: "from-[#7B2D8E] to-[#9D4EDD]",
         description:
            "Advanced neurological care and neurosurgical services for brain and spine disorders with state-of-the-art imaging.",
         services: [
            "Brain Tumor Surgery",
            "Spinal Surgery",
            "Stroke Management",
            "Epilepsy Treatment",
            "Movement Disorder Clinic",
         ],
         doctors: 6,
         beds: 18,
         image: "https://images.unsplash.com/photo-1576091160597-112ba8d25d1d?w=500&h=400&fit=crop",
      },
      {
         id: 3,
         icon: Bone,
         name: "Orthopedics",
         color: "from-[#00A896] to-[#028090]",
         description:
            "Comprehensive orthopedic care including joint replacement, arthroscopy, and sports medicine with advanced rehabilitation.",
         services: [
            "Joint Replacement Surgery",
            "Arthroscopic Surgery",
            "Spine Surgery",
            "Sports Medicine",
            "Fracture Management",
         ],
         doctors: 7,
         beds: 20,
         image: "https://images.unsplash.com/photo-1576091160645-973c5f1e1dd4?w=500&h=400&fit=crop",
      },
      {
         id: 4,
         icon: Baby,
         name: "Pediatrics",
         color: "from-[#F77F00] to-[#FCBF49]",
         description:
            "Specialized care for infants, children, and adolescents with family-centered approach and dedicated pediatric facilities.",
         services: [
            "General Pediatrics",
            "Pediatric Emergency",
            "Neonatal Intensive Care",
            "Pediatric Surgery",
            "Child Development Center",
         ],
         doctors: 9,
         beds: 28,
         image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=400&fit=crop",
      },
      {
         id: 5,
         icon: Activity,
         name: "Emergency Medicine",
         color: "from-[#D62828] to-[#A31621]",
         description: "24/7 emergency services with rapid response teams and trauma care for all medical emergencies.",
         services: ["Trauma Care", "Emergency Surgery", "Resuscitation Services", "Poison Control", "Disaster Management"],
         doctors: 12,
         beds: 36,
         image: "https://images.unsplash.com/photo-1579154204601-01d3f2d751ff?w=500&h=400&fit=crop",
      },
      {
         id: 6,
         icon: Stethoscope,
         name: "General Medicine",
         color: "from-[#1E3A5F] to-[#2B4A6F]",
         description:
            "Primary care and management of chronic diseases with comprehensive diagnostic and therapeutic services.",
         services: ["Internal Medicine", "Infectious Diseases", "Endocrinology", "Gastroenterology", "Preventive Care"],
         doctors: 11,
         beds: 32,
         image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500&h=400&fit=crop",
      },
      {
         id: 7,
         icon: Users,
         name: "Obstetrics & Gynecology",
         color: "from-[#F77F00] to-[#D62828]",
         description:
            "Comprehensive women's health services including obstetrics, gynecological surgery, and maternal care.",
         services: [
            "Prenatal Care",
            "Delivery Services",
            "Gynecological Surgery",
            "Fertility Treatment",
            "Women's Wellness",
         ],
         doctors: 8,
         beds: 22,
         image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=400&fit=crop",
      },
      {
         id: 8,
         icon: Clock,
         name: "Intensive Care Unit (ICU)",
         color: "from-[#028090] to-[#00A896]",
         description:
            "Advanced critical care services with 24/7 monitoring, mechanical ventilation, and specialized equipment.",
         services: [
            "Respiratory Support",
            "Hemodynamic Monitoring",
            "Dialysis Services",
            "Infection Control",
            "Nutritional Support",
         ],
         doctors: 10,
         beds: 30,
         image: "https://images.unsplash.com/photo-1576090160399-112ba8d25d1d?w=500&h=400&fit=crop",
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
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Departments</h1>
                  <p className="text-xl text-gray-200 leading-relaxed">
                     Explore our comprehensive range of specialized medical departments, each equipped with the latest
                     technology and staffed by expert physicians.
                  </p>
               </div>
            </div>
         </section>

         {/* Departments Grid */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
               <div className="grid lg:grid-cols-2 gap-8">
                  {departments.map((dept) => (
                     <div
                        key={dept.id}
                        style={{ borderColor: `${dept.color.split(" to ")[1]}20` }}
                        className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border bg-white group"
                     >
                        {/* Department Image */}
                        <div className="relative overflow-hidden h-64">
                           <img
                              src={dept.image || "/placeholder.svg"}
                              alt={dept.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                           {/* Department Icon Background */}
                           <div
                              style={{
                                 background: `linear-gradient(135deg, ${dept.color.split(" to ")[1]})`,
                              }}
                              className="absolute top-4 right-4 p-3 rounded-xl"
                           >
                              <dept.icon className="w-6 h-6 text-white" />
                           </div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                           <h3 className="text-2xl font-bold text-[#1E3A5F] mb-2">{dept.name}</h3>
                           <p className="text-gray-600 mb-6 leading-relaxed">{dept.description}</p>

                           {/* Stats */}
                           <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-100">
                              <div>
                                 <p className="text-sm text-gray-500 uppercase font-semibold mb-1">Expert Doctors</p>
                                 <p className="text-2xl font-bold text-[#00A896]">{dept.doctors}</p>
                              </div>
                              <div>
                                 <p className="text-sm text-gray-500 uppercase font-semibold mb-1">Specialized Beds</p>
                                 <p className="text-2xl font-bold text-[#F77F00]">{dept.beds}</p>
                              </div>
                           </div>

                           {/* Services */}
                           <div className="mb-6">
                              <p className="text-sm font-bold text-[#1E3A5F] uppercase mb-3">Key Services</p>
                              <div className="flex flex-wrap gap-2">
                                 {dept.services.slice(0, 3).map((service, i) => (
                                    <span
                                       key={i}
                                       style={{
                                          background: `${dept.color.split(" to ")[1]}15`,
                                          color: dept.color.split(" to ")[1],
                                       }}
                                       className="px-3 py-1 rounded-full text-xs font-medium"
                                    >
                                       {service}
                                    </span>
                                 ))}
                                 {dept.services.length > 3 && (
                                    <span
                                       style={{
                                          background: `${dept.color.split(" to ")[1]}15`,
                                          color: dept.color.split(" to ")[1],
                                       }}
                                       className="px-3 py-1 rounded-full text-xs font-medium"
                                    >
                                       +{dept.services.length - 3} more
                                    </span>
                                 )}
                              </div>
                           </div>

                           {/* CTA */}
                           <Button
                              style={{
                                 background: `linear-gradient(to right, ${dept.color.split(" to ")[0]}, ${dept.color.split(" to ")[1]})`,
                              }}
                              className="w-full text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                           >
                              Learn More
                              <ArrowRight className="w-4 h-4" />
                           </Button>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Department Details - Expandable Sections */}
         <section
            style={{
               background: "linear-gradient(to right, rgb(230, 244, 241), rgb(240, 249, 248))",
            }}
            className="py-20"
         >
            <div className="container mx-auto px-6">
               <div className="max-w-4xl mx-auto">
                  <h2 className="text-4xl font-bold text-[#1E3A5F] mb-12 text-center">Complete Service Overview</h2>

                  <div className="space-y-4">
                     {departments.map((dept) => (
                        <details
                           key={dept.id}
                           className="group rounded-2xl border border-gray-200 hover:border-[#00A896] transition-colors overflow-hidden"
                        >
                           <summary
                              className="cursor-pointer p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                              style={{
                                 background: "rgba(255, 255, 255, 0.8)",
                              }}
                           >
                              <div className="flex items-center gap-4">
                                 <div
                                    style={{
                                       background: `linear-gradient(135deg, ${dept.color.split(" to ")[0]}, ${dept.color.split(" to ")[1]})`,
                                    }}
                                    className="p-3 rounded-xl"
                                 >
                                    <dept.icon className="w-6 h-6 text-white" />
                                 </div>
                                 <h3 className="text-lg font-bold text-[#1E3A5F]">{dept.name}</h3>
                              </div>
                              <span className="text-2xl text-[#00A896] group-open:rotate-180 transition-transform">›</span>
                           </summary>

                           <div className="px-6 pb-6 border-t border-gray-100">
                              <p className="text-gray-600 mb-6">{dept.description}</p>

                              <div className="mb-6">
                                 <h4 className="font-bold text-[#1E3A5F] mb-3">Services Offered:</h4>
                                 <ul className="space-y-2">
                                    {dept.services.map((service, i) => (
                                       <li key={i} className="flex items-start gap-3 text-gray-600">
                                          <span className="text-[#00A896] font-bold mt-1">✓</span>
                                          <span>{service}</span>
                                       </li>
                                    ))}
                                 </ul>
                              </div>

                              <div className="grid md:grid-cols-3 gap-4">
                                 <div style={{ background: "rgba(0, 168, 150, 0.1)" }} className="p-4 rounded-xl">
                                    <p className="text-xs text-gray-600 uppercase mb-1">Expert Doctors</p>
                                    <p className="text-2xl font-bold text-[#00A896]">{dept.doctors}</p>
                                 </div>

                                 <div style={{ background: "rgba(247, 127, 0, 0.1)" }} className="p-4 rounded-xl">
                                    <p className="text-xs text-gray-600 uppercase mb-1">Beds Available</p>
                                    <p className="text-2xl font-bold text-[#F77F00]">{dept.beds}</p>
                                 </div>

                                 <Button
                                    style={{
                                       background: `linear-gradient(to right, ${dept.color.split(" to ")[0]}, ${dept.color.split(" to ")[1]})`,
                                    }}
                                    className="text-white font-medium rounded-lg hover:opacity-90 h-auto py-2"
                                 >
                                    Book Appointment
                                 </Button>
                              </div>
                           </div>
                        </details>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* Why Choose Our Departments */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
               <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-4xl font-bold text-[#1E3A5F] mb-4">Why Choose HealWell Departments?</h2>
                  <p className="text-gray-600">
                     Excellence in specialized healthcare delivery across all medical disciplines
                  </p>
               </div>

               <div className="grid md:grid-cols-3 gap-8">
                  <div
                     style={{ borderColor: "rgba(0, 168, 150, 0.2)" }}
                     className="p-8 rounded-2xl border bg-white hover:shadow-lg transition-shadow"
                  >
                     <Award className="w-10 h-10 text-[#00A896] mb-4" />
                     <h3 className="text-lg font-bold text-[#1E3A5F] mb-3">Board Certified Specialists</h3>
                     <p className="text-gray-600">
                        All department heads are board-certified in their specialties with extensive experience.
                     </p>
                  </div>

                  <div
                     style={{ borderColor: "rgba(247, 127, 0, 0.2)" }}
                     className="p-8 rounded-2xl border bg-white hover:shadow-lg transition-shadow"
                  >
                     <Clock className="w-10 h-10 text-[#F77F00] mb-4" />
                     <h3 className="text-lg font-bold text-[#1E3A5F] mb-3">Round-the-Clock Services</h3>
                     <p className="text-gray-600">
                        Most departments operate 24/7 with dedicated emergency and critical care teams.
                     </p>
                  </div>

                  <div
                     style={{ borderColor: "rgba(30, 58, 95, 0.2)" }}
                     className="p-8 rounded-2xl border bg-white hover:shadow-lg transition-shadow"
                  >
                     <Users className="w-10 h-10 text-[#1E3A5F] mb-4" />
                     <h3 className="text-lg font-bold text-[#1E3A5F] mb-3">Collaborative Care</h3>
                     <p className="text-gray-600">
                        Departments work together for integrated patient care and optimal outcomes.
                     </p>
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
               <h2 className="text-4xl font-bold mb-6">Find the Right Department for Your Needs</h2>
               <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Contact us today to schedule an appointment with one of our specialized departments.
               </p>
               <Button className="bg-white text-[#00A896] hover:bg-gray-100 px-8 py-6 rounded-full text-base font-medium shadow-lg">
                  Book Appointment
               </Button>
            </div>
         </section>
      </div>
   )
}

export default DepartmentsPage
