import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia('(max-width: 768px)').matches ||
        window.matchMedia('(hover: none)').matches
      );
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring settings as requested
  // Spring stiffness: 220, damping: 18, mass: 0.6
  const springConfig = { stiffness: 220, damping: 18, mass: 0.6 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !ref.current) return;
    
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance from center
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Convert cursor position into translateX and translateY values.
    // Maximum movement range: 10px.
    const moveX = (distanceX / (width / 2)) * 10;
    const moveY = (distanceY / (height / 2)) * 10;
    
    const clampedX = Math.max(-10, Math.min(10, moveX));
    const clampedY = Math.max(-10, Math.min(10, moveY));

    x.set(clampedX);
    y.set(clampedY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smoothly animate back to its original center position
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        x: isMobile ? 0 : springX,
        y: isMobile ? 0 : springY,
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
      }}
      className={`relative inline-block ${className}`}
    >
      <motion.div
        animate={{
          boxShadow: isHovered && !isMobile 
            ? "0px 10px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)" 
            : "0px 0px 0px 0px rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.3 }}
        className="rounded-full h-full w-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
