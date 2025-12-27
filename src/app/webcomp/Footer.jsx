import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Heart, ArrowRight } from "lucide-react";

const Footer = () => {
   return (
      <footer className="relative overflow-hidden">
         {/* Newsletter Section */}
         <div className="bg-gradient-to-r from-[#00A896] to-[#028090] py-12">
            <div className="mx-auto px-12">
               <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                     <h3 className="text-xl font-bold text-white mb-1">Subscribe to Our Newsletter</h3>
                     <p className="text-white/80 text-sm">Get health tips and updates delivered to your whatsapp</p>
                  </div>
                  <div className="flex items-center gap-3 w-full md:w-auto">
                     <input
                        type="text"
                        placeholder="Enter your phone number"
                        className="flex-1 md:w-72 h-12 px-5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                     />
                     <button className="h-12 px-6 bg-[#F77F00] hover:bg-[#E76F00] text-white font-medium rounded-full transition-colors flex items-center gap-2 shadow-lg">
                        Subscribe
                        <ArrowRight className="w-4 h-4" />
                     </button>
                  </div>
               </div>
            </div>
         </div>

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
                        <div className="w-12 h-12 bg-gradient-to-br from-[#00A896] to-[#028090] rounded-xl flex items-center justify-center shadow-lg">
                           <span className="text-white font-bold text-xl">H</span>
                        </div>
                        <div>
                           <h3 className="text-lg font-bold text-white">Samrat Hospital</h3>
                           <p className="text-[9px] text-[#7DD3C0] uppercase font-semibold">Pain & Multi-speciality</p>
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
                        <li><a href="#" className="text-sm text-gray-300 hover:text-[#7DD3C0] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />About Us</a></li>
                        <li><a href="#" className="text-sm text-gray-300 hover:text-[#7DD3C0] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />Our Services</a></li>
                        <li><a href="#" className="text-sm text-gray-300 hover:text-[#7DD3C0] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />Meet Our Doctors</a></li>
                        <li><a href="#" className="text-sm text-gray-300 hover:text-[#7DD3C0] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />Departments</a></li>
                        <li><a href="#" className="text-sm text-gray-300 hover:text-[#7DD3C0] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />Patient Testimonials</a></li>
                        {/* <li><a href="#" className="text-sm text-gray-300 hover:text-[#7DD3C0] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />Careers</a></li> */}
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
                        <li><a href="#" className="text-sm text-gray-300 hover:text-[#7DD3C0] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />Women's Health</a></li>
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
                           <a href="tel:+1234567890" className="text-sm text-gray-300 hover:text-[#7DD3C0] transition-colors">+1 (234) 567-890</a>
                        </li>
                        <li className="flex items-center gap-3">
                           <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                              <Mail className="w-4 h-4 text-[#FCBF49]" />
                           </div>
                           <a href="mailto:info@Samrat Hospital.com" className="text-sm text-gray-300 hover:text-[#7DD3C0] transition-colors">info@samrathospital.com</a>
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
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                     <span>Made with</span>
                     <Heart className="w-3 h-3 text-[#D62828] fill-current" />
                     <span>by <a href="https://www.webtechware.in"><span className="font-bold">WebTechWare</span></a></span>
                  </div>
                  <div className="flex items-center gap-6">
                     <a href="#" className="text-xs text-gray-400 hover:text-[#7DD3C0] transition-colors">Privacy Policy</a>
                     <a href="#" className="text-xs text-gray-400 hover:text-[#7DD3C0] transition-colors">Terms of Service</a>
                     <a href="#" className="text-xs text-gray-400 hover:text-[#7DD3C0] transition-colors">HIPAA Compliance</a>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
