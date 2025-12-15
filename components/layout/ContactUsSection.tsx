'use client';

import { ROUTES } from "@/lib";
import { ArrowRight } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/EmailForm";


const ContactUs = () => {
  return (
    <section 
        id="contact-us" 
        className="section bg-gray-200 bg-cover bg-no-repeat hcc"
        style={{ 
            backgroundImage: 'url(/SIWA-logo.svg)', 
            backgroundBlendMode: 'color-dodge',
            backgroundPosition: '-300px -700px',
        }}
    >
        <div className="max-w-360 flex flex-col-reverse gap-20 xl:flex-row justify-center">

        {/* Contact Info Block */}
        <div className="xl:w-1/2 w-full hcc">
            <div className="w-full">
                <h2 className="heading-1 mb-2! text-center">Contact Us</h2>
                <p className="text-lg text-center mb-8">Send Us a Quick Message</p>

                {/* Contact Form */}     
                <ContactForm />
            </div>
        </div>

        <div className="hcc text-center xl:w-1/2 w-full">
            <div>
                <h2 className="text-3xl font-semibold mb-6">
                    Join us in building <span className="highlight">climate-resilient</span> agriculture
                </h2>
                <div className="hcc gap-6">
                    <Link
                        href={ROUTES.appDownload}
                        className="cta-btn text-xl px-8! py-4! group inline-flex items-center justify-center gap-2 active:scale-95 bg-black! text-white! font-semibold"
                    >
                        <Image src="/playstore.png" alt="Get it on Google Play" width={24} height={24} />
                        <span className="text-nowrap">Download App</span>
                    </Link>

                    <Link
                        href={ROUTES.waitingList}
                        className="cta-btn text-xl px-8! py-4! bg-primary! hover:bg-primary-300! hover:text-primary! group"
                    >
                        <span className="text-nowrap">Join the Waitlist</span>
                        <span className="w-0 group-hover:w-7 transition-[width] duration-300 ease-out">
                            <ArrowRight 
                                size={20} 
                                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" 
                            />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
        </div>

    </section>
  );
};

export default ContactUs;
