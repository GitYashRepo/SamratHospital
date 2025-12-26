"use client"

import { Phone, Mail, Clock, MapPin, ChevronDown, Calendar, Menu, MapPinIcon, MessageSquare, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

const Navbar = () => {
   const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
   const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
   const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
   const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

   return (
      <header className="w-full sm:pb-0 sticky top-0 lg:static z-[99999]">
         {/* Top Bar - Contact Info */}
         <div style={{ background: "linear-gradient(to right, #1E3A5F, #2B4A6F)" }} className="text-white hidden lg:block">
            <div className="mx-auto px-16">
               <div className="flex items-center justify-between h-9 text-xs">
                  <div className="flex items-center gap-6">
                     <a href="tel:+1234567890" className="flex items-center gap-1.5 hover:text-[#7DD3C0] transition-colors">
                        <Phone className="w-3 h-3" />
                        <span>+1 (234) 567-890</span>
                     </a>
                     <a
                        href="mailto:info@samrathospital.com"
                        className="flex items-center gap-1.5 hover:text-[#7DD3C0] transition-colors"
                     >
                        <Mail className="w-3 h-3" />
                        <span>info@samrathospital.com</span>
                     </a>
                  </div>
                  <div className="hidden md:flex items-center gap-6">
                     <div className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        <span>24X7</span>
                     </div>
                     <div className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" />
                        <span>AZAD CHOK, Anand Nagar, Shanti Nagar, Rewari</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Main Navigation */}
         <div
            style={{ background: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(2px)" }}
            className="border-b border-gray-100 relative overflow-visible z-[99999999]"
         >
            <div className="mx-auto px-4 md:px-12">
               <div className="flex items-center justify-between h-16">
                  {/* Logo */}
                  <a href="/" className="flex items-center gap-3">
                     <div className="relative">
                        <div
                           style={{ background: "linear-gradient(to bottom right, #00A896, #028090)", boxShadow: "0 0 20px rgba(0, 168, 150, 0.3)" }}
                           className="w-11 h-11 rounded-xl flex items-center justify-center shadow-lg"
                        >
                           <span className="text-white font-bold text-xl">H</span>
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#F77F00] rounded-full flex items-center justify-center">
                           <span className="text-white text-[8px] font-bold">+</span>
                        </div>
                     </div>
                     <div>
                        <h1 className="text-xl font-bold text-[#1E3A5F] tracking-tight">Samrat Hospital</h1>
                        <p className="text-[9px] text-[#00A896] uppercase tracking-[0.2em] font-semibold">PAIN & MULTI-SPECIALITY</p>
                     </div>
                  </a>

                  {/* Navigation Links */}
                  <nav className="hidden lg:flex items-center gap-8">
                     <a
                        href="/"
                        className="text-sm font-medium text-[#1E3A5F] hover:text-[#00A896] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#00A896] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                     >
                        Home
                     </a>

                     <div className="relative group">
                        <button
                           onMouseEnter={() => setAboutDropdownOpen(true)}
                           onMouseLeave={() => setAboutDropdownOpen(false)}
                           className="flex items-center gap-1 text-sm font-medium text-[#1E3A5F] hover:text-[#00A896] transition-colors"
                        >
                           About
                           <ChevronDown
                              className={`w-3.5 h-3.5 transition-transform duration-300 ${aboutDropdownOpen ? "rotate-180" : ""}`}
                           />
                        </button>

                        {/* Dropdown Menu */}
                        <div
                           onMouseEnter={() => setAboutDropdownOpen(true)}
                           onMouseLeave={() => setAboutDropdownOpen(false)}
                           className={`absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-xl z-[99999] border border-gray-100 transform transition-all duration-200 origin-top ${aboutDropdownOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible"
                              }`}
                        >
                           <a
                              href="/about"
                              className="block px-4 py-3 text-sm font-medium text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors border-b border-gray-100"
                           >
                              About Us
                           </a>
                           <a
                              href="/about/owner"
                              className="block px-4 py-3 text-sm font-medium text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors border-b border-gray-100"
                           >
                              About Owner
                           </a>
                           <a
                              href="/about/team"
                              className="block px-4 py-3 text-sm font-medium text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors"
                           >
                              About Team
                           </a>
                        </div>
                     </div>

                     <div className="relative group">
                        <button
                           onMouseEnter={() => setServicesDropdownOpen(true)}
                           onMouseLeave={() => setServicesDropdownOpen(false)}
                           className="flex items-center gap-1 text-sm font-medium text-[#1E3A5F] hover:text-[#00A896] transition-colors"
                        >
                           Services
                           <ChevronDown
                              className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesDropdownOpen ? "rotate-180" : ""}`}
                           />
                        </button>

                        {/* Dropdown Menu */}
                        <div
                           onMouseEnter={() => setServicesDropdownOpen(true)}
                           onMouseLeave={() => setServicesDropdownOpen(false)}
                           className={`absolute left-0 mt-0 w-56 z-50
                               bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-200 origin-top ${servicesDropdownOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible"
                              }`}
                        >
                           <a
                              href="#"
                              className="block px-4 py-3 text-sm font-medium text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors border-b border-gray-100"
                           >
                              Emergency Care
                           </a>
                           <a
                              href="#"
                              className="block px-4 py-3 text-sm font-medium text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors border-b border-gray-100"
                           >
                              Inpatient Services
                           </a>
                           <a
                              href="#"
                              className="block px-4 py-3 text-sm font-medium text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors border-b border-gray-100"
                           >
                              Outpatient Services
                           </a>
                           <a
                              href="#"
                              className="block px-4 py-3 text-sm font-medium text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors border-b border-gray-100"
                           >
                              Diagnostic Services
                           </a>
                           <a
                              href="#"
                              className="block px-4 py-3 text-sm font-medium text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors border-b border-gray-100"
                           >
                              Surgery & ICU
                           </a>
                           <a
                              href="#"
                              className="block px-4 py-3 text-sm font-medium text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors border-b border-gray-100"
                           >
                              Rehabilitation Services
                           </a>
                           <a
                              href="#"
                              className="block px-4 py-3 text-sm font-medium text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors"
                           >
                              Pharmacy Services
                           </a>
                        </div>
                     </div>

                     <a href="/doctors" className="text-sm font-medium text-[#1E3A5F] hover:text-[#00A896] transition-colors">
                        Doctors
                     </a>
                     <a
                        href="/departments"
                        className="text-sm font-medium text-[#1E3A5F] hover:text-[#00A896] transition-colors"
                     >
                        Departments
                     </a>
                     <a href="/contact" className="text-sm font-medium text-[#1E3A5F] hover:text-[#00A896] transition-colors">
                        Contact
                     </a>
                  </nav>

                  {/* Right Actions */}
                  <div className="flex items-center gap-3">
                     <Link href="/book-appointment">
                        <Button
                           style={{ background: "linear-gradient(to right, #F77F00, #FCBF49)", boxShadow: "0 0 20px rgba(247, 127, 0, 0.3)" }}
                           className="hidden sm:flex text-white text-sm h-10 px-5 rounded-full font-medium shadow-lg transition-all hover:shadow-xl"
                        >
                           <Calendar className="w-4 h-4 mr-2" />
                           Book Appointment
                        </Button>
                     </Link>
                     <button className="lg:hidden p-2 text-[#1E3A5F]" onClick={() => setMobileMenuOpen(prev => !prev)}>
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                     </button>
                  </div>
               </div>
            </div>
         </div>

         {/* Mobile Menu Sliding Panel */}
         {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 top-16 z-40 bg-white overflow-y-auto pb-24">
               <nav className="mx-auto px-6 py-4">
                  <a
                     href="/"
                     onClick={() => setMobileMenuOpen(false)}
                     className="block py-3 text-sm font-medium text-[#1E3A5F] hover:text-[#00A896] border-b border-gray-100 transition-colors"
                  >
                     Home
                  </a>

                  {/* Mobile About Dropdown */}
                  <div className="border-b border-gray-100">
                     <button
                        onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                        className="w-full py-3 flex items-center justify-between text-sm font-medium text-[#1E3A5F] hover:text-[#00A896] transition-colors"
                     >
                        About Us
                        <ChevronDown
                           className={`w-4 h-4 transition-transform duration-300 ${mobileAboutOpen ? "rotate-180" : ""}`}
                        />
                     </button>
                     {mobileAboutOpen && (
                        <div className="bg-gray-50">
                           <a
                              href="/about"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2.5 px-4 text-sm text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors border-l-2 border-[#00A896]"
                           >
                              About Us
                           </a>
                           <a
                              href="/about-owner"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2.5 px-4 text-sm text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors border-l-2 border-transparent hover:border-[#00A896]"
                           >
                              About Owner
                           </a>
                           <a
                              href="/about-team"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2.5 px-4 text-sm text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors border-l-2 border-transparent hover:border-[#00A896]"
                           >
                              About Team
                           </a>
                        </div>
                     )}
                  </div>

                  {/* Mobile Services Dropdown */}
                  <div className="border-b border-gray-100">
                     <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full py-3 flex items-center justify-between text-sm font-medium text-[#1E3A5F] hover:text-[#00A896] transition-colors"
                     >
                        Services
                        <ChevronDown
                           className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                        />
                     </button>
                     {mobileServicesOpen && (
                        <div className="bg-gray-50">
                           <a
                              href="#"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2.5 px-4 text-sm text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors border-l-2 border-[#00A896]"
                           >
                              Emergency Care
                           </a>
                           <a
                              href="#"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2.5 px-4 text-sm text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors border-l-2 border-transparent hover:border-[#00A896]"
                           >
                              Inpatient Services
                           </a>
                           <a
                              href="#"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2.5 px-4 text-sm text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors border-l-2 border-transparent hover:border-[#00A896]"
                           >
                              Outpatient Services
                           </a>
                           <a
                              href="#"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2.5 px-4 text-sm text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors border-l-2 border-transparent hover:border-[#00A896]"
                           >
                              Diagnostic Services
                           </a>
                           <a
                              href="#"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2.5 px-4 text-sm text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors border-l-2 border-transparent hover:border-[#00A896]"
                           >
                              Surgery & ICU
                           </a>
                           <a
                              href="#"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2.5 px-4 text-sm text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors border-l-2 border-transparent hover:border-[#00A896]"
                           >
                              Rehabilitation Services
                           </a>
                           <a
                              href="#"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2.5 px-4 text-sm text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors border-l-2 border-transparent hover:border-[#00A896]"
                           >
                              Pharmacy Services
                           </a>
                        </div>
                     )}
                  </div>

                  <a
                     href="/doctors"
                     onClick={() => setMobileMenuOpen(false)}
                     className="block py-3 text-sm font-medium text-[#1E3A5F] hover:text-[#00A896] border-b border-gray-100 transition-colors"
                  >
                     Doctors
                  </a>
                  <a
                     href="/departments"
                     onClick={() => setMobileMenuOpen(false)}
                     className="block py-3 text-sm font-medium text-[#1E3A5F] hover:text-[#00A896] border-b border-gray-100 transition-colors"
                  >
                     Departments
                  </a>
                  <a
                     href="/contact"
                     onClick={() => setMobileMenuOpen(false)}
                     className="block py-3 text-sm font-medium text-[#1E3A5F] hover:text-[#00A896] border-b border-gray-100 transition-colors"
                  >
                     Contact
                  </a>

                  {/* Book Appointment Button in Mobile Menu */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                     <Link href="book-appointment">
                        <Button
                           style={{ background: "linear-gradient(to right, #F77F00, #FCBF49)", boxShadow: "0 0 20px rgba(247, 127, 0, 0.3)" }}
                           className="w-full text-white text-sm h-11 rounded-full font-medium shadow-lg transition-all hover:shadow-xl"
                           onClick={() => setMobileMenuOpen(false)}
                        >
                           <Calendar className="w-4 h-4 mr-2" />
                           Book Appointment
                        </Button>
                     </Link>
                  </div>
               </nav>
            </div>
         )}

         {/* Utility Bar - Quick Links */}
         <div
            style={{ background: "linear-gradient(to right, rgb(248, 249, 250), rgb(233, 236, 239))" }}
            className="border-b border-gray-200 hidden md:block"
         >
            <div className="mx-auto px-6">
               <div className="flex items-center justify-center h-10 gap-6 overflow-x-auto">
                  <a
                     href="#"
                     className="text-xs text-[#D62828] hover:text-[#B81D1D] transition-colors font-semibold flex items-center gap-1 whitespace-nowrap"
                  >
                     <span className="w-1.5 h-1.5 bg-[#D62828] rounded-full animate-pulse" />
                     Emergency Care
                  </a>
                  <span className="w-px h-4 bg-gray-300" />
                  <a
                     href="#"
                     className="text-xs text-[#1E3A5F] hover:text-[#00A896] transition-colors font-medium whitespace-nowrap"
                  >
                     Find a Doctor
                  </a>
                  <span className="w-px h-4 bg-gray-300" />
                  <a
                     href="#"
                     className="text-xs text-[#1E3A5F] hover:text-[#00A896] transition-colors font-medium whitespace-nowrap"
                  >
                     Patient Portal
                  </a>
                  <span className="w-px h-4 bg-gray-300 hidden sm:block" />
                  <a
                     href="#"
                     className="text-xs text-[#1E3A5F] hover:text-[#00A896] transition-colors font-medium hidden sm:block whitespace-nowrap"
                  >
                     Pay Bill Online
                  </a>
                  <span className="w-px h-4 bg-gray-300 hidden sm:block" />
                  <a
                     href="#"
                     className="text-xs text-[#1E3A5F] hover:text-[#00A896] transition-colors font-medium hidden sm:block whitespace-nowrap"
                  >
                     Request Records
                  </a>
               </div>
            </div>
         </div>

         {/* Mobile-only bottom navigation bar with 4 quick action buttons */}
         <div
            className="fixed bottom-0 w-full md:hidden z-50 bg-white border-t border-gray-200 shadow-2xl"
            style={{ boxShadow: "0 -2px 12px rgba(0, 0, 0, 0.08)" }}
         >
            <div className="flex items-center justify-between px-2 gap-1">
               {/* Call Button */}
               <a
                  href="tel:+918930605605"
                  className="flex flex-col items-center justify-center flex-1 py-2 rounded-lg transition-all duration-200 hover:bg-gradient-to-b hover:from-[#00A896]/10 hover:to-[#028090]/10"
               >
                  <div className="p-2.5 rounded-lg mb-1" style={{ background: "linear-gradient(135deg, #00A896, #028090)" }}>
                     <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#1E3A5F]">Call</span>
               </a>

               {/* Get Direction Button */}
               <a
                  href="#"
                  className="flex flex-col items-center justify-center flex-1 py-2 rounded-lg transition-all duration-200 hover:bg-gradient-to-b hover:from-[#F77F00]/10 hover:to-[#FCBF49]/10"
               >
                  <div className="p-2.5 rounded-lg mb-1" style={{ background: "linear-gradient(135deg, #F77F00, #FCBF49)" }}>
                     <MapPinIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#1E3A5F]">Direction</span>
               </a>

               {/* Book Appointment Button */}
               <a
                  href="#"
                  className="flex flex-col items-center justify-center flex-1 py-2 rounded-lg transition-all duration-200 hover:bg-gradient-to-b hover:from-[#7B2D8E]/10 hover:to-[#9D4EDD]/10"
               >
                  <div className="p-2.5 rounded-lg mb-1" style={{ background: "linear-gradient(135deg, #7B2D8E, #9D4EDD)" }}>
                     <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#1E3A5F]">Appointment</span>
               </a>

               {/* Contact Button */}
               <a
                  href="/contact"
                  className="flex flex-col items-center justify-center flex-1 py-2 rounded-lg transition-all duration-200 hover:bg-gradient-to-b hover:from-[#D62828]/10 hover:to-[#E63946]/10"
               >
                  <div className="p-2.5 rounded-lg mb-1" style={{ background: "linear-gradient(135deg, #D62828, #E63946)" }}>
                     <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#1E3A5F]">Contact</span>
               </a>
            </div>
         </div>
      </header>
   )
}

export default Navbar
