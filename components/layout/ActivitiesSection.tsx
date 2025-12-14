"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ImpactCard {
    image: string;
    title: string;
    description: string;
    impact: string;
    theme?: string;
}

const impacts: ImpactCard[] = [
  {
    image: '/images/cocoa-farmer.jpg',
    title: 'Empowering Cocoa Farmers',
    description: 'Working directly with cocoa farmers to integrate traditional knowledge with modern forecasting',
    impact: '500+ farmers trained across three regions',
    theme: '#635c61'
  },
  {
    image: '/images/community-rain-gauge-installation.jpg',
    title: 'Building Weather Networks',
    description: 'Installing community rain gauges to create localized weather data infrastructure',
    impact: '30+ rain gauge stations established',
    theme: '#343f22'
  },
  {
    image: '/images/field-training.jpg',
    title: 'Knowledge Transfer',
    description: 'Hands-on training sessions teaching farmers to use SIWA for better decision-making',
    impact: '1,000+ households directly benefiting',
    theme: '#6b4c59'
  },
  {
    image: '/images/woman-with-gauge.jpg',
    title: 'Women Leading Change',
    description: 'Empowering women farmers with tools and knowledge for climate-resilient agriculture',
    impact: '50% women participation in leadership',
    theme: '#92672f'
  },
  {
    image: '/images/women-in-agric-engagement-session.jpg',
    title: 'Community Engagement',
    description: 'Collaborative sessions ensuring SIWA meets the real needs of farming communities',
    impact: '4,000+ people impacted by improved food security',
    theme: '#9e958a'
  }
];


export default function FieldImpactSection() {
  // 1. Target Ref: Tracks the scroll progress of the entire section
  const targetRef = useRef<HTMLDivElement>(null);

  // 2. Scroll Hook: Tracks how far down we've scrolled within the targetRef
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // 3. Transform Hook: Maps vertical scroll (0 to 1) to horizontal movement (0% to -X%)
  // We move to -85% to ensure the last card comes fully into view. 
  // Adjust this percentage based on total width of your cards vs viewport.
  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "-230%"]);


  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white py-15">
      {/* Sticky Container 
        This div stays fixed in the viewport while the parent (ref=targetRef) scrolls.
        height-screen ensures it takes up the full view.
      */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <div className="max-w-7xl mx-auto w-full flex flex-col justify-center h-full">
          
          {/* Header (Stays visible while scrolling) */}
          <div className="px-4 mb-12 lg:mb-20 max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Impact in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Real stories from the field showing how SIWA is transforming lives
            </p>
          </div>

          {/* Horizontal Moving Track */}
          <motion.div 
            style={{ x }} 
            className="flex gap-8 px-4 w-full"
          >
            {impacts.map((impact, index) => (
              <Card key={index} impact={impact} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Card({ impact }: { impact: ImpactCard }) {
  return (
    <motion.div
      // 5:3 Ratio Implementation:
      // We set a fixed Height. The Aspect Ratio forces the Width.
      // Mobile: h-[300px] -> w-[500px]
      // Desktop: h-[500px] -> w-[833px]
      className="relative shrink-0 h-75 md:h-125 aspect-5/3 rounded-3xl overflow-hidden group bg-gray-100 shadow-lg"
      style={{ aspectRatio: '5/3' }} // Fallback for standard CSS if Tailwind plugin missing
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${impact.image})` }}
      />

      {/* Dark Overlay (Gradient) */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: `linear-gradient(to top, ${impact.theme || '#000'} 0%, rgba(0,0,0,0.2) 50%, transparent 100%)`
        }}
      />

      {/* Card Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="relative z-10 flex flex-col items-start">
          {/* Badge */}
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/10 rounded-full text-xs font-semibold text-white mb-3">
            {impact.impact}
          </span>
          
          {/* Title */}
          <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-2 drop-shadow-md">
            {impact.title}
          </h3>
          
          {/* Description - Hides on mobile, fades in on hover for desktop */}
          <p className="text-white/90 text-sm md:text-lg leading-relaxed max-w-lg md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
            {impact.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
