"use client";

import { Users, Award, Heart, Zap, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link";

const AboutPage = () => {
   const values = [
      {
         icon: Heart,
         title: "Compassion",
         description: "We treat every patient with empathy and respect, understanding their unique healthcare journey.",
      },
      {
         icon: Award,
         title: "Excellence",
         description: "Committed to the highest standards of medical care and continuous improvement.",
      },
      {
         icon: Users,
         title: "Collaboration",
         description: "Our team works together seamlessly to provide comprehensive patient care.",
      },
      {
         icon: Zap,
         title: "Innovation",
         description: "Embracing cutting-edge technology and modern medical practices for better outcomes.",
      },
   ]

   const milestones = [
      { year: "2020", event: "Samrat Hospital Medical Center Founded" },
      { year: "2021", event: "Expanded Emergency Department & ICU Services" },
      { year: "2022", event: "Opened Advanced Diagnostic Center" },
      { year: "2022", event: "Launched Digital Health Platform" },
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
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">About Samrat Hospital Medical Center</h1>
                  <p className="text-xl text-gray-200 leading-relaxed">
                     For nearly four decades, we've been committed to providing exceptional healthcare services with a focus on
                     patient well-being, innovation, and community trust.
                  </p>
               </div>
            </div>
         </section>

         {/* Story Section */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
               <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                     <h2 className="text-4xl font-bold text-[#1E3A5F] mb-6">Our Story</h2>
                     <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>
                           Samrat Hospital Medical Center was founded in 1985 with a singular vision: to create a healthcare institution
                           that puts patients first. What started as a small community clinic has grown into a state-of-the-art
                           medical facility serving over 50,000 patients annually.
                        </p>
                        <p>
                           Our journey has been marked by continuous innovation, expansion of services, and a unwavering
                           commitment to excellence. We've invested in the latest medical technology, recruited top-tier
                           physicians, and built a culture of compassion that defines our organization.
                        </p>
                        <p>
                           Today, Samrat Hospital stands as a beacon of healthcare excellence in our region, recognized for our advanced
                           diagnostic capabilities, specialized departments, and patient-centered approach to medicine.
                        </p>
                     </div>
                  </div>

                  <div className="relative hidden lg:block">
                     <img
                        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
                        alt="Hospital building"
                        className="rounded-2xl shadow-2xl"
                     />
                  </div>
               </div>
            </div>
         </section>

         {/* Mission Vision */}
         <section
            style={{
               background: "linear-gradient(to right, rgb(230, 244, 241), rgb(240, 249, 248))",
            }}
            className="py-20"
         >
            <div className="container mx-auto px-6">
               <div className="grid md:grid-cols-2 gap-12">
                  {/* Mission */}
                  <div
                     style={{ background: "rgba(255, 255, 255, 0.8)", borderColor: "rgba(0, 168, 150, 0.2)" }}
                     className="p-10 rounded-2xl border"
                  >
                     <Globe className="w-12 h-12 text-[#00A896] mb-4" />
                     <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">Our Mission</h3>
                     <p className="text-gray-600 leading-relaxed">
                        To deliver compassionate, evidence-based healthcare that empowers patients to achieve optimal health
                        outcomes. We are dedicated to providing accessible, affordable, and quality medical services to every
                        member of our community.
                     </p>
                  </div>

                  {/* Vision */}
                  <div
                     style={{ background: "rgba(255, 255, 255, 0.8)", borderColor: "rgba(247, 127, 0, 0.2)" }}
                     className="p-10 rounded-2xl border"
                  >
                     <Zap className="w-12 h-12 text-[#F77F00] mb-4" />
                     <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">Our Vision</h3>
                     <p className="text-gray-600 leading-relaxed">
                        To be the most trusted and innovative healthcare provider in the region, known for exceptional clinical
                        outcomes, advanced medical technology, and a commitment to improving population health through education
                        and prevention.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* Core Values */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
               <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-4xl font-bold text-[#1E3A5F] mb-4">Our Core Values</h2>
                  <p className="text-gray-600">
                     These principles guide every decision we make and every interaction with our patients and community.
                  </p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {values.map((value, index) => (
                     <div
                        key={index}
                        style={{ borderColor: "rgba(0, 168, 150, 0.2)" }}
                        className="bg-white p-8 rounded-2xl border hover:shadow-lg transition-shadow"
                     >
                        <div className="w-12 h-12 bg-gradient-to-br from-[#00A896] to-[#028090] rounded-xl flex items-center justify-center mb-4">
                           <value.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">{value.title}</h3>
                        <p className="text-sm text-gray-600">{value.description}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Timeline */}
         <section
            style={{
               background: "linear-gradient(to bottom right, rgb(30, 58, 95), rgb(43, 74, 111))",
            }}
            className="py-20 text-white relative overflow-hidden"
         >
            <div className="container mx-auto px-6">
               <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
                  <p className="text-gray-200">A timeline of milestones that shaped Samrat Hospital Medical Center</p>
               </div>

               <div className="max-w-4xl mx-auto">
                  {milestones.map((milestone, index) => (
                     <div key={index} className="flex gap-8 mb-8 last:mb-0">
                        <div className="flex flex-col items-center">
                           <div className="w-4 h-4 bg-[#F77F00] rounded-full" />
                           {index < milestones.length - 1 && (
                              <div className="w-1 h-24 bg-gradient-to-b from-[#F77F00] to-transparent mt-2" />
                           )}
                        </div>
                        <div
                           style={{ background: "rgba(255, 255, 255, 0.05)", borderColor: "rgba(255, 255, 255, 0.1)" }}
                           className="p-6 rounded-xl border flex-1 mb-4"
                        >
                           <p className="text-[#F77F00] font-bold text-lg mb-2">{milestone.year}</p>
                           <p className="text-gray-200">{milestone.event}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Statistics */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div
                     style={{ background: "linear-gradient(135deg, rgba(0, 168, 150, 0.1), rgba(2, 128, 144, 0.1))" }}
                     className="p-8 rounded-2xl text-center"
                  >
                     <p className="text-5xl font-bold text-[#00A896] mb-2">38+</p>
                     <p className="text-gray-600 font-medium">Years of Service</p>
                  </div>

                  <div
                     style={{ background: "linear-gradient(135deg, rgba(247, 127, 0, 0.1), rgba(252, 191, 73, 0.1))" }}
                     className="p-8 rounded-2xl text-center"
                  >
                     <p className="text-5xl font-bold text-[#F77F00] mb-2">200+</p>
                     <p className="text-gray-600 font-medium">Expert Doctors</p>
                  </div>

                  <div
                     style={{ background: "linear-gradient(135deg, rgba(30, 58, 95, 0.1), rgba(43, 74, 111, 0.1))" }}
                     className="p-8 rounded-2xl text-center"
                  >
                     <p className="text-5xl font-bold text-[#1E3A5F] mb-2">50K+</p>
                     <p className="text-gray-600 font-medium">Happy Patients</p>
                  </div>

                  <div
                     style={{ background: "linear-gradient(135deg, rgba(214, 40, 40, 0.1), rgba(163, 22, 33, 0.1))" }}
                     className="p-8 rounded-2xl text-center"
                  >
                     <p className="text-5xl font-bold text-[#D62828] mb-2">15</p>
                     <p className="text-gray-600 font-medium">Departments</p>
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
               <h2 className="text-4xl font-bold mb-6">Experience Samrat Hospital Difference</h2>
               <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Join thousands of patients who trust us with their healthcare needs. Schedule your appointment today.
               </p>
               <Link href="book-appointment">
                  <Button className="bg-white text-[#00A896] hover:bg-gray-100 px-8 py-6 rounded-full text-base font-medium">
                     Book Appointment
                  </Button>
               </Link>
            </div>
         </section>
      </div>
   )
}

export default AboutPage
