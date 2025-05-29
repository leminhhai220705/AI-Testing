'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ReadMoreProps {
  initialText: string;
  expandedText: string;
  className?: string;
}

export default function ReadMore({ initialText, expandedText, className = '' }: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={className}>
      <p>
        {isExpanded ? (
          <>
            {initialText} {expandedText}
          </>
        ) : (
          initialText
        )}
      </p>
      <motion.button
        onClick={toggleExpand}
        className="read-more mt-2 text-primary font-medium"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </motion.button>
    </div>
  );
} 