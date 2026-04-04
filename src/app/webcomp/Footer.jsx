import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, LogIn, ArrowRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
   return (
      <footer className="relative overflow-hidden">
         {/* Main Footer */}
         <div className="bg-[#1E3A5F] text-white py-16 relative">
            <div className="absolute inset-0 opacity-5">
               <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-white" />
               <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border border-white" />
               <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full border border-white" />
            </div>

            <div className="mx-auto px-12 relative">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  {/* About */}
                  <div>
                     <div className="flex items-center gap-3 mb-6">
                        <img src="/logo.png" alt="Samrat Hospital Logo" className="w-12 h-12 rounded-full" />
                        <div className="flex flex-col">
                           <h3 className="text-lg font-bold text-white">Samrat Hospital</h3>
                           <p className="flex justify-between text-[9px] text-[#00A896] uppercase font-semibold"><span>P</span><span>A</span><span>I</span><span>N</span><span>  </span><span>&</span><span>  </span><span>M</span><span>U</span><span>L</span><span>T</span><span>I</span><span>-</span><span>S</span><span>P</span><span>E</span><span>C</span><span>I</span><span>A</span><span>L</span><span>I</span><span>T</span><span>Y</span></p>
                        </div>
                     </div>
                     <p className="text-sm text-gray-300 leading-relaxed mb-6">
                        Providing compassionate healthcare with excellence since 2020. Our commitment is to your well-being and recovery.
                     </p>
                     <div className="flex items-center gap-2">
                        <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#00A896] rounded-lg flex items-center justify-center transition-colors">
                           <Facebook className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#00A896] rounded-lg flex items-center justify-center transition-colors">
                           <Twitter className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#00A896] rounded-lg flex items-center justify-center transition-colors">
                           <Instagram className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#00A896] rounded-lg flex items-center justify-center transition-colors">
                           <Linkedin className="w-4 h-4" />
                        </a>
                     </div>
                  </div>

                  {/* Quick Links */}
                  <div>
                     <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                        <span className="w-8 h-0.5 bg-[#F77F00]" />
                        Quick Links
                     </h4>
                     <ul className="space-y-3">
                        <li><a href="/about" className="text-sm text-gray-300 hover:text-[#7DD3C0] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />About Us</a></li>
                        <li><a href="/services" className="text-sm text-gray-300 hover:text-[#7DD3C0] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />Our Services</a></li>
                        <li><a href="/doctors" className="text-sm text-gray-300 hover:text-[#7DD3C0] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />Meet Our Doctors</a></li>
                        <li><a href="/departments" className="text-sm text-gray-300 hover:text-[#7DD3C0] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />Departments</a></li>
                        <li><a href="/testimonials" className="text-sm text-gray-300 hover:text-[#7DD3C0] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />Patient Testimonials</a></li>
                        {/* Staff Login — separator */}
                        <li className="pt-3 mt-1 border-t border-white/10">
                           <Link
                              href="/login"
                              className="text-sm font-bold text-[#00A896] hover:text-[#7DD3C0] transition-colors flex items-center gap-2 group uppercase tracking-widest"
                           >
                              <LogIn className="w-4 h-4" />
                              Staff Login
                           </Link>
                        </li>
                     </ul>
                  </div>

                  {/* Services */}
                  <div>
                     <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                        <span className="w-8 h-0.5 bg-[#00A896]" />
                        Our Services
                     </h4>
                     <ul className="space-y-3">
                        <li><a href="#" className="text-sm text-gray-300 hover:text-[#7DD3C0] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />Emergency Care</a></li>
                        <li><a href="#" className="text-sm text-gray-300 hover:text-[#7DD3C0] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />Cardiology</a></li>
                        <li><a href="#" className="text-sm text-gray-300 hover:text-[#7DD3C0] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />Orthopedics</a></li>
                        <li><a href="#" className="text-sm text-gray-300 hover:text-[#7DD3C0] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />Pediatrics</a></li>
                        <li><a href="#" className="text-sm text-gray-300 hover:text-[#7DD3C0] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />Neurology</a></li>
                        <li><a href="#" className="text-sm text-gray-300 hover:text-[#7DD3C0] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />Women&apos;s Health</a></li>
                     </ul>
                  </div>

                  {/* Contact Info */}
                  <div>
                     <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                        <span className="w-8 h-0.5 bg-[#FCBF49]" />
                        Contact Us
                     </h4>
                     <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                           <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                              <MapPin className="w-4 h-4 text-[#F77F00]" />
                           </div>
                           <span className="text-sm text-gray-300">AZAD CHOK, Anand Nagar, Shanti Nagar, <br /> Rewari, Haryana, 123401</span>
                        </li>
                        <li className="flex items-center gap-3">
                           <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                              <Phone className="w-4 h-4 text-[#00A896]" />
                           </div>
                           <a href="tel:+919053744402" className="text-sm text-gray-300 hover:text-[#7DD3C0] transition-colors">+91 9053744402</a>
                        </li>
                        <li className="flex items-center gap-3">
                           <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                              <Mail className="w-4 h-4 text-[#FCBF49]" />
                           </div>
                           <a href="mailto:samrathospitalrewari@gmail.com" className="text-sm text-gray-300 hover:text-[#7DD3C0] transition-colors">samrathospitalrewari@gmail.com</a>
                        </li>
                        <li className="flex items-start gap-3">
                           <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                              <Clock className="w-4 h-4 text-[#D62828]" />
                           </div>
                           <div className="text-sm text-gray-300">
                              <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
                              <p>Sat: 9:00 AM - 5:00 PM</p>
                              <p className="text-[#D62828] font-medium">Emergency: 24/7</p>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>

         {/* Bottom Bar */}
         <div className="bg-[#152C47] py-5 pb-24 md:pb-2">
            <div className="mx-auto px-6">
               <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-gray-400">
                     © 2026 Samrat Hospital Medical Center. All rights reserved.
                  </p>

                  <a href="http://www.webtechware.in" target="_blank" rel="noopener noreferrer">
                     <div className="flex items-center gap-1 text-sm text-gray-400">
                        <span>Developed by <span className="font-bold">WebTechWare</span></span>
                     </div>
                  </a>

                  <div className="flex items-center gap-6">
                     <a href="/privacy-policy" className="text-xs text-gray-400 hover:text-[#7DD3C0] transition-colors">Privacy Policy</a>
                     <a href="/terms-of-service" className="text-xs text-gray-400 hover:text-[#7DD3C0] transition-colors">Terms of Service</a>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
