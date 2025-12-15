'use client';

import { ROUTES } from '@/lib';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Diva from '@/components/Diva';
import './blob-gradient.css';

/**
 * Hero section for the home page
 */
export default function Hero() {

  return (
    <motion.section
      className="relative flex flex-row items-center justify-center overflow-hidden w-full min-h-screen md:min-h-200 bg-linear-to-b from-primary-100 via-primary-50 to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      <div className="absolute inset size-full" style={{
        backgroundImage: 'url(/pattern-randomized-light.svg)',
        backgroundSize: 'cover',
        opacity: 0.7,
        backgroundPosition: 'center',
        mixBlendMode: "multiply",        
      }} />
    
      {/* Gradient Overlay */}
      <div className='absolute h-full w-full'>
        <div className="blob relative top-10 left-1/2 -translate-x-1/2 transform -translate-y-1/2 size-100 lg:size-200 rounded-full" />
      </div>

      {/* Content */}
      <div className="relative max-w-360 flex flex-col md:flex-row items-center justify-center">
        <motion.div
          className="mx-auto relative z-10 left-1/2 md:left-0 -top-10 -translate-x-1/2 md:translate-x-0 text-center md:text-left flex flex-col items-center md:items-start px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* App Branding */}
          <p className="border border-primary-400 rounded-full bg-primary-300 px-4 py-2 w-max text-xs text-primary-900 mb-3">
            Smart Indigenous Weather App
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 drop-shadow-lg">
            Old Wisdom. New Technology.
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-light mb-8 max-w-180">
            Climate-smart weather forecasting that combines traditional ecological knowledge with AI to help Ghanaian farmers thrive
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center md:justify-normal sm:flex-row gap-4 mb-8 w-4/5">
            <Link
              href={ROUTES.appDownload}
              className="inline-flex items-center justify-center gap-2 active:scale-95 px-6 py-3 bg-black text-white font-semibold rounded-xl hover:bg-secondary transition-all duration-200"
            >
              <Image src="/playstore.png" alt="Get it on Google Play" width={30} height={30} />
              <span>Download App</span>
            </Link>
            <Link
              href={ROUTES.waitingList}
              className="cta-btn text-xl px-8! py-4! text-nowrap rounded-xl! bg-white! text-black! hcc font-semibold! active:scale-95 hover:bg-secondary transition-all duration-200"
            >
                Join the Waitlist
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mx-auto md:mx-0 w-lg overflow-hidden relative rounded-full">
            <div className="absolute left-0 top-0 bg-linear-to-r from-primary-50 to-transparent w-10 h-70 z-10"/>
            <div className="absolute right-0 top-0 bg-linear-to-l from-primary-50 to-transparent w-10 h-70 z-10"/>
            <div className="flex gap-4 text-sm text-nowrap text-dark opacity-60 font-medium marquee-effect">
              <p>Trusted by 500+ farmers</p> • 
              <p>Powered by indigenous knowledge</p>
            </div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          // className="lg:block absolute left-1/2 -translate-x-1/2 top-[60%] w-4/5 h-full z-40"
          className="relative top-0 w-100 md:w-200 h-full z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Diva className="absolute" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 bg-linear-to-t from-white to-transparent w-full z-45 h-15"/>
    </motion.section>
  );
}
