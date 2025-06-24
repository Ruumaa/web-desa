'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface BaseAnimationProps {
  children?: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

interface TextAnimationProps {
  text: string;
  delay?: number;
  className?: string;
  once?: boolean;
}

interface WordRevealProps extends TextAnimationProps {
  stagger?: number;
}

interface CharRevealProps extends TextAnimationProps {
  stagger?: number;
}

interface TypewriterRevealProps extends TextAnimationProps {
  speed?: number;
  cursor?: boolean;
}

interface StaggerContainerProps {
  children: ReactNode;
  stagger?: number;
  className?: string;
  once?: boolean;
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

// Basic text reveal with slide up animation
export const TextReveal = ({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
}: BaseAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-10%' });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Word by word reveal animation
export const WordReveal = ({
  text,
  delay = 0,
  stagger = 0.1,
  className = '',
  once = true,
}: WordRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-10%' });

  const words = text.split(' ');

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block will-change-transform pb-1"
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: delay + index * stagger,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {word}
            {index < words.length - 1 && '\u00A0'}
          </motion.span>
        </span>
      ))}
    </div>
  );
};

// Character by character reveal
export const CharReveal = ({
  text,
  delay = 0,
  stagger = 0.02,
  className = '',
  once = true,
}: CharRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-10%' });

  const characters = text.split('');

  return (
    <div ref={ref} className={className}>
      {characters.map((char, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{
              duration: 0.4,
              delay: delay + index * stagger,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </div>
  );
};

// Typewriter effect
export const TypewriterReveal = ({
  text,
  delay = 0,
  speed = 0.05,
  className = '',
  once = true,
  cursor = true,
}: TypewriterRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-10%' });

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3, delay }}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              duration: 0.1,
              delay: delay + index * speed,
              ease: 'easeOut',
            }}
          >
            {char}
          </motion.span>
        ))}
        {cursor && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="ml-1"
          >
            |
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};

// Fade and blur reveal
export const BlurReveal = ({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
  once = true,
}: BaseAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-10%' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={
        isInView
          ? { opacity: 1, filter: 'blur(0px)' }
          : { opacity: 0, filter: 'blur(10px)' }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

// Scale reveal
export const ScaleReveal = ({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
}: BaseAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-10%' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

// Slide reveal from different directions
export const SlideReveal = ({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
  direction = 'up',
}: BaseAnimationProps & { direction?: 'up' | 'down' | 'left' | 'right' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-10%' });

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...directions[direction] }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

// Container for staggered children animations
export const StaggerContainer = ({
  children,
  stagger = 0.1,
  className = '',
  once = true,
}: StaggerContainerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-10%' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// Item for staggered animations
export const StaggerItem = ({
  children,
  className = '',
  direction = 'up',
}: StaggerItemProps) => {
  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
  };

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          ...directions[direction],
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// Image reveal with loading effect
export const ImageReveal = ({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
  once = true,
}: BaseAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-10%' });

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 1.1 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};
