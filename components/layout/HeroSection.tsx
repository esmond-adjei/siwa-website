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
      className="relative flex items-center justify-center overflow-hidden w-full min-h-screen md:min-h-200 pt-24 pb-12 lg:py-24 bg-linear-to-b from-primary-100 via-primary-50 to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      {/* Background Pattern */}
      <div 
        className="absolute inset-0 size-full" 
        style={{
          backgroundImage: 'url(/pattern-randomized-light.svg)',
          backgroundSize: 'cover',
          opacity: 0.7,
          backgroundPosition: 'center',
          mixBlendMode: "multiply",
        }} 
      />
    
      <div className='absolute h-full w-full'>
        <div className="blob relative top-1/3 left-1/2 -translate-x-1/2 lg:top-1/4 lg:left-1/4 lg:translate-x-0 size-100 lg:size-125 rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-360 mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:items-center">

        <motion.div
          className="text-center lg:text-left flex flex-col items-center lg:items-start pt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* App Branding */}
          <p className="border border-primary-400 rounded-full bg-primary-300 px-4 py-2 w-max text-xs text-primary-900 mb-3">
            Smart Indigenous Weather App
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 drop-shadow-lg">
            Old Wisdom. <br/> New Technology.
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
            Climate-smart weather forecasting that combines traditional ecological knowledge with AI to help Ghanaian farmers thrive
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full justify-center lg:justify-start max-w-md">
            <Link
              href={ROUTES.appDownload}
              className="inline-flex items-center justify-center gap-2 active:scale-95 px-6 py-3 bg-black text-white font-semibold rounded-xl hover:bg-secondary transition-all duration-200"
            >
              <Image src="/playstore.png" alt="Get it on Google Play" width={30} height={30} />
              <span>Download App</span>
            </Link>
            <Link
              href={ROUTES.about}
              className="cta-btn text-xl px-8! py-4! text-nowrap rounded-xl! bg-white! text-black! hcc font-semibold! active:scale-95 hover:bg-secondary transition-all duration-200"
            >
              Learn More
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mx-auto md:mx-0 w-lg overflow-hidden relative rounded-full">
            <div className="flex gap-4 text-sm text-nowrap text-dark opacity-60 font-medium marquee-effect">
              <p>Trusted by 500+ farmers</p> • 
              <p>Powered by indigenous knowledge</p>
            </div>
          </div>
        </motion.div>

        {/* Image Column (Right on Desktop) */}
        <div className="w-full flex justify-center lg:justify-end min-h-72 lg:h-full">
          <motion.div
            className="relative w-full max-w-sm md:max-w-md lg:max-w-lg z-40 mt-10 lg:mt-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Diva className="absolute inset-0" />
          </motion.div>
        </div>
      </div>

      {/* Fade at Bottom */}
      <div className="absolute -bottom-1 bg-linear-to-t from-white to-transparent w-full z-45 h-25"/>
    </motion.section>
  );
}
