"use client"

import { Phone, Mail, Clock, MapPin, ChevronDown, Calendar, Menu, MapPinIcon, MessageSquare, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

const Navbar = () => {
   const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
   const [specialitiesDropdownOpen, setSpecialitiesDropdownOpen] = useState(false)
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
   const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
   const [mobileSpecialitiesOpen, setMobileSpecialitiesOpen] = useState(false)

   return (
      <header className="w-full sm:pb-0 fixed top-0 lg:static z-[99999]">
         {/* Top Bar - Contact Info */}
         <div style={{ background: "linear-gradient(to right, #1E3A5F, #2B4A6F)" }} className="text-white hidden lg:block">
            <div className="mx-auto px-16">
               <div className="flex items-center justify-between h-9 text-xs">
                  <div className="flex items-center gap-6">
                     <a href="tel:+919053744402" className="flex items-center gap-1.5 hover:text-[#7DD3C0] transition-colors">
                        <Phone className="w-3 h-3" />
                        <span>++91 90537 44402</span>
                     </a>
                     <a
                        href="mailto:samrathospitalrewari@gmail.com"
                        className="flex items-center gap-1.5 hover:text-[#7DD3C0] transition-colors"
                     >
                        <Mail className="w-3 h-3" />
                        <span>samrathospitalrewari@gmail.com</span>
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
            <div className="mx-auto px-4 md:px-16">
               <div className="flex items-center justify-between h-16">
                  <a href="/" className="flex items-center gap-3">
                     <div className="relative">
                        <img src="/logo.png" alt="Samrat Hospital Logo" className="w-10 h-10" />
                     </div>
                     <div className="flex flex-col">
                        <h1 className="text-lg font-bold text-[#1E3A5F] tracking-tight">SAMRAT HOSPITAL</h1>
                        <p className="flex justify-between text-[9px] text-[#00A896] uppercase font-semibold"><span>P</span><span>A</span><span>I</span><span>N</span><span>  </span><span>&</span><span>  </span><span>M</span><span>U</span><span>L</span><span>T</span><span>I</span><span>-</span><span>S</span><span>P</span><span>E</span><span>C</span><span>I</span><span>A</span><span>L</span><span>I</span><span>T</span><span>Y</span></p>
                     </div>
                  </a>



                  {/* Right Actions */}
                  <div className="flex items-center gap-3">
                     <Link href="/book-appointment">
                        <Button
                           style={{ background: "linear-gradient(to right, #F77F00, #FCBF49)", boxShadow: "0 0 20px rgba(247, 127, 0, 0.3)" }}
                           className="hidden sm:flex text-white text-sm h-10 px-5 rounded-full font-medium shadow-lg transition-all hover:shadow-xl hover:cursor-pointer"
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
                              href="/about/owner"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2.5 px-4 text-sm text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors border-l-2 border-transparent hover:border-[#00A896]"
                           >
                              About Owner
                           </a>
                           <a
                              href="/about/team"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2.5 px-4 text-sm text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors border-l-2 border-transparent hover:border-[#00A896]"
                           >
                              About Team
                           </a>
                        </div>
                     )}
                  </div>

                  {/* Mobile Specialities Dropdown */}
                  <div className="border-b border-gray-100">
                     <button
                        onClick={() => setMobileSpecialitiesOpen(!mobileSpecialitiesOpen)}
                        className="w-full py-3 flex items-center justify-between text-sm font-medium text-[#1E3A5F] hover:text-[#00A896] transition-colors"
                     >
                        Specialities
                        <ChevronDown
                           className={`w-4 h-4 transition-transform duration-300 ${mobileSpecialitiesOpen ? "rotate-180" : ""}`}
                        />
                     </button>
                     {mobileSpecialitiesOpen && (
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
                              Inpatient Specialities
                           </a>
                           <a
                              href="#"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2.5 px-4 text-sm text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors border-l-2 border-transparent hover:border-[#00A896]"
                           >
                              Outpatient Specialities
                           </a>
                           <a
                              href="#"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2.5 px-4 text-sm text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors border-l-2 border-transparent hover:border-[#00A896]"
                           >
                              Diagnostic Specialities
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
                              Rehabilitation Specialities
                           </a>
                           <a
                              href="#"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2.5 px-4 text-sm text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors border-l-2 border-transparent hover:border-[#00A896]"
                           >
                              Pharmacy Specialities
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

               {/* Navigation Links */}
               <nav className="flex items-center justify-center h-10 gap-6">
                  <a
                     href="/"
                     className="text-sm font-medium text-[#1E3A5F] hover:text-[#00A896] transition-colors"
                  >
                     Home
                  </a>

                  <span className="w-px h-4 bg-gray-300" />

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

                  <span className="w-px h-4 bg-gray-300" />

                  <div className="relative group">
                     <button
                        onMouseEnter={() => setSpecialitiesDropdownOpen(true)}
                        onMouseLeave={() => setSpecialitiesDropdownOpen(false)}
                        className="flex items-center gap-1 text-sm font-medium text-[#1E3A5F] hover:text-[#00A896] transition-colors"
                     >
                        Specialities
                        <ChevronDown
                           className={`w-3.5 h-3.5 transition-transform duration-300 ${specialitiesDropdownOpen ? "rotate-180" : ""}`}
                        />
                     </button>

                     {/* Dropdown Menu */}
                     <div
                        onMouseEnter={() => setSpecialitiesDropdownOpen(true)}
                        onMouseLeave={() => setSpecialitiesDropdownOpen(false)}
                        className={`absolute left-0 mt-0 w-56 z-50
                               bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-200 origin-top ${specialitiesDropdownOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible"
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
                           Inpatient Specialities
                        </a>
                        <a
                           href="#"
                           className="block px-4 py-3 text-sm font-medium text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors border-b border-gray-100"
                        >
                           Outpatient Specialities
                        </a>
                        <a
                           href="#"
                           className="block px-4 py-3 text-sm font-medium text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors border-b border-gray-100"
                        >
                           Diagnostic Specialities
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
                           Rehabilitation Specialities
                        </a>
                        <a
                           href="#"
                           className="block px-4 py-3 text-sm font-medium text-[#1E3A5F] hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors"
                        >
                           Pharmacy Specialities
                        </a>
                     </div>
                  </div>

                  <span className="w-px h-4 bg-gray-300" />

                  <a href="/doctors" className="text-sm font-medium text-[#1E3A5F] hover:text-[#00A896] transition-colors">
                     Doctors
                  </a>

                  <span className="w-px h-4 bg-gray-300" />

                  <a
                     href="/departments"
                     className="text-sm font-medium text-[#1E3A5F] hover:text-[#00A896] transition-colors"
                  >
                     Departments
                  </a>

                  <span className="w-px h-4 bg-gray-300" />

                  <a href="/contact" className="text-sm font-medium text-[#1E3A5F] hover:text-[#00A896] transition-colors">
                     Contact
                  </a>
               </nav>
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
