import React, { useState } from 'react';
import { ASSETS } from '../constants';
import { Mountain } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 'md' }) => {
  const [error, setError] = useState(false);

  // Define sizing
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-16 w-16",
    lg: "h-32 w-32",
    xl: "h-48 w-48 md:h-64 md:w-64"
  };

  const iconSizes = {
    sm: 16,
    md: 32,
    lg: 64,
    xl: 96
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
        {/* Glow effect behind the logo */}
        <div className={`absolute inset-0 bg-green-500/20 rounded-full blur-xl transform scale-105 ${sizeClasses[size]}`} />
        
        {/* Actual Image or Fallback */}
        {error ? (
          <div className={`flex flex-col items-center justify-center rounded-full border-4 border-slate-800 bg-slate-900 shadow-2xl z-10 ${sizeClasses[size]}`}>
             <Mountain size={iconSizes[size]} className="text-slate-600 mb-2" />
             <span className="text-red-500 text-[10px] md:text-xs font-mono px-2 text-center">
               LOGO_MISSING
             </span>
          </div>
        ) : (
          <img 
              src={ASSETS.LOGO} 
              alt="PEAK CTF Logo" 
              className={`relative object-contain rounded-full border-4 border-slate-800 bg-slate-900 shadow-2xl z-10 ${sizeClasses[size]}`}
              onError={() => setError(true)}
          />
        )}
    </div>
  );
};

export default Logo;