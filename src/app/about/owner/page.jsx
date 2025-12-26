"use client";

import { Award, Users, Heart, Stethoscope, Globe, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const OwnerPage = () => {
   const achievements = [
      {
         icon: Award,
         title: "Medical Leadership",
         description: "Pioneering innovative healthcare solutions and setting industry standards",
      },
      {
         icon: Heart,
         title: "Patient Advocacy",
         description: "Championing patient rights and compassionate care approaches",
      },
      {
         icon: Globe,
         title: "Global Recognition",
         description: "Recognized internationally for contributions to healthcare excellence",
      },
      {
         icon: Users,
         title: "Team Building",
         description: "Creating a culture of excellence and mutual respect among staff",
      },
      {
         icon: Stethoscope,
         title: "Medical Excellence",
         description: "Advancing medical knowledge and continuous professional development",
      },
      {
         icon: Zap,
         title: "Innovation",
         description: "Driving technological advancement in healthcare delivery",
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
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet Our Founder & CEO</h1>
                  <p className="text-xl text-gray-200 leading-relaxed">
                     Visionary leadership dedicated to transforming healthcare and improving lives.
                  </p>
               </div>
            </div>
         </section>

         {/* Founder Profile */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
               <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="relative">
                     <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3sxEw6DtEGqnq7hfRbU-YaP__kQC4Yvm4JQ&s"
                        alt="Mr. Vikram Singh"
                        className="rounded-2xl shadow-2xl w-full"
                     />
                     <div
                        style={{ background: "linear-gradient(135deg, #00A896, #028090)" }}
                        className="absolute bottom-0 right-0 bg-gradient-to-br p-6 rounded-xl text-white shadow-lg m-6"
                     >
                        <p className="text-sm font-semibold uppercase tracking-wide">Founder & CEO</p>
                        <p className="text-2xl font-bold">Mr. Vikram Singh</p>
                     </div>
                  </div>

                  <div className="space-y-6">
                     <div>
                        <h2 className="text-4xl font-bold text-[#1E3A5F] mb-4">Mr. Vikram Singh</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                           An accomplished physician and healthcare entrepreneur with over 40 years of experience in medical
                           practice and hospital management. Mr. Vikram founded Samrat Hospital Medical Center in 1985 with a vision to
                           revolutionize healthcare delivery in our community.
                        </p>
                     </div>

                     <div className="space-y-4">
                        <div>
                           <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">Professional Background</h3>
                           <p className="text-gray-600 leading-relaxed">
                              MD from Harvard Medical School | Board-Certified in Internal Medicine | Fellowship in Healthcare
                              Administration from Johns Hopkins University
                           </p>
                        </div>

                        <div>
                           <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">Career Highlights</h3>
                           <ul className="space-y-2 text-gray-600">
                              <li className="flex items-start gap-3">
                                 <span className="text-[#00A896] font-bold mt-1">✓</span>
                                 <span>Transformed Samrat Hospital from a small clinic to a multi-specialty medical center</span>
                              </li>
                              <li className="flex items-start gap-3">
                                 <span className="text-[#00A896] font-bold mt-1">✓</span>
                                 <span>Pioneered adoption of EMR systems in the region</span>
                              </li>
                              <li className="flex items-start gap-3">
                                 <span className="text-[#00A896] font-bold mt-1">✓</span>
                                 <span>Established research programs and medical education partnerships</span>
                              </li>
                              <li className="flex items-start gap-3">
                                 <span className="text-[#00A896] font-bold mt-1">✓</span>
                                 <span>Mentored over 500 young physicians throughout his career</span>
                              </li>
                           </ul>
                        </div>
                     </div>

                     <div className="pt-4">
                        <Button
                           style={{ background: "linear-gradient(to right, #00A896, #028090)" }}
                           className="text-white px-8 py-6 rounded-full text-base font-medium hover:shadow-lg"
                        >
                           Schedule Consultation
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Philosophy Section */}
         <section
            style={{
               background: "linear-gradient(to right, rgb(230, 244, 241), rgb(240, 249, 248))",
            }}
            className="py-20"
         >
            <div className="container mx-auto px-6">
               <div className="max-w-3xl mx-auto">
                  <h2 className="text-4xl font-bold text-[#1E3A5F] mb-8 text-center">Leadership Philosophy</h2>

                  <div style={{ borderColor: "rgba(0, 168, 150, 0.2)" }} className="bg-white p-10 rounded-2xl border mb-8">
                     <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        "Healthcare is not just about treating disease; it's about restoring hope and improving quality of life.
                        Every patient deserves compassionate, evidence-based care delivered by committed professionals in a
                        supportive environment."
                     </p>
                     <p className="text-gray-600 italic">— Mr. Vikram Singh</p>
                  </div>

                  <div className="space-y-6 text-gray-600 leading-relaxed">
                     <p>
                        Mr. Vikram believes that exceptional healthcare requires three essential elements: skilled physicians,
                        advanced technology, and a genuine commitment to patient well-being. Under his leadership, Samrat Hospital has
                        consistently invested in all three.
                     </p>

                     <p>
                        His approach to hospital management emphasizes continuous improvement, staff development, and community
                        engagement. He believes that hospitals are not just buildings with equipment—they are institutions of
                        trust where people place their most precious gift: their health.
                     </p>

                     <p>
                        Through strategic planning and visionary leadership, Mr. Vikram has transformed Samrat Hospital into an
                        institution known for medical excellence, patient satisfaction, and community impact. His legacy extends
                        beyond the hospital walls into the lives of thousands of patients and hundreds of healthcare
                        professionals he has mentored.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* Key Achievements */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
               <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-4xl font-bold text-[#1E3A5F] mb-4">Key Achievements</h2>
                  <p className="text-gray-600">Defining moments in Mr. Vikram's leadership journey</p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievements.map((achievement, index) => (
                     <div
                        key={index}
                        style={{ borderColor: "rgba(0, 168, 150, 0.2)" }}
                        className="bg-white p-8 rounded-2xl border hover:shadow-lg transition-shadow"
                     >
                        <div className="w-12 h-12 bg-gradient-to-br from-[#00A896] to-[#028090] rounded-xl flex items-center justify-center mb-4">
                           <achievement.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">{achievement.title}</h3>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Vision Statement */}
         <section
            style={{
               background: "linear-gradient(to right, #F77F00, #FCBF49)",
            }}
            className="py-20 text-white relative overflow-hidden"
         >
            <div className="absolute inset-0 opacity-10">
               <div className="absolute top-10 right-10 w-80 h-80 border border-white rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative">
               <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-4xl font-bold mb-6">Vision for the Future</h2>
                  <p className="text-xl leading-relaxed">
                     Mr. Vikram continues to lead Samrat Hospital toward a future where advanced medical technology, compassionate
                     care, and community health initiatives work together to create healthier, happier communities. His
                     commitment to excellence ensures that Samrat Hospital remains at the forefront of healthcare innovation for
                     generations to come.
                  </p>
               </div>
            </div>
         </section>

         {/* Contact CTA */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
               <h2 className="text-4xl font-bold text-[#1E3A5F] mb-6">Have Questions?</h2>
               <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Learn more about Mr. Vikram's vision and how Samrat Hospital can serve your healthcare needs.
               </p>
               <Button
                  style={{ background: "linear-gradient(to right, #1E3A5F, #2B4A6F)" }}
                  className="text-white px-8 py-6 rounded-full text-base font-medium hover:shadow-lg"
               >
                  Get in Touch
               </Button>
            </div>
         </section>
      </div>
   )
}

export default OwnerPage
