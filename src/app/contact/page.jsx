"use client"


import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const ContactPage = () => {
   const [submitted, setSubmitted] = useState(false)
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
   })

   const handleChange = (e) => {
      const { name, value } = e.target
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }))
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      setSubmitted(true)
      setTimeout(() => {
         setSubmitted(false)
         setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
         })
      }, 3000)
   }

   const contactInfo = [
      {
         icon: MapPin,
         title: "Location",
         details: ["AZAD CHOK, Anand Nagar, Shanti Nagar,", "Rewari, Haryana, 123401"],
         color: "#F77F00",
      },
      {
         icon: Phone,
         title: "Phone",
         details: ["+1 (234) 567-890", "+1 (234) 567-891"],
         color: "#00A896",
      },
      {
         icon: Mail,
         title: "Email",
         details: ["info@Samrat Hospital.com", "appointments@Samrat Hospital.com"],
         color: "#FCBF49",
      },
      {
         icon: Clock,
         title: "Hours",
         details: ["Mon-Fri: 8:00 AM - 8:00 PM", "Emergency: 24/7"],
         color: "#D62828",
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
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
                  <p className="text-xl text-gray-200 leading-relaxed">
                     Have questions or want to schedule an appointment? We're here to help. Contact us today!
                  </p>
               </div>
            </div>
         </section>

         {/* Contact Information Cards */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  {contactInfo.map((info, index) => (
                     <div
                        key={index}
                        style={{ borderColor: `${info.color}20` }}
                        className="p-8 rounded-2xl border bg-white hover:shadow-lg transition-shadow"
                     >
                        <div
                           style={{ background: `${info.color}20` }}
                           className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        >
                           <info.icon className="w-6 h-6" style={{ color: info.color }} />
                        </div>
                        <h3 className="text-lg font-bold text-[#1E3A5F] mb-3">{info.title}</h3>
                        <ul className="space-y-2">
                           {info.details.map((detail, i) => (
                              <li key={i} className="text-sm text-gray-600">
                                 {detail}
                              </li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Contact Form & Map */}
         <section
            style={{
               background: "linear-gradient(to right, rgb(230, 244, 241), rgb(240, 249, 248))",
            }}
            className="py-20"
         >
            <div className="container mx-auto px-6">
               <div className="grid lg:grid-cols-2 gap-12">
                  {/* Contact Form */}
                  <div className="bg-white p-10 rounded-2xl shadow-lg">
                     <h2 className="text-3xl font-bold text-[#1E3A5F] mb-8">Send us a Message</h2>

                     {submitted ? (
                        <div
                           style={{ background: "rgba(0, 168, 150, 0.1)", borderColor: "rgba(0, 168, 150, 0.2)" }}
                           className="p-8 rounded-xl border flex flex-col items-center justify-center text-center"
                        >
                           <CheckCircle2 className="w-16 h-16 text-[#00A896] mb-4" />
                           <h3 className="text-2xl font-bold text-[#1E3A5F] mb-2">Thank You!</h3>
                           <p className="text-gray-600 mb-2">Your message has been sent successfully.</p>
                           <p className="text-sm text-gray-500">We'll get back to you as soon as possible.</p>
                        </div>
                     ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                           <div>
                              <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">Full Name</label>
                              <input
                                 type="text"
                                 name="name"
                                 value={formData.name}
                                 onChange={handleChange}
                                 required
                                 style={{ borderColor: "rgba(30, 58, 95, 0.2)" }}
                                 className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A896] text-gray-700"
                                 placeholder="Enter your full name"
                              />
                           </div>

                           <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                 <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">Email</label>
                                 <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{ borderColor: "rgba(30, 58, 95, 0.2)" }}
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A896] text-gray-700"
                                    placeholder="your@email.com"
                                 />
                              </div>

                              <div>
                                 <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">Phone</label>
                                 <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    style={{ borderColor: "rgba(30, 58, 95, 0.2)" }}
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A896] text-gray-700"
                                    placeholder="+1 (234) 567-890"
                                 />
                              </div>
                           </div>

                           <div>
                              <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">Subject</label>
                              <select
                                 name="subject"
                                 value={formData.subject}
                                 onChange={handleChange}
                                 required
                                 style={{ borderColor: "rgba(30, 58, 95, 0.2)" }}
                                 className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A896] text-gray-700"
                              >
                                 <option value="">Select a subject</option>
                                 <option value="appointment">Book an Appointment</option>
                                 <option value="general">General Inquiry</option>
                                 <option value="billing">Billing Question</option>
                                 <option value="feedback">Feedback</option>
                                 <option value="other">Other</option>
                              </select>
                           </div>

                           <div>
                              <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">Message</label>
                              <textarea
                                 name="message"
                                 value={formData.message}
                                 onChange={handleChange}
                                 required
                                 rows={5}
                                 style={{ borderColor: "rgba(30, 58, 95, 0.2)" }}
                                 className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A896] text-gray-700 resize-none"
                                 placeholder="Please share your message or inquiry..."
                              />
                           </div>

                           <Button
                              type="submit"
                              style={{ background: "linear-gradient(to right, #00A896, #028090)" }}
                              className="w-full text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
                           >
                              <Send className="w-4 h-4" />
                              Send Message
                           </Button>
                        </form>
                     )}
                  </div>

                  {/* Google Map */}
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                     <iframe
                        width="100%"
                        height="600"
                        style={{ border: "none" }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-73.96!3d40.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0x6fdf3b8c2e3d0!2s123%20Healthcare%20Ave!5e0!3m2!1sen!2sus!4v1234567890"
                     />
                  </div>
               </div>
            </div>
         </section>

         {/* Additional Services Section */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
               <h2 className="text-4xl font-bold text-[#1E3A5F] mb-12 text-center">Other Ways to Reach Us</h2>

               <div className="grid md:grid-cols-3 gap-8">
                  {/* Emergency Care */}
                  <div
                     style={{ borderColor: "rgba(214, 40, 40, 0.2)" }}
                     className="p-8 rounded-2xl border bg-white hover:shadow-lg transition-shadow"
                  >
                     <div
                        style={{ background: "rgba(214, 40, 40, 0.1)" }}
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                     >
                        <Phone className="w-7 h-7 text-[#D62828]" />
                     </div>
                     <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">Emergency Services</h3>
                     <p className="text-gray-600 mb-4">For life-threatening emergencies, call immediately:</p>
                     <p className="text-2xl font-bold text-[#D62828]">+91 1234567890</p>
                  </div>

                  {/* Patient Portal */}
                  <div
                     style={{ borderColor: "rgba(0, 168, 150, 0.2)" }}
                     className="p-8 rounded-2xl border bg-white hover:shadow-lg transition-shadow"
                  >
                     <div
                        style={{ background: "rgba(0, 168, 150, 0.1)" }}
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                     >
                        <Mail className="w-7 h-7 text-[#00A896]" />
                     </div>
                     <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">Patient Portal</h3>
                     <p className="text-gray-600 mb-4">Access your medical records and appointment history online:</p>
                     <Button className="w-full bg-[#00A896] text-white hover:bg-[#028090] rounded-lg">Access Portal</Button>
                  </div>

                  {/* Feedback */}
                  <div
                     style={{ borderColor: "rgba(247, 127, 0, 0.2)" }}
                     className="p-8 rounded-2xl border bg-white hover:shadow-lg transition-shadow"
                  >
                     <div
                        style={{ background: "rgba(247, 127, 0, 0.1)" }}
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                     >
                        <Send className="w-7 h-7 text-[#F77F00]" />
                     </div>
                     <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">Patient Feedback</h3>
                     <p className="text-gray-600 mb-4">Share your experience and help us improve our services:</p>
                     <Button className="w-full border border-[#F77F00] text-[#F77F00] hover:bg-[#F77F00] hover:text-white rounded-lg">
                        Leave Feedback
                     </Button>
                  </div>
               </div>
            </div>
         </section>

         {/* FAQ Section */}
         <section
            style={{
               background: "linear-gradient(to right, rgb(230, 244, 241), rgb(240, 249, 248))",
            }}
            className="py-20"
         >
            <div className="container mx-auto px-6">
               <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold text-[#1E3A5F] mb-12 text-center">Frequently Asked Questions</h2>

                  <div className="space-y-4">
                     {[
                        {
                           q: "How do I schedule an appointment?",
                           a: "You can schedule an appointment by calling us at +1 (234) 567-890, using our online patient portal, or filling out the contact form above.",
                        },
                        {
                           q: "What are your business hours?",
                           a: "We are open Monday to Friday from 8:00 AM to 8:00 PM. Our emergency department is available 24/7.",
                        },
                        {
                           q: "Do you accept insurance?",
                           a: "Yes, we accept most major insurance plans. Please contact our billing department for specific coverage details.",
                        },
                        {
                           q: "Can I get copies of my medical records?",
                           a: "Yes, you can request medical records through our patient portal or by contacting our records department directly.",
                        },
                     ].map((faq, index) => (
                        <div
                           key={index}
                           style={{ borderColor: "rgba(0, 168, 150, 0.2)" }}
                           className="p-6 rounded-xl border bg-white hover:shadow-md transition-shadow"
                        >
                           <h3 className="font-bold text-[#1E3A5F] mb-2">{faq.q}</h3>
                           <p className="text-gray-600 text-sm">{faq.a}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}

export default ContactPage
