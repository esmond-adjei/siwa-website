// 'use client';

// import { useState } from 'react';
// // import emailjs from 'emailjs-com';
// // import type { SubmitStatus, EmailFormData } from '@/types';

// const initialState: EmailFormData = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   subject: '',
//   message: '',
// };

// const ContactForm = () => {
//   const [formData, setFormData] = useState<EmailFormData>(initialState);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ type: '', message: '' });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus({ type: '', message: '' });

//     setIsSubmitting(false);

//     try {
//       const result = await emailjs.send(
//         'examn_landing_page',
//         'template_g4y14fr',
//         {
//           firstName: formData.firstName,
//           lastName: formData.lastName,
//           email: formData.email,
//           subject: formData.subject,
//           message: formData.message,
//         },
//         'ah6Y4NqbcjfGQp9Se'
//       );

//       if (result.status !== 200) {
//         throw new Error('Failed to send message.');
//       }

//       setSubmitStatus({
//         type: 'success',
//         message: 'Your message has been sent successfully!',
//       });

//       // Clear form
//       setFormData(initialState);
//     } catch (error) {
//       setSubmitStatus({
//         type: 'error',
//         message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="form-container mx-auto">
//       {submitStatus.message && (
//         <div
//           className={`mb-4 p-4 rounded-xl ${
//             submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
//           }`}
//         >
//           {submitStatus.message}
//         </div>
//       )}

//       <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
//         <div>
//           <label htmlFor="firstName" className="form-input-label">First Name</label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             className="form-input"
//             placeholder="First Name"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="lastName" className="form-input-label">Last Name</label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             className="form-input"
//             placeholder="Last Name"
//             required
//           />
//         </div>
//       </div>
      
//       <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
//         <div>
//         <label htmlFor="email" className="form-input-label">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="form-input"
//           placeholder="email"
//           required
//         />
//         </div>
//         <div>
//         <label htmlFor="subject" className="form-input-label">subject</label>
//         <input
//           type="subject"
//           id="subject"
//           name="subject"
//           value={formData.subject}
//           onChange={handleChange}
//           className="form-input"
//           placeholder="subject"
//           required
//         />
//         </div>
//       </div>

//       <div>
//         <label htmlFor="message" className="form-input-label">Message</label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           className="form-input"
//           rows={4}
//           placeholder="Your Message"
//           required
//         />
//       </div>

//       <button
//         type="submit"
//         className="submit-btn w-full"
//         disabled={isSubmitting}
//       >
//         {isSubmitting ? 'Sending...' : 'Send Message'}
//       </button>
//     </form>
//   );
// };

// export default ContactForm;
