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
        {/* Primary Electric Blue Morph Blob */}
        <div
          className="absolute -top-24 -left-20 w-[480px] sm:w-[620px] h-[480px] sm:h-[620px] rounded-full bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-cyan-400/10 blur-[90px] animate-morph-blob-1"
        />

        {/* Secondary Violet Morph Blob */}
        <div
          className="absolute top-1/4 right-[-10%] w-[420px] sm:w-[580px] h-[420px] sm:h-[580px] rounded-full bg-gradient-to-br from-violet-600/20 via-purple-600/15 to-blue-500/10 blur-[100px] animate-morph-blob-2"
        />

        {/* Accent Cyan & Soft Lavender Floating Glow */}
        <div
          className="absolute -bottom-32 left-1/3 w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] rounded-full bg-gradient-to-tl from-cyan-500/15 via-blue-600/10 to-indigo-500/15 blur-[85px] animate-morph-blob-3"
        />

        {/* Subtle mesh dot overlay for texture */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>
    );
  }

  if (variant === 'subtle') {
    return (
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-indigo-600/10 rounded-full blur-[110px] animate-pulse-glow" />
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
        className="absolute top-0 right-10 w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] rounded-full bg-gradient-to-br from-blue-600/10 via-violet-600/10 to-transparent blur-[90px] animate-morph-blob-2"
      />
      <div
        className="absolute bottom-10 left-5 w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-gradient-to-tr from-cyan-600/10 via-indigo-600/10 to-transparent blur-[85px] animate-morph-blob-1"
      />
    </div>
  );
};
