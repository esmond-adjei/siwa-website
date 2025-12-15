"use client"
import React from 'react';
import WaitlistForm from './component/WaitListForm';
import { motion } from 'framer-motion';


const AboutUsPage: React.FC = () => {
  return (
    <motion.div 
      className="relative h-screen flex flex-col justify-center bg-cover bg-center text-primary"
      style={{ backgroundImage: `url('/images/rain-gauge.jpg')` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
    <div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)",
      }}
    />

      {/* Vision and Mission Section */}
      <section className={`relative section py-10`}>
        <h1 className="text-4xl md:text-5xl text-black text-center mb-6">
          Join the SIWA Waitlist
        </h1>
        <div className="max-w-4xl mx-auto">
          <WaitlistForm />
        </div>
      </section>
    </motion.div>
  );
};

export default AboutUsPage;