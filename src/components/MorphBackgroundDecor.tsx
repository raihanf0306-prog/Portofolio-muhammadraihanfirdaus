import React from 'react';

interface MorphBackgroundDecorProps {
  variant?: 'hero' | 'section' | 'subtle' | 'card';
  className?: string;
}

export const MorphBackgroundDecor: React.FC<MorphBackgroundDecorProps> = ({
  variant = 'section',
  className = '',
}) => {
  if (variant === 'hero') {
    return (
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}
        aria-hidden="true"
      >
        {/* Layer 1: Electric Blue Organic Aurora Form */}
        <div
          className="absolute -top-32 -left-24 w-[520px] sm:w-[680px] h-[520px] sm:h-[680px] rounded-full bg-gradient-to-tr from-[#3B82F6]/25 via-[#6366F1]/20 to-[#22D3EE]/15 blur-[100px] animate-liquid-shift"
        />

        {/* Layer 2: Deep Violet / Indigo Fluid Glow */}
        <div
          className="absolute top-1/4 -right-20 w-[450px] sm:w-[620px] h-[450px] sm:h-[620px] rounded-full bg-gradient-to-bl from-[#8B5CF6]/25 via-[#60A5FA]/15 to-transparent blur-[110px] animate-liquid-pulse"
        />

        {/* Layer 3: Cyan Accent Specular Bloom */}
        <div
          className="absolute -bottom-28 left-1/4 w-[380px] sm:w-[540px] h-[380px] sm:h-[540px] rounded-full bg-gradient-to-tl from-[#22D3EE]/18 via-[#3B82F6]/15 to-[#8B5CF6]/15 blur-[95px] animate-pulse-glow"
        />

        {/* Subtle geometric dot grid matrix for futuristic texture */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(248,250,252,0.04)_1px,transparent_1px)] [background-size:32px_32px] opacity-50" />
      </div>
    );
  }

  if (variant === 'subtle') {
    return (
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[380px] bg-[#6366F1]/12 rounded-full blur-[120px] animate-pulse-glow" />
      </div>
    );
  }

  // Default 'section' variant
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute -top-16 -right-16 w-[420px] sm:w-[520px] h-[420px] sm:h-[520px] rounded-full bg-gradient-to-br from-[#3B82F6]/15 via-[#8B5CF6]/12 to-transparent blur-[100px] animate-liquid-pulse"
      />
      <div
        className="absolute -bottom-16 -left-16 w-[360px] sm:w-[460px] h-[360px] sm:h-[460px] rounded-full bg-gradient-to-tr from-[#22D3EE]/15 via-[#6366F1]/12 to-transparent blur-[95px] animate-liquid-shift"
      />
    </div>
  );
};

