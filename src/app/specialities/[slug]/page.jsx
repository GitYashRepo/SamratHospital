"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { Activity, ShieldPlus, Stethoscope, Syringe, Users, Bone, Brain, Baby, Heart, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const specialtyData = {
   "anaesthesiology": {
      name: "Anaesthesiology",
      title: "Advanced Anaesthesiology Services",
      icon: Activity,
      color: "from-[#D62828] to-[#F77F00]",
      image: "/hospitalimg.webp",
      overview: "Our Anaesthesiology department is dedicated to providing state-of-the-art pain management and anesthesia services. Our team of highly trained professionals ensures the utmost safety, comfort, and care for every patient undergoing surgical, diagnostic, or therapeutic procedures.",
      longDescription1: "The field of anaesthesiology has evolved remarkably over the decades, transitioning from basic pain relief to comprehensive perioperative medicine. At Samrat Hospital, our Department of Anaesthesiology stands at the forefront of this evolution. We are equipped with the latest monitoring technology and utilize evidence-based protocols to deliver personalized care. Our approach is holistic, beginning with a thorough preoperative assessment to understand each patient's unique medical history and concerns. This allows us to tailor an anesthetic plan that minimizes risks and optimizes outcomes.",
      longDescription2: "During the intraoperative phase, our vigilance is unmatched. Continuous monitoring of vital signs, including advanced hemodynamics and neurological status, is standard practice. We utilize multimodal analgesia techniques to reduce reliance on opioids, thereby facilitating a smoother and faster recovery. Postoperatively, our dedicated Acute Pain Management Service ensures that patients remain comfortable, promoting early mobilization and reducing hospital stay lengths. We believe that effective pain management is a fundamental human right and a critical component of the healing process.",
      services: [
         { name: "General Anesthesia", desc: "Comprehensive medically induced coma for major surgeries, ensuring complete unconsciousness and lack of sensation." },
         { name: "Regional Anesthesia", desc: "Targeted numbing of a large part of the body, such as from the waist down, using epidural or spinal techniques." },
         { name: "Local Anesthesia", desc: "Numbing a small, specific area for minor procedures." },
         { name: "Conscious Sedation", desc: "Providing relaxation and pain relief while allowing the patient to remain awake and cooperative." },
         { name: "Acute Pain Management", desc: "Specialized postoperative care to minimize discomfort and accelerate recovery." },
         { name: "Preoperative Assessment", desc: "Thorough medical evaluation to determine the safest anesthetic plan." },
         { name: "Labor Analgesia", desc: "Providing pain relief during childbirth, including epidurals." },
         { name: "Critical Care Support", desc: "Assisting in the management of critically ill patients in the ICU." }
      ],
      technology: [
         "Advanced Anesthesia Workstations with Integrated Monitoring",
         "Ultrasound-Guided Regional Anesthesia Equipment",
         "Target Controlled Infusion (TCI) Pumps",
         "Continuous Cardiac Output Monitoring",
         "Bispectral Index (BIS) Monitoring for Depth of Anesthesia",
         "Fiberoptic Intubation Scopes for Difficult Airways"
      ],
      faqs: [
         { q: "Is anesthesia safe?", a: "Yes, modern anesthesia is extremely safe. Our anesthesiologists use advanced monitoring and tailor the anesthetic plan to your specific health profile to minimize any risks." },
         { q: "Will I feel any pain during surgery?", a: "No. The primary goal of anesthesia is to ensure you are completely pain-free during the procedure. We also provide comprehensive postoperative pain management." },
         { q: "How long does it take to recover from anesthesia?", a: "Recovery time varies depending on the type of anesthesia and the procedure. You may feel drowsy for a few hours. Your anesthesiologist will discuss what to expect." },
         { q: "Can I eat before surgery?", a: "Generally, you will be instructed to fast (no food or drink) for a certain number of hours before your surgery to prevent complications such as aspiration. You will receive specific instructions prior to your procedure." }
      ]
   },
   "orthopaedic": {
      name: "Orthopaedic",
      title: "Comprehensive Orthopaedic Care",
      icon: Bone,
      color: "from-[#00A896] to-[#028090]",
      image: "/hospitalimg.webp",
      overview: "Our Orthopaedic department offers expert diagnosis and treatment for all musculoskeletal conditions. From complex joint replacements to sports injuries and trauma, our specialists use advanced techniques to restore mobility and improve your quality of life.",
      longDescription1: "Musculoskeletal health is vital for an active and fulfilling life. The Orthopaedic Department at Samrat Hospital is a center of excellence dedicated to the prevention, diagnosis, and treatment of disorders of the bones, joints, ligaments, tendons, and muscles. Our team comprises highly skilled orthopedic surgeons, sports medicine specialists, and dedicated rehabilitation professionals who work collaboratively to deliver comprehensive care. We treat a wide spectrum of conditions, ranging from acute fractures and sports-related injuries to chronic degenerative diseases like osteoarthritis and rheumatoid arthritis. Our patient-centric philosophy ensures that every treatment plan is customized to meet the specific functional goals of the individual.",
      longDescription2: "We pride ourselves on offering the latest advancements in orthopedic surgery, including minimally invasive techniques, arthroscopy, and computer-assisted joint replacement. These innovative approaches translate to smaller incisions, less tissue damage, reduced postoperative pain, and faster recovery times for our patients. Furthermore, we emphasize the importance of non-surgical interventions whenever possible. Our robust physical therapy and rehabilitation programs are integral to the recovery process, helping patients regain strength, flexibility, and independence. Whether you are an elite athlete aiming to return to play or an individual seeking relief from chronic joint pain, our Orthopaedic Department is committed to helping you move freely again.",
      services: [
         { name: "Total Joint Replacement", desc: "Advanced surgical procedures for hip, knee, and shoulder replacement to relieve pain and restore function." },
         { name: "Arthroscopic Surgery", desc: "Minimally invasive procedures to diagnose and treat joint problems using a small camera and specialized instruments." },
         { name: "Spine Surgery", desc: "Treatment for herniated discs, spinal stenosis, and spinal deformities, including minimally invasive spine surgery." },
         { name: "Sports Medicine", desc: "Comprehensive care for sports-related injuries, including ligament tears, tendonitis, and sprains." },
         { name: "Trauma and Fracture Care", desc: "Expert management of complex fractures and orthopedic trauma." },
         { name: "Pediatric Orthopaedics", desc: "Specialized care for musculoskeletal conditions in children, such as scoliosis and clubfoot." },
         { name: "Hand and Upper Extremity Surgery", desc: "Treatment for conditions affecting the hand, wrist, elbow, and shoulder." },
         { name: "Foot and Ankle Surgery", desc: "Care for a variety of foot and ankle problems, including bunions, flat feet, and Achilles tendon injuries." }
      ],
      technology: [
         "Computer-Assisted Navigation for Joint Replacement",
         "High-Definition Arthroscopy Systems",
         "Advanced Fluoroscopy for Intraoperative Imaging",
         "Custom-Fit Orthotics and Prosthetics Lab",
         "Dedicated Orthopedic Operating Suites",
         "Comprehensive Physical Therapy and Rehabilitation Center"
      ],
      faqs: [
         { q: "How do I know if I need a joint replacement?", a: "Joint replacement is typically considered when conservative treatments (like medication, physical therapy, and injections) no longer relieve severe joint pain that interferes with your daily activities." },
         { q: "What is the recovery time for arthroscopic surgery?", a: "Recovery is generally much faster than open surgery. Many patients return to normal activities within a few weeks, though this depends on the specific procedure performed." },
         { q: "Do you treat sports injuries?", a: "Yes, our sports medicine specialists are experienced in treating a wide range of athletic injuries and can help you safely return to your sport." },
         { q: "What should I expect during my first orthopedic consultation?", a: "Your doctor will review your medical history, perform a physical examination, and may order diagnostic imaging (like X-rays or MRI) to accurately diagnose your condition and discuss treatment options." }
      ]
   },
   "general-medicine": {
      name: "General Medicine",
      title: "Expert General Medicine & Primary Care",
      icon: Stethoscope,
      color: "from-[#1E3A5F] to-[#2B4A6F]",
      image: "/hospitalimg.webp",
      overview: "Our General Medicine department is your first line of defense for health and wellness. We provide comprehensive primary care, chronic disease management, and preventive services to keep you and your family healthy.",
      longDescription1: "The Department of General Medicine at Samrat Hospital serves as the cornerstone of our healthcare delivery system. Our physicians are highly trained diagnosticians who specialize in the comprehensive care of adult patients. We focus on the prevention, diagnosis, and non-surgical treatment of a vast array of diseases. Our approach is holistic, treating the patient as a whole rather than focusing solely on isolated organ systems. We understand that many medical conditions are complex and interrelated, requiring a broad perspective and meticulous attention to detail. From managing complex chronic illnesses to addressing acute medical issues, our general medicine team is equipped to handle the diverse healthcare needs of our community.",
      longDescription2: "A significant component of our practice is dedicated to preventive medicine. We believe that proactive health management is the key to longevity and vitality. This includes routine health screenings, vaccinations, lifestyle counseling, and early detection of potential health risks. Furthermore, our general physicians act as central coordinators of your healthcare journey. Should you require specialized care, our doctors collaborate seamlessly with other specialists within the hospital to ensure that your treatment is integrated, comprehensive, and tailored to your specific needs. We strive to build long-lasting relationships with our patients based on trust, open communication, and mutual respect.",
      services: [
         { name: "Preventive Health Screenings", desc: "Comprehensive check-ups to detect health issues early and promote overall wellness." },
         { name: "Chronic Disease Management", desc: "Expert care for conditions like diabetes, hypertension, asthma, and heart disease." },
         { name: "Infectious Disease Treatment", desc: "Diagnosis and management of a wide range of bacterial, viral, and fungal infections." },
         { name: "Adult Immunizations", desc: "Providing necessary vaccines to protect against preventable diseases." },
         { name: "Geriatric Care", desc: "Specialized medical care addressing the unique health needs of older adults." },
         { name: "Pre-operative Medical Evaluations", desc: "Assessing patients' medical readiness for surgery." },
         { name: "Lifestyle and Nutrition Counseling", desc: "Guidance on diet, exercise, and healthy habits to prevent disease." },
         { name: "Unexplained Symptom Diagnosis", desc: "Expert investigation of complex or vague symptoms to determine the underlying cause." }
      ],
      technology: [
         "Advanced Diagnostic Laboratory Services",
         "Comprehensive Imaging Capabilities (X-ray, Ultrasound, CT, MRI)",
         "ECG and Cardiovascular Monitoring",
         "Pulmonary Function Testing",
         "Electronic Health Records for Seamless Care Coordination",
         "Point-of-Care Testing for Rapid Results"
      ],
      faqs: [
         { q: "What does a General Medicine doctor do?", a: "General Medicine doctors (Internists) provide comprehensive primary care for adults. They diagnose and treat a wide variety of illnesses, manage chronic conditions, and provide preventive care." },
         { q: "How often should I get a routine check-up?", a: "Generally, healthy adults should have a routine check-up once a year. However, if you have chronic conditions, you may need to see your doctor more frequently." },
         { q: "Do you treat children?", a: "General Medicine typically focuses on adult care. We have a dedicated Pediatrics department for the healthcare needs of children and adolescents." },
         { q: "Can a General Medicine doctor manage my diabetes and high blood pressure?", a: "Yes, managing chronic conditions like diabetes and hypertension is a core component of General Medicine." }
      ]
   },
   "general-surgeon": {
      name: "General Surgeon",
      title: "Advanced General Surgery",
      icon: Activity,
      color: "from-[#7B2D8E] to-[#9D4EDD]",
      image: "/hospitalimg.webp",
      overview: "Our General Surgery department provides a wide range of surgical interventions, utilizing minimally invasive techniques whenever possible to ensure faster recovery times, less pain, and optimal surgical outcomes.",
      longDescription1: "The Department of General Surgery at Samrat Hospital is committed to delivering exceptional surgical care with a focus on patient safety, innovation, and compassionate service. Our team of highly experienced surgeons is proficient in a broad spectrum of surgical procedures, ranging from routine appendectomies and hernia repairs to complex gastrointestinal and oncological surgeries. We understand that undergoing surgery can be a stressful experience, which is why we prioritize clear communication, thorough preoperative education, and comprehensive postoperative support. Our multidisciplinary approach ensures that each patient receives a meticulously planned surgical strategy tailored to their specific diagnosis and overall health status.",
      longDescription2: "A hallmark of our department is our expertise in minimally invasive surgery (laparoscopy). By using specialized instruments and small incisions, we are able to perform complex procedures with significantly less trauma to the body. This translates to numerous benefits for our patients, including reduced postoperative pain, shorter hospital stays, minimal scarring, and a much faster return to normal daily activities. Our state-of-the-art operating theaters are equipped with the latest surgical technology, allowing our surgeons to operate with unparalleled precision and safety. We are dedicated to continuous quality improvement and actively participate in surgical research to bring the best possible care to our community.",
      services: [
         { name: "Laparoscopic Surgery", desc: "Minimally invasive techniques for procedures like gallbladder removal and appendectomy." },
         { name: "Hernia Repair", desc: "Surgical correction of inguinal, umbilical, and incisional hernias, often using mesh and laparoscopic methods." },
         { name: "Gastrointestinal Surgery", desc: "Treatment of diseases of the stomach, intestines, colon, and rectum." },
         { name: "Breast Surgery", desc: "Surgical management of benign and malignant breast diseases." },
         { name: "Thyroid and Endocrine Surgery", desc: "Surgical treatment of the thyroid, parathyroid, and other endocrine glands." },
         { name: "Colorectal Surgery", desc: "Specialized care for disorders of the colon, rectum, and anus." },
         { name: "Trauma Surgery", desc: "Emergency surgical intervention for severe injuries." },
         { name: "Minor Surgical Procedures", desc: "Excision of cysts, lipomas, and other skin lesions." }
      ],
      technology: [
         "Advanced Laparoscopic Towers with High-Definition Imaging",
         "Harmonic Scalpel and Advanced Energy Devices for Tissue Sealing",
         "State-of-the-Art Operating Theaters with HEPA Filtration",
         "Intraoperative Ultrasound Capabilities",
         "Advanced Surgical Stapling Devices",
         "Dedicated Post-Anesthesia Care Unit (PACU)"
      ],
      faqs: [
         { q: "What is laparoscopic surgery?", a: "Laparoscopic surgery is a minimally invasive technique where the surgeon uses small incisions and a camera to operate. It usually results in less pain and a faster recovery compared to traditional open surgery." },
         { q: "How long will I be in the hospital after surgery?", a: "Hospital stay depends on the type of surgery. Many laparoscopic procedures are performed on an outpatient basis (you go home the same day), while others may require an overnight stay or longer." },
         { q: "How do I prepare for my surgery?", a: "Your surgeon and our preoperative team will provide you with specific instructions, which typically include fasting for a certain period before the surgery and adjusting certain medications." },
         { q: "Will I have a large scar?", a: "If you undergo laparoscopic surgery, your scars will be very small. For open surgeries, the surgeon will make the incision as small and cosmetically appealing as possible." }
      ]
   },
   "obs-and-gynae": {
      name: "Obs and Gynae",
      title: "Women's Health & Maternity Care",
      icon: Baby,
      color: "from-[#F77F00] to-[#D62828]",
      image: "/hospitalimg.webp",
      overview: "Our Obstetrics and Gynecology department provides comprehensive healthcare for women at every stage of life. From routine wellness exams to high-risk pregnancies and complex gynecological surgeries, we offer expert, compassionate care.",
      longDescription1: "The Department of Obstetrics and Gynecology at Samrat Hospital is dedicated to empowering women through comprehensive healthcare services. We understand that a woman's healthcare needs evolve significantly from adolescence through menopause and beyond. Our team of compassionate and highly skilled obstetricians and gynecologists provides personalized care that addresses these unique physical and emotional needs. We offer a welcoming and supportive environment where women can comfortably discuss their health concerns and receive expert guidance. Our commitment extends beyond treating illness; we emphasize preventive care, health education, and empowering our patients to make informed decisions about their well-being.",
      longDescription2: "Our obstetrics service is renowned for providing exceptional care for both routine and high-risk pregnancies. We are committed to ensuring a safe, healthy, and joyful birthing experience for every mother and child. Our advanced labor and delivery suites are designed for comfort and safety, supported by a state-of-the-art Neonatal Intensive Care Unit (NICU). In gynecology, we offer advanced diagnostic and treatment options for a wide array of conditions, including menstrual disorders, endometriosis, fibroids, and gynecologic cancers. We specialize in minimally invasive gynecological surgery, which offers women faster recovery times and less postoperative discomfort. We are your lifelong partners in health.",
      services: [
         { name: "Prenatal Care", desc: "Comprehensive monitoring and care throughout pregnancy to ensure the health of mother and baby." },
         { name: "High-Risk Pregnancy Management", desc: "Specialized care for pregnancies complicated by medical conditions or other risk factors." },
         { name: "Labor and Delivery Services", desc: "Expert support and medical care during childbirth, including cesarean sections if necessary." },
         { name: "Routine Gynecological Exams", desc: "Annual check-ups, Pap smears, and breast examinations for preventive health." },
         { name: "Minimally Invasive Gynecological Surgery", desc: "Laparoscopic and hysteroscopic procedures for conditions like fibroids and endometriosis." },
         { name: "Family Planning and Contraception", desc: "Counseling and provision of various contraceptive methods." },
         { name: "Menopause Management", desc: "Expert care and symptom relief during the menopausal transition." },
         { name: "Infertility Evaluation", desc: "Initial assessment and guidance for couples struggling to conceive." }
      ],
      technology: [
         "Advanced 3D/4D Obstetric Ultrasound",
         "Fetal Heart Rate Monitoring Systems",
         "Fully Equipped Labor, Delivery, and Recovery (LDR) Rooms",
         "High-Definition Laparoscopy Equipment for Gynecological Surgery",
         "Colposcopy and Cervical Pathology Screening",
         "Bone Densitometry (DEXA) for Osteoporosis Screening"
      ],
      faqs: [
         { q: "When should I schedule my first prenatal visit?", a: "It is generally recommended to schedule your first prenatal visit around 8 weeks after your last menstrual period." },
         { q: "What is a high-risk pregnancy?", a: "A pregnancy is considered high-risk if there are potential complications that could affect the mother, the baby, or both. This could be due to age, pre-existing health conditions, or issues that arise during pregnancy." },
         { q: "Do you offer minimally invasive hysterectomies?", a: "Yes, our surgeons are highly experienced in performing minimally invasive (laparoscopic) hysterectomies, which typically involve a much shorter recovery time than traditional open surgery." },
         { q: "What happens during an annual well-woman exam?", a: "The exam usually includes a discussion of your medical history, a physical exam (including a breast and pelvic exam), a Pap smear (if indicated), and counseling on preventive care and family planning." }
      ]
   },
   "critical-care": {
      name: "Anaesthesiology /Critical Care",
      title: "Intensive Critical Care",
      icon: Heart,
      color: "from-[#028090] to-[#00A896]",
      image: "/hospitalimg.webp",
      overview: "Our Critical Care unit provides round-the-clock, intensive monitoring and life support for patients with severe or life-threatening illnesses and injuries. Our multidisciplinary team is dedicated to giving the highest level of care when it matters most.",
      longDescription1: "The Intensive Care Unit (ICU) at Samrat Hospital represents the pinnacle of medical monitoring and intervention. Our Critical Care Medicine department is staffed by a dedicated team of intensivists, specially trained ICU nurses, respiratory therapists, and clinical pharmacists who work collaboratively 24/7. We care for patients facing life-threatening conditions such as severe infections (sepsis), major trauma, acute respiratory failure, complex postoperative complications, and multiorgan failure. The ICU environment is meticulously designed to provide constant, intense observation and immediate therapeutic responses. We utilize advanced life support technologies to stabilize patients and support failing organ systems, giving the body the crucial time it needs to heal.",
      longDescription2: "Beyond the technology, we recognize that critical illness is a profoundly stressful experience for both the patient and their loved ones. Our approach to critical care is deeply compassionate and family-centered. We prioritize clear, frequent, and honest communication with family members, keeping them informed about the patient's condition, the rationale behind treatments, and the anticipated prognosis. We hold regular family meetings to discuss care goals and ensure that decisions align with the patient's values. Furthermore, we are committed to minimizing the long-term physical and psychological impacts of critical illness (Post-Intensive Care Syndrome) by implementing early mobility programs and cognitive support strategies within the ICU.",
      services: [
         { name: "Continuous Hemodynamic Monitoring", desc: "Advanced tracking of heart function, blood pressure, and fluid status." },
         { name: "Mechanical Ventilation", desc: "Life-saving respiratory support for patients unable to breathe adequately on their own." },
         { name: "Management of Sepsis and Shock", desc: "Aggressive, protocol-driven treatment for overwhelming infections and cardiovascular collapse." },
         { name: "Post-Operative Intensive Care", desc: "Specialized monitoring and support following major or complex surgeries." },
         { name: "Trauma Resuscitation", desc: "Immediate, intensive care for patients with severe, multiple injuries." },
         { name: "Renal Replacement Therapy", desc: "Continuous dialysis modalities for patients with acute kidney injury in the ICU." },
         { name: "Nutritional Support", desc: "Specialized enteral and parenteral nutrition for critically ill patients." },
         { name: "Multidisciplinary Care Coordination", desc: "Seamless collaboration with all medical and surgical specialties." }
      ],
      technology: [
         "Advanced Multiparameter Patient Monitors at Every Bed",
         "State-of-the-Art Microprocessor-Controlled Ventilators",
         "Continuous Renal Replacement Therapy (CRRT) Machines",
         "Arterial Blood Gas (ABG) Analyzers for Rapid Results",
         "Bedside Ultrasound and Echocardiography",
         "Centralized Monitoring Stations with Alert Systems"
      ],
      faqs: [
         { q: "What is an Intensivist?", a: "An intensivist is a physician who specializes in the care of critically ill patients, typically working exclusively in the Intensive Care Unit (ICU)." },
         { q: "Why are visiting hours restricted in the ICU?", a: "Visiting hours are carefully managed to ensure patients receive adequate rest and that the medical team can perform necessary procedures uninterrupted. We try to balance this with the family's need to be present." },
         { q: "What does it mean when a patient is on a ventilator?", a: "A ventilator is a machine that helps a patient breathe when they are unable to do so adequately on their own due to illness, injury, or heavy sedation." },
         { q: "How is pain managed in the ICU?", a: "Pain management is a high priority. We use a variety of medications and continuous monitoring to assess and control pain, keeping the patient as comfortable as possible while ensuring safety." }
      ]
   },
   "neuro-surgery": {
      name: "Neuro Surgery",
      title: "Expert Neurological Surgery",
      icon: Brain,
      color: "from-[#7B2D8E] to-[#9D4EDD]",
      image: "/hospitalimg.webp",
      overview: "Our Neurosurgery department specializes in the surgical treatment of complex conditions affecting the brain, spinal cord, and peripheral nerves. We utilize advanced neuro-navigation and microsurgical techniques to ensure precision and optimal outcomes.",
      longDescription1: "Neurosurgery demands unparalleled precision, expertise, and technological support. The Department of Neurosurgery at Samrat Hospital is a premier center dedicated to providing world-class surgical care for patients with neurological disorders. Our team of highly trained neurosurgeons possesses extensive experience in managing a wide array of complex conditions, including brain tumors, cerebrovascular diseases (such as aneurysms and stroke), spinal cord disorders, and traumatic brain injuries. We approach each case with meticulous planning, utilizing advanced preoperative imaging and 3D modeling to map the intricate anatomy of the nervous system and determine the safest, most effective surgical trajectory.",
      longDescription2: "We are heavily invested in the latest neurosurgical technologies that enhance surgical precision and patient safety. Our operating theaters are equipped with advanced neuro-navigation systems, high-definition operating microscopes, and intraoperative neurophysiological monitoring. This technology allows our surgeons to operate with millimeter accuracy, removing diseased tissue while preserving critical neurological functions. We are also leaders in minimally invasive spine surgery, offering solutions that significantly reduce recovery time and postoperative pain compared to traditional open spine procedures. From the initial consultation through surgery and comprehensive neuro-rehabilitation, our multidisciplinary team provides continuous, compassionate support.",
      services: [
         { name: "Brain Tumor Surgery", desc: "Expert removal of benign and malignant brain tumors using advanced microsurgical techniques." },
         { name: "Complex Spine Surgery", desc: "Treatment for spinal stenosis, herniated discs, spinal deformities, and spinal tumors." },
         { name: "Minimally Invasive Spine Surgery", desc: "Advanced techniques for spine conditions that minimize tissue damage and speed recovery." },
         { name: "Cerebrovascular Surgery", desc: "Surgical management of aneurysms, arteriovenous malformations (AVMs), and stroke." },
         { name: "Neurotrauma Care", desc: "Emergency surgical intervention for traumatic brain and spinal cord injuries." },
         { name: "Peripheral Nerve Surgery", desc: "Treatment for conditions like carpal tunnel syndrome and nerve injuries." },
         { name: "Pediatric Neurosurgery", desc: "Specialized care for neurological conditions in children, such as hydrocephalus." },
         { name: "Functional Neurosurgery", desc: "Procedures like Deep Brain Stimulation (DBS) for movement disorders." }
      ],
      technology: [
         "Image-Guided Neuro-Navigation Systems (Frameless Stereotaxy)",
         "High-Definition Operating Microscopes with Fluorescence",
         "Intraoperative Neurophysiological Monitoring (IONM)",
         "Cavitron Ultrasonic Surgical Aspirator (CUSA) for Tumor Removal",
         "Advanced Neuro-Endoscopy Equipment",
         "Dedicated Neuro-Intensive Care Unit (Neuro-ICU)"
      ],
      faqs: [
         { q: "What is minimally invasive spine surgery?", a: "This approach uses smaller incisions and specialized instruments to access the spine, causing less damage to surrounding muscles. This typically results in less pain and a faster recovery." },
         { q: "How long does it take to recover from brain surgery?", a: "Recovery varies widely depending on the type of surgery, the patient's overall health, and the specific condition being treated. It can range from a few weeks to several months." },
         { q: "What is neuro-navigation?", a: "Neuro-navigation is like a GPS system for the brain. It uses preoperative imaging (MRI/CT) to guide the surgeon's instruments in real-time during surgery, increasing precision and safety." },
         { q: "Will I need physical therapy after neurosurgery?", a: "Many patients require physical, occupational, or speech therapy after neurosurgery to help regain lost functions and maximize their recovery." }
      ]
   },
   "urology": {
      name: "Urology",
      title: "Advanced Urological Care",
      icon: Activity,
      color: "from-[#D62828] to-[#A31621]",
      image: "/hospitalimg.webp",
      overview: "Our Urology department provides comprehensive medical and surgical care for conditions affecting the male and female urinary tract, as well as the male reproductive system. We offer advanced, minimally invasive treatments for a wide range of urological issues.",
      longDescription1: "The Department of Urology at Samrat Hospital is dedicated to delivering expert, discreet, and compassionate care for a broad spectrum of urological conditions. Our highly skilled urologists are proficient in diagnosing and treating disorders of the kidneys, ureters, bladder, urethra, and male reproductive organs. We manage common issues such as urinary tract infections, kidney stones, and enlarged prostate (BPH), as well as complex conditions including urologic cancers (prostate, kidney, bladder) and male infertility. We recognize that urological problems can significantly impact a patient's quality of life and often involve sensitive topics; therefore, we prioritize patient comfort, privacy, and open communication throughout the treatment process.",
      longDescription2: "We are at the forefront of urological innovation, strongly emphasizing minimally invasive approaches. Our department utilizes advanced endourology and laparoscopy techniques to treat conditions with smaller incisions, less pain, and faster recovery times. We offer comprehensive management for kidney stones, utilizing laser lithotripsy to effectively break down and remove stones without open surgery. For benign prostatic hyperplasia (BPH), we provide a range of modern therapies to improve urinary symptoms. Our multidisciplinary approach ensures that patients with urologic cancers receive integrated, comprehensive treatment plans involving surgeons, oncologists, and specialized support staff, aimed at achieving the best possible oncological and functional outcomes.",
      services: [
         { name: "Kidney Stone Management", desc: "Comprehensive treatment including Extracorporeal Shock Wave Lithotripsy (ESWL) and laser lithotripsy." },
         { name: "Prostate Care (BPH)", desc: "Medical and minimally invasive surgical treatments for an enlarged prostate." },
         { name: "Urologic Oncology", desc: "Surgical management of cancers of the prostate, kidney, bladder, and testes." },
         { name: "Female Urology", desc: "Treatment for urinary incontinence, pelvic organ prolapse, and recurrent UTIs." },
         { name: "Male Infertility & Sexual Health", desc: "Evaluation and treatment of erectile dysfunction and male infertility issues." },
         { name: "Endourology", desc: "Minimally invasive procedures using scopes to treat conditions within the urinary tract." },
         { name: "Reconstructive Urology", desc: "Surgery to restore normal function to the urinary tract after injury or disease." },
         { name: "Pediatric Urology", desc: "Care for urological conditions in children, such as undescended testes and hypospadias." }
      ],
      technology: [
         "Holmium Laser for Kidney Stone Lithotripsy",
         "Flexible Digital Ureteroscopes",
         "Advanced Urodynamics Testing Equipment",
         "Transrectal Ultrasound (TRUS) for Prostate Biopsy",
         "Laparoscopic Surgical Equipment",
         "Extracorporeal Shock Wave Lithotripter (ESWL)"
      ],
      faqs: [
         { q: "What is the best treatment for kidney stones?", a: "Treatment depends on the size, location, and composition of the stone. Options range from conservative management (drinking water and pain relief) to minimally invasive procedures like laser lithotripsy or ESWL." },
         { q: "What are the symptoms of an enlarged prostate (BPH)?", a: "Common symptoms include frequent or urgent need to urinate, difficulty starting urination, weak urine stream, and the feeling of incomplete bladder emptying." },
         { q: "Is urinary incontinence a normal part of aging?", a: "While common, incontinence is not a normal or unavoidable part of aging. It is a medical condition that can often be effectively treated with medication, physical therapy, or minimally invasive surgery." },
         { q: "What should I expect during a prostate exam?", a: "A typical prostate exam involves a Digital Rectal Exam (DRE) where the doctor checks the size and consistency of the prostate, often accompanied by a Prostate-Specific Antigen (PSA) blood test." }
      ]
   },
   "emergency": {
      name: "Emergency",
      title: "24/7 Rapid Emergency Response",
      icon: Clock,
      color: "from-[#F77F00] to-[#FCBF49]",
      image: "/hospitalimg.webp",
      overview: "Our Emergency Department is open 24 hours a day, 7 days a week, ready to provide immediate, life-saving care for acute illnesses and severe injuries. Our rapid response teams are trained to handle critical situations with speed and expertise.",
      longDescription1: "When seconds count, the Emergency Department (ED) at Samrat Hospital is prepared. We provide immediate, comprehensive medical care for patients of all ages presenting with acute, life-threatening illnesses and injuries. Our ED is staffed 24/7 by board-certified emergency medicine physicians, highly trained emergency nurses, and specialized trauma technicians. We are equipped to handle everything from minor injuries to severe trauma, cardiac arrests, strokes, and complex medical emergencies. Our facility features a streamlined triage system designed to quickly assess the severity of each patient's condition, ensuring that the most critical cases receive immediate, life-saving intervention.",
      longDescription2: "Our Emergency Department is backed by the full resources of Samrat Hospital. We have immediate, round-the-clock access to advanced diagnostic imaging (CT, MRI, Ultrasound), a fully equipped laboratory, and specialized surgical and critical care teams ready to intervene at a moment's notice. We operate specific protocols for time-sensitive conditions; for example, our rapid response \"Code Stroke\" and \"Code STEMI\" (heart attack) teams are activated instantly to minimize tissue damage and save lives. We are dedicated to providing fast, effective, and compassionate care during what is often the most stressful moment in a patient's life, serving as the critical safety net for our community.",
      services: [
         { name: "Advanced Trauma Life Support", desc: "Immediate, specialized care for patients with severe, multiple injuries." },
         { name: "Cardiac Emergency Care", desc: "Rapid assessment and intervention for heart attacks, arrhythmias, and heart failure." },
         { name: "Stroke Protocol Activation", desc: "Fast-track diagnosis and treatment for suspected strokes to minimize brain damage." },
         { name: "Pediatric Emergency Care", desc: "Specialized care tailored to the unique physiological and emotional needs of children." },
         { name: "Orthopedic Emergencies", desc: "Immediate management of fractures, dislocations, and severe sprains." },
         { name: "Respiratory Emergencies", desc: "Treatment for severe asthma attacks, COPD exacerbations, and acute respiratory distress." },
         { name: "Toxicology and Poison Control", desc: "Management of overdoses and exposure to toxic substances." },
         { name: "Surgical Emergencies", desc: "Rapid evaluation for conditions requiring immediate surgery, such as appendicitis." }
      ],
      technology: [
         "Dedicated Resuscitation and Trauma Bays",
         "Immediate Access to 24/7 CT, MRI, and X-ray",
         "Point-of-Care Ultrasound for Rapid Diagnosis",
         "Stat Laboratory Services with Rapid Turnaround Times",
         "Advanced Cardiac Monitoring and Defibrillation Equipment",
         "Direct Communication Links with EMS and Ambulances"
      ],
      faqs: [
         { q: "When should I go to the Emergency Room?", a: "Go to the ER immediately for life-threatening conditions such as chest pain, difficulty breathing, severe bleeding, sudden weakness or numbness (signs of stroke), major trauma, or loss of consciousness." },
         { q: "What is triage?", a: "Triage is the process of prioritizing patients based on the severity of their condition. Patients with life-threatening emergencies are treated first, regardless of the order of arrival." },
         { q: "Do I need an appointment for the Emergency Room?", a: "No. The Emergency Department is open 24/7 and no appointment is necessary. Walk-ins and ambulance arrivals are accepted at all times." },
         { q: "How long will I have to wait?", a: "Wait times vary depending on the number of patients and the severity of their conditions. We strive to see every patient as quickly as possible, but critical emergencies will always take precedence." }
      ]
   },
   "interventional-pain": {
      name: "Interventional Pain",
      title: "Interventional Pain Management",
      icon: Activity,
      color: "from-[#00A896] to-[#028090]",
      image: "/hospitalimg.webp",
      overview: "Our Interventional Pain Department focuses on the diagnosis and treatment of chronic and acute pain disorders. We use advanced, minimally invasive techniques to pinpoint the source of pain and deliver targeted therapies to provide long-lasting relief.",
      longDescription1: "Chronic pain is a complex condition that can severely impact every aspect of a person's life, limiting mobility, disturbing sleep, and affecting mental well-being. The Interventional Pain Department at Samrat Hospital offers hope and advanced solutions for patients suffering from persistent pain. Our multidisciplinary team, led by fellowship-trained pain management specialists, focuses on accurately diagnosing the root cause of pain and implementing targeted, minimally invasive treatments. We treat a wide variety of conditions, including chronic back and neck pain, sciatica, arthritis, neuropathy, and complex regional pain syndrome (CRPS). Our goal is to reduce pain severity, improve physical function, and enhance the overall quality of life for our patients.",
      longDescription2: "Interventional pain management relies on precision medicine. We utilize advanced image guidance, such as fluoroscopy (real-time X-ray) and ultrasound, to precisely deliver medications or therapies directly to the specific nerves, joints, or tissues causing the pain. These minimally invasive procedures, which include epidural steroid injections, nerve blocks, and radiofrequency ablation, offer significant relief with minimal downtime, often serving as an effective alternative or stepping stone before considering major surgery. We view pain management comprehensively; our interventions are often integrated with physical therapy, medication optimization, and psychological support to ensure a holistic and durable approach to pain relief.",
      services: [
         { name: "Epidural Steroid Injections", desc: "Targeted anti-inflammatory injections to relieve pain from herniated discs and spinal stenosis." },
         { name: "Facet Joint Injections", desc: "Diagnostic and therapeutic injections for arthritis-related back and neck pain." },
         { name: "Radiofrequency Ablation (RFA)", desc: "A procedure that uses heat to temporarily turn off the nerve's ability to send pain signals." },
         { name: "Spinal Cord Stimulation", desc: "An implanted device that uses electrical pulses to mask pain signals before they reach the brain." },
         { name: "Major Joint Injections", desc: "Image-guided injections for arthritis pain in the knees, hips, and shoulders." },
         { name: "Sympathetic Nerve Blocks", desc: "Injections to diagnose and treat complex regional pain syndrome (CRPS) and neuropathic pain." },
         { name: "Trigger Point Injections", desc: "Treatment for painful knots in muscles (myofascial pain)." },
         { name: "Platelet-Rich Plasma (PRP) Therapy", desc: "Regenerative medicine using the patient's own blood platelets to promote healing in injured tissues." }
      ],
      technology: [
         "High-Resolution Fluoroscopy (C-Arm) for Precise Image Guidance",
         "Advanced Ultrasound Machines for Soft Tissue and Nerve Imaging",
         "Radiofrequency Ablation Generators",
         "Dedicated Fluoroscopy Suites",
         "Spinal Cord Stimulator Trial and Implantation Capabilities",
         "Regenerative Medicine Preparation Equipment"
      ],
      faqs: [
         { q: "What is interventional pain management?", a: "It's a specialized field of medicine that uses minimally invasive, image-guided procedures (like injections or nerve blocks) to diagnose and treat chronic pain directly at its source." },
         { q: "Are pain injections painful?", a: "We use local anesthesia to numb the skin and deeper tissues before the procedure to minimize discomfort. Most patients tolerate these procedures very well." },
         { q: "How long does the relief from an injection last?", a: "The duration of relief varies significantly among patients and depends on the specific condition and the type of injection. It can range from weeks to several months." },
         { q: "Is interventional pain management an alternative to surgery?", a: "Yes, for many patients, interventional procedures can provide sufficient pain relief to delay or completely avoid the need for major surgery. It is often a key part of conservative management." }
      ]
   }
};

