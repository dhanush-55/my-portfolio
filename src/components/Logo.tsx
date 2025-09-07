import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean; 
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showText = true }) => {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-5xl'
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className={`font-bold ${sizeClasses[size]} gradient-text`}>
        NDK
      </span>
      {showText && ( 
        <span
          className={`${
            size === 'lg' ? 'text-xl' : size === 'sm' ? 'text-md' : 'text-sm'
          } text-muted`}
        >
          Portfolio
        </span>
      )}
    </div>
  );
};

export default Logo;