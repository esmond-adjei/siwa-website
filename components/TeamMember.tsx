'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface TeamMemberProps {
  imageSrc: string;
  name: string;
  title: string;
  children: React.ReactNode;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  imageSrc, 
  name, 
  title, 
  children, 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      ref={cardRef}
      className="perspective-1000 relative w-max"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cursor Tooltip */}
      {isHovered && !isFlipped && (
        <motion.div
          className="pointer-events-none absolute bg-white shadow p-2 rounded text-sm z-10"
          animate={{
            x: mousePosition.x + 10,
            y: mousePosition.y + 10,
            opacity: 1
          }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >Tap to flip
        </motion.div>
      )}

      <div 
        className={`relative w-[300px] aspect-square transition-transform duration-700 preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={toggleFlip}
      >
        {/* Front of card */}
        <div
          className="absolute bg-background size-full backface-hidden rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-4 px-6">
            <h3 className="font-semibold text-xl text-white">{name}</h3>
            <p className="text-white/80 text-sm">{title}</p>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-3xl bg-gray-200 shadow-xl p-6">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(false);
            }}
            className="absolute right-2 top-2 p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition"
          >
            <X size={16} />
          </button>
          
          <div className="flex flex-col h-full">
            <h3 className="text-xl font-semibold text-center mb-2">{name}</h3>
            <p className="text-gray-500 text-center text-sm mb-4">{title}</p>
            <div className="text-gray-700 overflow-y-auto flex-grow">
              {children}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default TeamMember;