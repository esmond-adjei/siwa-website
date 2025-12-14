import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';

interface DivaProps {
  className?: string;
}

interface MousePosition {
  x: number;
  y: number;
}

export default function Diva({ className = '' }: DivaProps) {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const imageClasses = 'absolute w-1/2 rounded-xl shadow-2xl transition-all duration-200 ease-out';

  // Handle mouse move event with requestAnimationFrame for smoother handling
  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      setMousePosition({ x, y });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePosition({ x: 0, y: 0 });
  }, []);

  // Using useEffect to add/remove event listeners
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  // Memoize the 3D transform calculation
  const get3DTransform = useMemo(() => {
    return (depth: number, offsetX: number = 0): string => {
      const rotateX = -mousePosition.y * 20;
      const rotateY = mousePosition.x * 20;

      const translateZ = depth;
      const translateX = offsetX + mousePosition.x * 50;
      const translateY = mousePosition.y * 50;

      return `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateX(${translateX}px)
        translateY(${translateY}px)
        translateZ(${translateZ}px)
      `;
    };
  }, [mousePosition]);

  return (
    <div ref={containerRef} className={`relative h-150 ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Top Image - Furthest out */}
        <Image
          src="/images/app-dashboard.png"
          alt="app dashboard interface"
          width={800}
          height={600}
          style={{ transform: get3DTransform(100) }}
          className={`${imageClasses} w-full lg:w-2/3 top-1/4 lg:top-1/5 z-30 hover:scale-105`}
        />

        {/* Bottom Right Image - Middle distance */}
        <Image
          src="/images/app-class-analytics.png"
          alt="app analytics interface"
          width={800}
          height={600}
          style={{ transform: get3DTransform(50, 200) }}
          className={`${imageClasses} hidden md:block top-40 -left-55 z-20 hover:scale-105`}
        />

        {/* Bottom Left Image - Closest */}
        <Image
          src="/images/app-test-2.png"
          alt="app test interface"
          width={800}
          height={600}
          style={{ transform: get3DTransform(0, -200) }}
          className={`${imageClasses} hidden md:block top-40 -right-55 z-40 hover:scale-105`}
        />
      </div>
    </div>
  );
}