export default function SpecialtyPage(props) {
   const params = use(props.params);
   const { slug } = params;
   const specialty = specialtyData[slug];

   if (!specialty) {
      notFound();
   }

   const gradientClasses = specialty.color; // e.g., "from-[#D62828] to-[#F77F00]"
   const gradientFrom = specialty.color.split(" to ")[0].replace("from-[", "").replace("]", "");

   return (
      <div className="min-h-screen bg-white">
         {/* Hero Section */}
         <section className={`relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br ${gradientClasses}`}>
            <div className="absolute inset-0 z-0">
               <img src={specialty.image} alt={specialty.name} className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
               <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A5F]/30 via-transparent to-[#1E3A5F]/80" />
               <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full opacity-50" />
               <div className="absolute bottom-20 right-20 w-96 h-96 border border-white rounded-full opacity-50" />
            </div>

            <div className="container mx-auto px-6 py-10 relative z-10">
               <div className="max-w-3xl">
                  <div className="flex items-center gap-4 mb-6">
                     <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                        <specialty.icon className="w-10 h-10 text-white" />
                     </div>
                     <span className="text-xl font-medium tracking-wider uppercase bg-white/20 px-4 py-1 rounded-full backdrop-blur-sm">
                        Department
                     </span>
                  </div>
                  <h1 className="text-5xl md:text-7xl text-white font-bold mb-6 leading-tight">{specialty.title}</h1>
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                     {specialty.overview}
                  </p>
               </div>
            </div>
         </section>

         {/* Overview Section */}
         <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
               <div className="max-w-4xl mx-auto">
                  <h2 className="text-4xl font-bold text-[#1E3A5F] mb-10 border-b-4 pb-4 inline-block" style={{ borderBottomColor: gradientFrom }}>
                     Department Overview
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                     <p className="text-xl leading-relaxed">{specialty.longDescription1}</p>
                     <p className="text-xl leading-relaxed">{specialty.longDescription2}</p>
                  </div>
               </div>
            </div>
         </section>

         {/* Services Section */}
         <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
               <h2 className="text-4xl font-bold text-center text-[#1E3A5F] mb-16">Key Services & Procedures</h2>
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {specialty.services.map((service, index) => (
                     <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-100 hover:border-transparent group" style={{ hover: { borderColor: gradientFrom } }}>
                        <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center transition-colors" style={{ backgroundColor: `${gradientFrom}15`, color: gradientFrom }}>
                           <ShieldPlus className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1E3A5F] mb-4 group-hover:text-current transition-colors" style={{ hover: { color: gradientFrom } }}>{service.name}</h3>
                        <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Technology Section */}
         <section className={`py-20 bg-gradient-to-br from-[#E6F4F1] via-[#F0F9F8] to-[#E6F4F1] relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A896]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F77F00]/10 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
               <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
                  <div className="md:w-1/2">
                     <img src={specialty.image} alt="Technology" className="rounded-3xl shadow-2xl object-cover h-[500px] w-full" />
                  </div>
                  <div className="md:w-1/2">
                     <h2 className="text-4xl font-bold text-[#1E3A5F] mb-8">State-of-the-Art Technology</h2>
                     <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        We invest in the latest medical technologies to ensure precise diagnoses, effective treatments, and the highest standards of patient safety.
                     </p>
                     <ul className="space-y-6">
                        {specialty.technology.map((tech, index) => (
                           <li key={index} className="flex items-start gap-4">
                              <CheckCircle2 className="w-6 h-6 shrink-0 mt-1" style={{ color: gradientFrom }} />
                              <span className="text-lg text-gray-700 font-medium">{tech}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </section>

         {/* FAQ Section */}
         <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
               <div className="max-w-4xl mx-auto">
                  <h2 className="text-4xl font-bold text-center text-[#1E3A5F] mb-16">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                     {specialty.faqs.map((faq, index) => (
                        <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                           <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">{faq.q}</h3>
                           <p className="text-lg text-gray-600 leading-relaxed">{faq.a}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
               <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-r ${gradientClasses}`} />
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

                  <div className="relative p-12 md:p-20 text-center">
                     <div className="absolute top-8 right-12 w-20 h-20 bg-white/10 rounded-2xl rotate-12" />
                     <div className="absolute bottom-8 left-12 w-16 h-16 bg-white/10 rounded-xl -rotate-12" />

                     <div className="max-w-2xl mx-auto relative">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Schedule an Appointment?</h2>
                        <p className="text-white/90 text-lg mb-10">
                           Our expert team is here to provide you with the best possible care. Contact us today to book your consultation with the {specialty.name} department.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                           <Link href="/book-appointment">
                              <Button className="bg-white text-[#1E3A5F] hover:bg-gray-100 px-10 py-7 rounded-full text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                 Book Appointment Online
                                 <ArrowRight className="w-5 h-5 ml-2" />
                              </Button>
                           </Link>
                           <Link href="/contact">
                              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F] px-10 py-7 rounded-full text-lg font-bold transition-all bg-transparent">
                                 Contact Department
                              </Button>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
