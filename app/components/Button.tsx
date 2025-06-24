import { cn } from '@/lib/utils';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode | string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-4 py-2 md:px-5 md:py-3 bg-main font-medium md:font-semibold text-white hover:text-accent rounded-lg duration-300 transition cursor-pointer',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
