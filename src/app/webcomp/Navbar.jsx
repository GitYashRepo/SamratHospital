import { Phone, Mail, Clock, MapPin, ChevronDown, Calendar, Menu, MapPinIcon, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button";

const Navbar = () => {
   return (
      <header className="w-full">
         {/* Top Bar - Contact Info */}
         <div className="bg-gradient-to-r from-[#1E3A5F] to-[#2B4A6F] text-white">
            <div className="container mx-auto px-6">
               <div className="flex items-center justify-between h-9 text-xs">
                  <div className="flex items-center gap-6">
                     <a href="tel:+1234567890" className="flex items-center gap-1.5 hover:text-[#7DD3C0] transition-colors">
                        <Phone className="w-3 h-3" />
                        <span>+1 (234) 567-890</span>
                     </a>
                     <a href="mailto:info@healwell.com" className="flex items-center gap-1.5 hover:text-[#7DD3C0] transition-colors">
                        <Mail className="w-3 h-3" />
                        <span>info@healwell.com</span>
                     </a>
                  </div>
                  <div className="hidden md:flex items-center gap-6">
                     <div className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
                     </div>
                     <div className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" />
                        <span>123 Healthcare Ave, Medical City</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Main Navigation */}
         <div className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
            <div className="container mx-auto px-6">
               <div className="flex items-center justify-between h-16">
                  {/* Logo */}
                  <a href="/" className="flex items-center gap-3">
                     <div className="relative">
                        <div className="w-11 h-11 bg-gradient-to-br from-[#00A896] to-[#028090] rounded-xl flex items-center justify-center shadow-lg shadow-[#00A896]/30">
                           <span className="text-white font-bold text-xl">H</span>
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#F77F00] rounded-full flex items-center justify-center">
                           <span className="text-white text-[8px] font-bold">+</span>
                        </div>
                     </div>
                     <div>
                        <h1 className="text-xl font-bold text-[#1E3A5F] tracking-tight">HealWell</h1>
                        <p className="text-[9px] text-[#00A896] uppercase tracking-[0.2em] font-semibold">Medical Center</p>
                     </div>
                  </a>

                  {/* Navigation Links */}
                  <nav className="hidden lg:flex items-center gap-8">
                     <a href="#" className="text-sm font-medium text-[#1E3A5F] hover:text-[#00A896] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#00A896] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
                        Home
                     </a>
                     <div className="relative group">
                        <button className="flex items-center gap-1 text-sm font-medium text-[#1E3A5F] hover:text-[#00A896] transition-colors">
                           About Us
                           <ChevronDown className="w-3.5 h-3.5" />
                        </button>
                     </div>
                     <div className="relative group">
                        <button className="flex items-center gap-1 text-sm font-medium text-[#1E3A5F] hover:text-[#00A896] transition-colors">
                           Services
                           <ChevronDown className="w-3.5 h-3.5" />
                        </button>
                     </div>
                     <a href="#" className="text-sm font-medium text-[#1E3A5F] hover:text-[#00A896] transition-colors">
                        Doctors
                     </a>
                     <a href="#" className="text-sm font-medium text-[#1E3A5F] hover:text-[#00A896] transition-colors">
                        Departments
                     </a>
                     <a href="#" className="text-sm font-medium text-[#1E3A5F] hover:text-[#00A896] transition-colors">
                        Contact
                     </a>
                  </nav>

                  {/* Right Actions */}
                  <div className="flex items-center gap-3">
                     <Button className="hidden sm:flex bg-gradient-to-r from-[#F77F00] to-[#FCBF49] hover:from-[#E76F00] hover:to-[#F0B030] text-white text-sm h-10 px-5 rounded-full font-medium shadow-lg shadow-[#F77F00]/30 transition-all hover:shadow-xl hover:shadow-[#F77F00]/40">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Appointment
                     </Button>
                     <button className="lg:hidden p-2 text-[#1E3A5F]">
                        <Menu className="w-5 h-5" />
                     </button>
                  </div>
               </div>
            </div>
         </div>

         {/* Utility Bar - Quick Links */}
         <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] border-b border-gray-200">
            <div className="container mx-auto px-6">
               <div className="flex items-center justify-center h-10 gap-6 overflow-x-auto">
                  <a href="#" className="text-xs text-[#D62828] hover:text-[#B81D1D] transition-colors font-semibold flex items-center gap-1 whitespace-nowrap">
                     <span className="w-1.5 h-1.5 bg-[#D62828] rounded-full animate-pulse" />
                     Emergency Care
                  </a>
                  <span className="w-px h-4 bg-gray-300" />
                  <a href="#" className="text-xs text-[#1E3A5F] hover:text-[#00A896] transition-colors font-medium whitespace-nowrap">
                     Find a Doctor
                  </a>
                  <span className="w-px h-4 bg-gray-300" />
                  <a href="#" className="text-xs text-[#1E3A5F] hover:text-[#00A896] transition-colors font-medium whitespace-nowrap">
                     Patient Portal
                  </a>
                  <span className="w-px h-4 bg-gray-300" />
                  <a href="#" className="text-xs text-[#1E3A5F] hover:text-[#00A896] transition-colors font-medium whitespace-nowrap">
                     Pay Bill Online
                  </a>
                  <span className="w-px h-4 bg-gray-300 hidden sm:block" />
                  <a href="#" className="text-xs text-[#1E3A5F] hover:text-[#00A896] transition-colors font-medium hidden sm:block whitespace-nowrap">
                     Request Records
                  </a>
               </div>
            </div>
         </div>

         {/* Mobile Only Bottom Navigation Bar */}
         <div
            className="fixed bottom-0 w-full md:hidden z-50 bg-white border-t border-gray-200 shadow-2xl"
            style={{ boxShadow: "0 -2px 12px rgba(0, 0, 0, 0.08)" }}
         >
            <div className="flex items-center justify-between">
               {/* Call Button */}
               <a
                  href="tel:+1234567890"
                  className="flex flex-col items-center justify-center flex-1 py-2 rounded-lg transition-all duration-200 hover:bg-gradient-to-b hover:from-[#00A896]/10 hover:to-[#028090]/10"
               >
                  <div className="p-2 rounded-lg mb-1" style={{ background: "linear-gradient(135deg, #00A896, #028090)" }}>
                     <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#1E3A5F]">Call</span>
               </a>

               {/* Get Direction Button */}
               <a
                  href="#"
                  className="flex flex-col items-center justify-center flex-1 py-2 rounded-lg transition-all duration-200 hover:bg-gradient-to-b hover:from-[#F77F00]/10 hover:to-[#FCBF49]/10"
               >
                  <div className="p-2 rounded-lg mb-1" style={{ background: "linear-gradient(135deg, #F77F00, #FCBF49)" }}>
                     <MapPinIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#1E3A5F]">Direction</span>
               </a>

               {/* Book Appointment Button */}
               <a
                  href="#"
                  className="flex flex-col items-center justify-center flex-1 py-2 rounded-lg transition-all duration-200 hover:bg-gradient-to-b hover:from-[#7B2D8E]/10 hover:to-[#9D4EDD]/10"
               >
                  <div className="p-2 rounded-lg mb-1" style={{ background: "linear-gradient(135deg, #7B2D8E, #9D4EDD)" }}>
                     <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#1E3A5F]">Appointment</span>
               </a>

               {/* Contact Button */}
               <a
                  href="/contact"
                  className="flex flex-col items-center justify-center flex-1 py-2 rounded-lg transition-all duration-200 hover:bg-gradient-to-b hover:from-[#D62828]/10 hover:to-[#E63946]/10"
               >
                  <div className="p-2 rounded-lg mb-1" style={{ background: "linear-gradient(135deg, #D62828, #E63946)" }}>
                     <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#1E3A5F]">Contact</span>
               </a>
            </div>
         </div>
      </header>
   );
};

export default Navbar;
