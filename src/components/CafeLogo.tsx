import React from 'react';

/**
 * 3D Faceted Gold Star matching the exact lighting and beveling of the user's logo.
 */
export const FacetedGoldStar: React.FC<{ size?: number; className?: string }> = ({
  size = 48,
  className = '',
}) => {
  const cx = 50;
  const cy = 50;
  const outerR = 48;
  const innerR = 19.5;

  const points: { ox: number; oy: number; ix: number; iy: number }[] = [];
  for (let i = 0; i < 5; i++) {
    const outerAngle = (-90 + i * 72) * (Math.PI / 180);
    const innerAngle = (-90 + i * 72 + 36) * (Math.PI / 180);
    points.push({
      ox: cx + outerR * Math.cos(outerAngle),
      oy: cy + outerR * Math.sin(outerAngle),
      ix: cx + innerR * Math.cos(innerAngle),
      iy: cy + innerR * Math.sin(innerAngle),
    });
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`inline-block drop-shadow-sm ${className}`}
      style={{ overflow: 'visible' }}
    >
      <defs>
        <linearGradient id="facetHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff299" />
          <stop offset="40%" stopColor="#f5ca38" />
          <stop offset="100%" stopColor="#d69615" />
        </linearGradient>
        <linearGradient id="facetShadow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c4860d" />
          <stop offset="60%" stopColor="#915b03" />
          <stop offset="100%" stopColor="#633c02" />
        </linearGradient>
      </defs>

      <g>
        {points.map((p, i) => {
          const prevInner = points[(i + 4) % 5];
          return (
            <g key={i}>
              {/* Highlight Facet */}
              <polygon
                points={`${cx},${cy} ${p.ox},${p.oy} ${prevInner.ix},${prevInner.iy}`}
                fill="url(#facetHighlight)"
                stroke="#d69615"
                strokeWidth="0.4"
              />
              {/* Shadow Facet */}
              <polygon
                points={`${cx},${cy} ${p.ox},${p.oy} ${p.ix},${p.iy}`}
                fill="url(#facetShadow)"
                stroke="#633c02"
                strokeWidth="0.4"
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
};

/**
 * The 5 faceted gold stars aligned in the signature arch from the user's uploaded logo:
 * [star 1: small] [star 2: medium] [star 3: large center] [star 4: medium] [star 5: small]
 */
export const FacetedFiveStars: React.FC<{ scale?: number; className?: string }> = ({
  scale = 1,
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-end justify-center select-none ${className}`}
      style={{ gap: `${6 * scale}px` }}
    >
      {/* Star 1 - Small Left */}
      <div style={{ transform: `translateY(${9 * scale}px)` }}>
        <FacetedGoldStar size={26 * scale} />
      </div>

      {/* Star 2 - Medium Left */}
      <div style={{ transform: `translateY(${3 * scale}px)` }}>
        <FacetedGoldStar size={36 * scale} />
      </div>

      {/* Star 3 - Large Center */}
      <div style={{ transform: `translateY(${-4 * scale}px)` }}>
        <FacetedGoldStar size={48 * scale} />
      </div>

      {/* Star 4 - Medium Right */}
      <div style={{ transform: `translateY(${3 * scale}px)` }}>
        <FacetedGoldStar size={36 * scale} />
      </div>

      {/* Star 5 - Small Right */}
      <div style={{ transform: `translateY(${9 * scale}px)` }}>
        <FacetedGoldStar size={26 * scale} />
      </div>
    </div>
  );
};

/**
 * EXACT REPLICA of the User's Uploaded Logo:
 * - 5 3D Faceted Gold Stars forming an arch
 * - Bold Golden "HIGH QUALITY CAFÉ" in Times New Roman with exact kerning & styling
 */
export const HighQualityCafeLogo: React.FC<{
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  theme?: 'dark' | 'light';
}> = ({ size = 'xl', className = '', theme = 'dark' }) => {
  // Scale calculations for noticeably larger appearance
  const config = {
    sm: { starScale: 0.7, fontSize: '16px', letterSpacing: '0.12em', gap: '4px' },
    md: { starScale: 1.0, fontSize: '22px', letterSpacing: '0.14em', gap: '6px' },
    lg: { starScale: 1.3, fontSize: '28px', letterSpacing: '0.16em', gap: '8px' },
    xl: { starScale: 1.65, fontSize: 'clamp(24px, 6vw, 36px)', letterSpacing: '0.16em', gap: '10px' },
  }[size];

  const textColor = theme === 'light' ? '#d99714' : '#e8a817';

  return (
    <div
      className={`flex flex-col items-center justify-center text-center select-none ${className}`}
      style={{ fontFamily: '"Times New Roman", Times, "Liberation Serif", serif' }}
    >
      {/* 5 Faceted Gold Stars in Arch */}
      <FacetedFiveStars scale={config.starScale} />

      {/* HIGH QUALITY CAFÉ - Bold Golden Typography */}
      <h1
        className="font-extrabold uppercase leading-none mt-2 tracking-wider"
        style={{
          fontSize: config.fontSize,
          letterSpacing: config.letterSpacing,
          color: textColor,
          textShadow:
            theme === 'dark'
              ? '0 2px 8px rgba(0, 0, 0, 0.7), 0 0 16px rgba(232, 168, 23, 0.3)'
              : '0 1px 3px rgba(0, 0, 0, 0.2)',
        }}
      >
        HIGH QUALITY CAFÉ
      </h1>
    </div>
  );
};

/**
 * Top Grand Logo Banner:
 * Placed at the very top of the website as requested by the user ("make it at the top and as same the image")
 */
export const TopLogoBanner: React.FC = () => {
  return (
    <div className="w-full pt-8 pb-6 px-4 flex flex-col items-center justify-center relative z-20">
      <div className="w-full max-w-lg mx-auto bg-gradient-to-b from-[#1e1008]/90 via-[#25130b]/95 to-[#1c0d06]/90 border border-[#d4af37]/40 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm relative overflow-hidden">
        {/* Subtle ambient gold radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-36 bg-[#e8a817]/10 blur-2xl rounded-full pointer-events-none" />

        {/* Decorative corner accents */}
        <div className="absolute top-2.5 left-2.5 w-6 h-6 border-t-2 border-l-2 border-[#d4af37]/60 pointer-events-none" />
        <div className="absolute top-2.5 right-2.5 w-6 h-6 border-t-2 border-r-2 border-[#d4af37]/60 pointer-events-none" />
        <div className="absolute bottom-2.5 left-2.5 w-6 h-6 border-b-2 border-l-2 border-[#d4af37]/60 pointer-events-none" />
        <div className="absolute bottom-2.5 right-2.5 w-6 h-6 border-b-2 border-r-2 border-[#d4af37]/60 pointer-events-none" />

        {/* The Exact Logo - Big, Prominent, Matching the User's Image */}
        <HighQualityCafeLogo size="xl" />
      </div>
    </div>
  );
};
