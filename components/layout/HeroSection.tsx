'use client';

import { ROUTES } from '@/lib';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Diva from '@/components/Diva';
import './blob-gradient.css';

/**
 * Hero section for the home page
 */
export default function Hero() {

  return (
    <motion.section
      className="relative flex flex-col justify-center overflow-hidden w-full min-h-200 bg-linear-to-b from-primary-200 via-primary-100 to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        // backgroundImage: 'url(/images/pattern-randomized-light.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      <div className="absolute inset size-full" style={{
        backgroundImage: 'url(/images/pattern-randomized-light.svg)',
        mixBlendMode: "multiply",        
      }} />
    
      {/* Gradient Overlay */}
      <div className='absolute h-full w-full'>
        <div className="blob relative top-10 left-1/2 -translate-x-1/2 transform -translate-y-1/2 size-100 lg:size-200 rounded-full" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 left-1/2 -top-10 -translate-x-1/2 text-center flex flex-col items-center"
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
        <div className="flex flex-col justify-center sm:flex-row gap-4 mb-8 w-4/5">
          <Link
            href={ROUTES.waitingList}
            className="inline-flex items-center justify-center active:scale-95 px-6 py-3 bg-primary text-light hover:text-dark font-semibold rounded-xl hover:bg-secondary transition-all duration-300"
          >
            Download App
          </Link>
          <button className="cursor-pointer inline-flex items-center justify-center active:scale-95 px-6 py-3 bg-white bg-opacity-80 text-dark font-semibold rounded-xl hover:bg-opacity-100 transition-all duration-300 backdrop-blur-md border border-primary border-opacity-20">
            Learn More
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mx-auto w-128 overflow-hidden relative rounded-full">
          <div className="absolute left-0 top-0 bg-linear-to-r from-primary-50 to-transparent w-10 h-70 z-10"/>
          <div className="absolute right-0 top-0 bg-linear-to-l from-primary-50 to-transparent w-10 h-70 z-10"/>
          <div className="flex gap-4 text-sm text-nowrap text-dark opacity-60 font-medium marquee-effect">
            <p>Trusted by 500+ farmers</p> • 
            <p>Validated by GMet</p> • 
            <p>Powered by indigenous knowledge</p>
          </div>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        className="lg:block absolute left-1/2 -translate-x-1/2 top-[60%] w-4/5 h-full z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Diva className="absolute" />
      </motion.div>

      <div className="absolute bottom-0 bg-linear-to-t from-white to-transparent w-full z-45 h-15"/>
    </motion.section>
  );
}

/**
 * Hero section for other pages other than the home page
 * @param title, description, backgroundImage
 */
export function PageHero(
  {title, description, backgroundImage}:
  {title: string, description?: string, backgroundImage: string}
) {
  return (
    <motion.section
      className="relative flex flex-col justify-center h-90 bg-cover bg-center dark:text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 px-4 ">
        <h1 className="text-4xl md:text-4xl font-heading font-bold dark:text-white text-center mb-6">
          {title}
        </h1>
        {
          description &&
        <p className="text-lg md:text-xl max-w-2xl text-light mb-8">
          {description}
        </p>
        }
      </div>
    </motion.section>
  );
}