'use client'
import React, { useState, ReactNode } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableSectionProps {
  title: string;
  expanded?: boolean;
  className?: string;
  children: ReactNode;
}

export const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  title,
  expanded = false,
  className = '',
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`bg-gray-100 rounded-xl px-4 ${className}`}>
        {/* TOGGLE */}
      <button
        onClick={toggleExpansion}
        className="flex items-center justify-between w-full text-left"
      >
        {/* heading */}
        <h2 className="text-xl font-medium text-black/80 group-hover:text-primaryBright">
          {title}
        </h2>

        {/* icon */}
        {
          isExpanded ? (
            <ChevronUp className="size-5 text-black/60" />
          ) : (
            <ChevronDown className="size-5 text-black/60" />
          )
        }
      </button>
      
      {/* CONTENT */}
      <div className='drawer block text-gray-700' aria-expanded={isExpanded}>{children}</div>
    </div>
  );
};
