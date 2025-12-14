// 'use client';

// import { ROUTES } from "@/lib";
// import { ArrowRight } from 'lucide-react';
// import Link from "next/link";
// import ContactForm from "./EmailForm";


// const ContactUs = () => {
//   return (
//     <section 
//         id="contact-us" 
//         className="section bg-gray-100 bg-cover bg-fixed flex flex-col-reverse gap-20 xl:flex-row justify-center"
//     >
//         {/* Contact Info Block */}
//         <div className="xl:w-1/2 w-full hcc">
//             <div className="w-full">
//                 <h2 className="heading-1 !mb-2 text-center">Contact Us</h2>
//                 <p className="text-lg text-center mb-8">Send Us a Quick Message</p>

//                 {/* Contact Form */}     
//                 <ContactForm />
//             </div>
//         </div>

//         <div className="hcc text-center xl:w-1/2 w-full">
//             <div>
//                 <h2 className="text-3xl font-semibold mb-6">
//                     Join us and Transform Exam Readiness with <span className="highlight">examn</span> 
//                 </h2>
//                 <Link
//                     href={ROUTES.waitingList}
//                     className="cta-btn text-xl !px-8 !py-4 group"
//                 >
//                     <span>Join the Waitlist</span>
//                     <span className="w-0 group-hover:w-[28px] transition-[width] duration-300 ease-out">
//                         <ArrowRight 
//                             size={20} 
//                             className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" 
//                         />
//                     </span>
//                 </Link>
//             </div>
//         </div>

//     </section>
//   );
// };

// export default ContactUs;
