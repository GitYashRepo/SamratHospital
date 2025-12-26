"use client"


import { X, ZoomIn } from "lucide-react"
import { useState } from "react"

const GalleryPage = () => {
   const [selectedImage, setSelectedImage] = useState < string | null > (null)

   const galleryImages = [
      {
         category: "Facilities",
         images: [
            {
               id: 1,
               src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=400&fit=crop",
               title: "Modern Hospital Building",
            },
            {
               id: 2,
               src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500&h=400&fit=crop",
               title: "Patient Care Unit",
            },
            {
               id: 3,
               src: "https://images.unsplash.com/photo-1579154204601-01d3f2d751ff?w=500&h=400&fit=crop",
               title: "Emergency Department",
            },
            {
               id: 4,
               src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=400&fit=crop",
               title: "ICU Ward",
            },
            {
               id: 5,
               src: "https://images.unsplash.com/photo-1577720737804-35d1d2c0f06b?w=500&h=400&fit=crop",
               title: "Operation Theater",
            },
            {
               id: 6,
               src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=500&h=400&fit=crop",
               title: "Waiting Area",
            },
         ],
      },
      {
         category: "Medical Equipment",
         images: [
            {
               id: 7,
               src: "https://images.unsplash.com/photo-1576091160596-112ba8d25d1d?w=500&h=400&fit=crop",
               title: "Advanced CT Scanner",
            },
            {
               id: 8,
               src: "https://images.unsplash.com/photo-1578117345052-395b6efd4e41?w=500&h=400&fit=crop",
               title: "Ultrasound Machine",
            },
            {
               id: 9,
               src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500&h=400&fit=crop",
               title: "Patient Monitoring System",
            },
            {
               id: 10,
               src: "https://images.unsplash.com/photo-1585461295339-f9d3f7ae11dd?w=500&h=400&fit=crop",
               title: "Diagnostic Lab",
            },
            {
               id: 11,
               src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500&h=400&fit=crop",
               title: "MRI Machine",
            },
            {
               id: 12,
               src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=400&fit=crop",
               title: "Laboratory Equipment",
            },
         ],
      },
      {
         category: "Events & Activities",
         images: [
            {
               id: 13,
               src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
               title: "Medical Conference",
            },
            {
               id: 14,
               src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
               title: "Health Awareness Campaign",
            },
            {
               id: 15,
               src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
               title: "Staff Training Session",
            },
            {
               id: 16,
               src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
               title: "Community Outreach",
            },
            {
               id: 17,
               src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
               title: "Medical Seminar",
            },
            {
               id: 18,
               src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
               title: "Annual Celebration",
            },
         ],
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
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
                  <p className="text-xl text-gray-200 leading-relaxed">
                     Explore HealWell Medical Center's state-of-the-art facilities, advanced medical equipment, and community
                     events.
                  </p>
               </div>
            </div>
         </section>

         {/* Gallery Sections */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
               {galleryImages.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="mb-20 last:mb-0">
                     <div className="mb-12">
                        <h2 className="text-4xl font-bold text-[#1E3A5F] mb-2">{section.category}</h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-[#00A896] to-[#028090] rounded-full" />
                     </div>

                     {/* Image Grid */}
                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {section.images.map((image) => (
                           <div
                              key={image.id}
                              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
                              onClick={() => setSelectedImage(image.src)}
                           >
                              <img
                                 src={image.src || "/placeholder.svg"}
                                 alt={image.title}
                                 className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                              />

                              {/* Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                                 <ZoomIn className="w-12 h-12 text-white mb-4" />
                                 <p className="text-white font-semibold text-center px-4">{image.title}</p>
                              </div>

                              {/* Category Badge */}
                              <div className="absolute top-4 left-4">
                                 <span
                                    style={{ background: "rgba(0, 168, 150, 0.9)" }}
                                    className="px-3 py-1 rounded-full text-xs text-white font-semibold"
                                 >
                                    {section.category}
                                 </span>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </section>

         {/* Stats Section */}
         <section
            style={{
               background: "linear-gradient(to right, rgb(230, 244, 241), rgb(240, 249, 248))",
            }}
            className="py-20"
         >
            <div className="container mx-auto px-6">
               <div className="grid md:grid-cols-4 gap-8 text-center">
                  <div>
                     <p className="text-5xl font-bold text-[#00A896] mb-2">15+</p>
                     <p className="text-gray-600 font-medium">Modern Departments</p>
                  </div>

                  <div>
                     <p className="text-5xl font-bold text-[#F77F00] mb-2">50+</p>
                     <p className="text-gray-600 font-medium">Advanced Equipment</p>
                  </div>

                  <div>
                     <p className="text-5xl font-bold text-[#1E3A5F] mb-2">100%</p>
                     <p className="text-gray-600 font-medium">Digital Systems</p>
                  </div>

                  <div>
                     <p className="text-5xl font-bold text-[#D62828] mb-2">24/7</p>
                     <p className="text-gray-600 font-medium">Emergency Services</p>
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
               <h2 className="text-4xl font-bold mb-6">Experience HealWell in Person</h2>
               <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Visit us today to see our state-of-the-art facilities and meet our dedicated healthcare team.
               </p>
               <button className="bg-white text-[#00A896] hover:bg-gray-100 px-8 py-4 rounded-full text-base font-medium shadow-lg hover:shadow-xl transition-all">
                  Book a Tour
               </button>
            </div>
         </section>

         {/* Lightbox Modal */}
         {selectedImage && (
            <div
               className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
               onClick={() => setSelectedImage(null)}
            >
               <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                  <img
                     src={selectedImage || "/placeholder.svg"}
                     alt="Gallery preview"
                     className="w-full h-auto rounded-2xl shadow-2xl"
                  />

                  {/* Close Button */}
                  <button
                     onClick={() => setSelectedImage(null)}
                     className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white transition-colors backdrop-blur-sm"
                  >
                     <X className="w-6 h-6" />
                  </button>
               </div>
            </div>
         )}
      </div>
   )
}

export default GalleryPage
