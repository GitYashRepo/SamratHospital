import { ArrowRight, Heart, Shield, Users, Clock, Award, Stethoscope, Brain, Bone, Baby, Activity, Phone, Star, ChevronRight, CheckCircle2, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Index = () => {
   const services = [
      { icon: Heart, title: "Cardiology", description: "Comprehensive heart care with advanced diagnostics and treatments", color: "from-[#D62828] to-[#F77F00]" },
      { icon: Brain, title: "Neurology", description: "Expert care for brain and nervous system disorders", color: "from-[#7B2D8E] to-[#9D4EDD]" },
      { icon: Bone, title: "Orthopedics", description: "Joint replacement, sports medicine, and spine care", color: "from-[#00A896] to-[#028090]" },
      { icon: Baby, title: "Pediatrics", description: "Compassionate care for infants, children, and adolescents", color: "from-[#F77F00] to-[#FCBF49]" },
      { icon: Activity, title: "Emergency Care", description: "24/7 emergency services with rapid response teams", color: "from-[#D62828] to-[#A31621]" },
      { icon: Stethoscope, title: "General Medicine", description: "Primary care and preventive health services", color: "from-[#1E3A5F] to-[#2B4A6F]" },
   ];

   const stats = [
      { value: "5+", label: "Years of Excellence", icon: Award },
      { value: "20+", label: "Expert Doctors", icon: Users },
      { value: "10K+", label: "Happy Patients", icon: Heart },
      { value: "24/7", label: "Emergency Care", icon: Clock },
   ];

   const doctors = [
      { name: "Dr. Priya", specialty: "Cardiology", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=faces", color: "#D62828" },
      { name: "Dr. Manish", specialty: "Neurology", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=faces", color: "#7B2D8E" },
      { name: "Dr. Sejal", specialty: "Pediatrics", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&crop=faces", color: "#F77F00" },
      { name: "Dr. Yuvraj", specialty: "Orthopedics", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&crop=faces", color: "#00A896" },
   ];

   const testimonials = [
      { name: "Ajay Singh", text: "The care I received was exceptional. The doctors and staff made me feel comfortable throughout my treatment.", rating: 5, department: "Cardiology" },
      { name: "Shreya Mehra", text: "From the moment I walked in, I knew I was in good hands. Professional, caring, and highly skilled team.", rating: 5, department: "Orthopedics" },
      { name: "Keshav Gupta", text: "After my surgery, the follow-up care was outstanding. I'm grateful for the entire Samrat Hospital team.", rating: 5, department: "Neurology" },
   ];

   return (
      <div className="min-h-screen bg-white">
         {/* Hero Section - Teal/Blue Theme */}
         <section className="relative overflow-hidden bg-gradient-to-br from-[#F0F9F8] via-white to-[#E6F4F1]">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#00A896]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#F77F00]/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

            <div className="mx-auto px-12 py-16 lg:py-24 relative">
               <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                     <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00A896]/10 to-[#028090]/10 text-[#028090] px-5 py-2.5 rounded-full text-sm font-semibold border border-[#00A896]/20">
                        <Sparkles className="w-4 h-4" />
                        <span>Trusted Healthcare Since 2020</span>
                     </div>

                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E3A5F] leading-tight">
                        Your Health Is Our
                        <span className="relative">
                           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A896] to-[#028090]"> Priority</span>
                           <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                              <path d="M2 10C50 2 150 2 198 10" stroke="#F77F00" strokeWidth="3" strokeLinecap="round" />
                           </svg>
                        </span>
                     </h1>

                     <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                        Experience world-class healthcare with compassion. Our team of expert physicians and state-of-the-art facilities ensure you receive the best care possible.
                     </p>

                     <div className="flex flex-wrap gap-4">
                        <Link href="book-appointment">
                           <Button className="bg-gradient-to-r from-[#00A896] to-[#028090] hover:from-[#009688] hover:to-[#027080] text-white px-8 py-6 rounded-full text-base font-medium shadow-xl shadow-[#00A896]/30 transition-all hover:shadow-2xl hover:shadow-[#00A896]/40 hover:scale-105">
                              Book Appointment
                              <ArrowRight className="w-4 h-4 ml-2" />
                           </Button>
                        </Link>
                        <Button variant="outline" className="border-2 border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white px-8 py-6 rounded-full text-base font-medium transition-all">
                           <Play className="w-4 h-4 mr-2" />
                           Watch Video
                        </Button>
                     </div>

                     <div className="flex items-center gap-6 pt-4">
                        <div className="flex -space-x-3">
                           {[1, 2, 3, 4].map((i) => (
                              <div key={i} className="w-11 h-11 rounded-full border-3 border-white bg-gray-100 overflow-hidden shadow-lg ring-2 ring-[#00A896]/20">
                                 <img
                                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                    alt="Patient"
                                    className="w-full h-full object-cover"
                                 />
                              </div>
                           ))}
                        </div>
                        <div>
                           <div className="flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map((i) => (
                                 <Star key={i} className="w-5 h-5 text-[#F77F00] fill-current" />
                              ))}
                              <span className="ml-2 text-sm font-semibold text-[#1E3A5F]">4.9</span>
                           </div>
                           <p className="text-sm text-gray-500">Trusted by 50,000+ patients</p>
                        </div>
                     </div>
                  </div>

                  <div className="relative hidden lg:block">
                     <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#F77F00] to-[#FCBF49] rounded-2xl rotate-12 opacity-80" />
                     <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#00A896] to-[#028090] rounded-3xl -rotate-12 opacity-80" />

                     <img
                        src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=900&fit=crop"
                        alt="Doctor with patient"
                        className="relative w-full h-[580px] object-cover rounded-[2rem] shadow-2xl"
                     />

                     {/* Floating Card */}
                     <div className="absolute -left-8 bottom-24 bg-white p-5 rounded-2xl shadow-2xl border border-gray-100">
                        <div className="flex items-center gap-4">
                           <div className="w-14 h-14 bg-gradient-to-br from-[#D62828] to-[#F77F00] rounded-2xl flex items-center justify-center shadow-lg">
                              <Phone className="w-6 h-6 text-white" />
                           </div>
                           <div>
                              <p className="text-xs text-gray-500 font-medium">24/7 Emergency</p>
                              <p className="text-xl font-bold text-[#1E3A5F]">+91 (234) 567-890</p>
                           </div>
                        </div>
                     </div>

                     {/* Stats Card */}
                     <div className="absolute -right-4 top-20 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 bg-gradient-to-br from-[#00A896] to-[#028090] rounded-xl flex items-center justify-center">
                              <Users className="w-5 h-5 text-white" />
                           </div>
                           <div>
                              <p className="text-2xl font-bold text-[#1E3A5F]">20+</p>
                              <p className="text-xs text-gray-500">Expert Doctors</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Stats Section - Orange/Yellow Gradient */}
         <section className="relative py-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#F77F00] via-[#FCBF49] to-[#F77F00]" />
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, white 2px, transparent 2px)", backgroundSize: "30px 30px" }} />

            <div className="container mx-auto px-6 relative">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                     <div key={index} className="text-center group">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                           <stat.icon className="w-7 h-7 text-white" />
                        </div>
                        <p className="text-4xl md:text-5xl font-bold text-white mb-1">{stat.value}</p>
                        <p className="text-sm text-white/80 font-medium">{stat.label}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Why Choose Us - Light Purple/White Theme */}
         <section className="py-20 bg-gradient-to-b from-white to-[#F8F4FC]">
            <div className="container mx-auto px-6">
               <div className="text-center max-w-2xl mx-auto mb-16">
                  <span className="inline-block px-4 py-1.5 bg-[#7B2D8E]/10 text-[#7B2D8E] text-sm font-semibold rounded-full mb-4">Why Choose Us</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">Excellence in Healthcare</h2>
                  <p className="text-gray-600">We combine cutting-edge technology with compassionate care to deliver exceptional healthcare experiences.</p>
               </div>

               <div className="grid md:grid-cols-3 gap-8">
                  <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-[#7B2D8E]/20 hover:-translate-y-2">
                     <div className="w-16 h-16 bg-gradient-to-br from-[#7B2D8E] to-[#9D4EDD] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#7B2D8E]/30 group-hover:scale-110 transition-transform">
                        <Shield className="w-8 h-8 text-white" />
                     </div>
                     <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">Expert Medical Team</h3>
                     <p className="text-gray-600 text-sm leading-relaxed">Our board-certified physicians bring decades of experience and specialized expertise to your care.</p>
                  </div>

                  <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-[#00A896]/20 hover:-translate-y-2">
                     <div className="w-16 h-16 bg-gradient-to-br from-[#00A896] to-[#028090] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#00A896]/30 group-hover:scale-110 transition-transform">
                        <Clock className="w-8 h-8 text-white" />
                     </div>
                     <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">24/7 Availability</h3>
                     <p className="text-gray-600 text-sm leading-relaxed">Round-the-clock emergency services and support ensure you're never without care when you need it most.</p>
                  </div>

                  <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-[#F77F00]/20 hover:-translate-y-2">
                     <div className="w-16 h-16 bg-gradient-to-br from-[#F77F00] to-[#FCBF49] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#F77F00]/30 group-hover:scale-110 transition-transform">
                        <Users className="w-8 h-8 text-white" />
                     </div>
                     <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">Patient-Centered Care</h3>
                     <p className="text-gray-600 text-sm leading-relaxed">Your comfort and well-being are at the heart of everything we do. We treat you like family.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* Services Section - Light Teal Theme */}
         <section className="py-20 bg-gradient-to-br from-[#E6F4F1] via-[#F0F9F8] to-[#E6F4F1] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A896]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F77F00]/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative">
               <div className="text-center max-w-2xl mx-auto mb-16">
                  <span className="inline-block px-4 py-1.5 bg-[#00A896]/10 text-[#028090] text-sm font-semibold rounded-full mb-4">Our Services</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">Comprehensive Medical Care</h2>
                  <p className="text-gray-600">From preventive care to specialized treatments, we offer a full spectrum of healthcare services.</p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service, index) => (
                     <div key={index} className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden">
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`} />

                        <div className="flex items-start gap-4 relative">
                           <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                              <service.icon className="w-7 h-7 text-white" />
                           </div>
                           <div>
                              <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">{service.title}</h3>
                              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                              <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-[#00A896] mt-3 group-hover:text-[#028090] transition-colors">
                                 Learn More
                                 <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </a>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Doctors Section - Clean White Theme */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
               <div className="text-center max-w-2xl mx-auto mb-16">
                  <span className="inline-block px-4 py-1.5 bg-[#1E3A5F]/10 text-[#1E3A5F] text-sm font-semibold rounded-full mb-4">Our Specialists</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">Meet Our Expert Doctors</h2>
                  <p className="text-gray-600">Dedicated professionals committed to providing you with the highest quality care.</p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {doctors.map((doctor, index) => (
                     <div key={index} className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-2xl mb-4">
                           <img
                              src={doctor.image}
                              alt={doctor.name}
                              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                           <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">
                              <Button size="sm" className="w-full bg-white text-[#1E3A5F] hover:bg-gray-100 rounded-full text-sm font-medium">
                                 View Profile
                              </Button>
                           </div>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                           <span className="w-2 h-2 rounded-full" style={{ backgroundColor: doctor.color }} />
                           <p className="text-sm text-gray-500 font-medium">{doctor.specialty}</p>
                        </div>
                        <h3 className="text-lg font-bold text-[#1E3A5F]">{doctor.name}</h3>
                     </div>
                  ))}
               </div>

               <div className="text-center mt-12">
                  <Button variant="outline" className="border-2 border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white px-8 py-6 rounded-full text-base font-medium transition-all">
                     View All Doctors
                     <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
               </div>
            </div>
         </section>

         {/* Testimonials - Dark Blue Theme */}
         <section className="py-20 bg-gradient-to-br from-[#1E3A5F] via-[#2B4A6F] to-[#1E3A5F] relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
               <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full" />
               <div className="absolute bottom-20 right-20 w-96 h-96 border border-white rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative">
               <div className="text-center max-w-2xl mx-auto mb-16">
                  <span className="inline-block px-4 py-1.5 bg-white/10 text-[#7DD3C0] text-sm font-semibold rounded-full mb-4">Testimonials</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Patients Say</h2>
               </div>

               <div className="grid md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                     <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/15 transition-colors">
                        <div className="flex items-center gap-1 mb-4">
                           {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-[#FCBF49] fill-current" />
                           ))}
                        </div>
                        <p className="text-white/90 leading-relaxed mb-6">"{testimonial.text}"</p>
                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00A896] to-[#028090] flex items-center justify-center text-white font-bold">
                                 {testimonial.name.charAt(0)}
                              </div>
                              <div>
                                 <p className="font-semibold text-white">{testimonial.name}</p>
                                 <p className="text-sm text-white/60">{testimonial.department} Patient</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* CTA Section - Vibrant Gradient Theme */}
         <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
               <div className="relative rounded-[2.5rem] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00A896] via-[#028090] to-[#1E3A5F]" />
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

                  <div className="relative p-12 md:p-20 text-center">
                     <div className="absolute top-8 right-12 w-20 h-20 bg-white/10 rounded-2xl rotate-12" />
                     <div className="absolute bottom-8 left-12 w-16 h-16 bg-[#F77F00]/30 rounded-xl -rotate-12" />

                     <div className="max-w-2xl mx-auto relative">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Take Care of Your Health?</h2>
                        <p className="text-white/80 text-lg mb-10">Schedule an appointment today and experience healthcare that truly cares about you.</p>

                        <div className="flex flex-wrap justify-center gap-4">
                           <Link href="book-appointment">
                              <Button className="bg-white text-[#00A896] hover:bg-gray-100 px-10 py-7 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                                 Book Appointment
                                 <ArrowRight className="w-5 h-5 ml-2" />
                              </Button>
                           </Link>
                           <Button variant="outline" className="border-2 border-white text-teal-800 hover:bg-white hover:text-[#00A896] px-10 py-7 rounded-full text-lg font-semibold transition-all">
                              <Phone className="w-5 h-5 mr-2" />
                              Call Us Now
                           </Button>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 mt-12">
                           <div className="flex items-center gap-2 text-white/90">
                              <CheckCircle2 className="w-5 h-5 text-[#7DD3C0]" />
                              <span className="text-sm font-medium">No Waiting Time</span>
                           </div>
                           <div className="flex items-center gap-2 text-white/90">
                              <CheckCircle2 className="w-5 h-5 text-[#7DD3C0]" />
                              <span className="text-sm font-medium">Online Booking</span>
                           </div>
                           <div className="flex items-center gap-2 text-white/90">
                              <CheckCircle2 className="w-5 h-5 text-[#7DD3C0]" />
                              <span className="text-sm font-medium">Insurance Accepted</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Index;
