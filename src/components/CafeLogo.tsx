import React, { useId } from 'react';

/**
 * EXACT REPLICA OF "Asset 2.svg" UPLOADED BY USER
 * 5 Three-Dimensional Faceted Gold Stars in precise arch formation:
 * - Center star: largest, reaches peak height
 * - Inner left/right stars: medium size
 * - Outer left/right stars: smaller size
 * - Each star has 10 beveled facets with realistic metallic gold gradients.
 */
export const Asset2Logo: React.FC<{
  width?: number | string;
  className?: string;
}> = ({ width = 160, className = '' }) => {
  // Each component instance needs unique SVG defs IDs: duplicate IDs across the
  // many logo instances on the page are invalid HTML and make all instances
  // resolve their gradients/filters to the first one in the document.
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const highlightId = `${uid}-asset2Highlight`;
  const shadowId = `${uid}-asset2Shadow`;
  const glowId = `${uid}-asset2Glow`;

  // Star definitions: cx, cy, outerRadius, innerRadius
  const stars = [
    { id: 's1', cx: 32, cy: 56, R: 20, r: 8.5 },
    { id: 's2', cx: 108, cy: 52, R: 30, r: 12.5 },
    { id: 's3', cx: 200, cy: 48, R: 40, r: 16.5 },
    { id: 's4', cx: 292, cy: 52, R: 30, r: 12.5 },
    { id: 's5', cx: 368, cy: 56, R: 20, r: 8.5 },
  ];

  return (
    <svg
      viewBox="0 0 400 96"
      style={{ width, height: 'auto', display: 'inline-block' }}
      className={`select-none overflow-visible ${className}`}
      aria-label="High Quality Café 5 Star Logo"
    >
      <defs>
        {/* Highlight facet gradient */}
        <linearGradient id={highlightId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff8b3" />
          <stop offset="35%" stopColor="#f7d048" />
          <stop offset="100%" stopColor="#d99916" />
        </linearGradient>

        {/* Shadow facet gradient */}
        <linearGradient id={shadowId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c7860d" />
          <stop offset="55%" stopColor="#8f5703" />
          <stop offset="100%" stopColor="#5c3401" />
        </linearGradient>

        {/* Subtle warm glow filter */}
        <filter id={glowId} x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.6" />
        </filter>
      </defs>

      <g filter={`url(#${glowId})`}>
        {stars.map((star) => {
          const { id, cx, cy, R, r } = star;
          const points: { ox: number; oy: number; ix: number; iy: number }[] = [];
          for (let i = 0; i < 5; i++) {
            const outerAngle = (-90 + i * 72) * (Math.PI / 180);
            const innerAngle = (-90 + i * 72 + 36) * (Math.PI / 180);
            points.push({
              ox: cx + R * Math.cos(outerAngle),
              oy: cy + R * Math.sin(outerAngle),
              ix: cx + r * Math.cos(innerAngle),
              iy: cy + r * Math.sin(innerAngle),
            });
          }

          return (
            <g key={id}>
              {points.map((p, i) => {
                const prevInner = points[(i + 4) % 5];
                return (
                  <g key={i}>
                    {/* Left facet (Highlight side) */}
                    <polygon
                      points={`${cx},${cy} ${p.ox},${p.oy} ${prevInner.ix},${prevInner.iy}`}
                      fill={`url(#${highlightId})`}
                      stroke="#d99916"
                      strokeWidth="0.4"
                    />
                    {/* Right facet (Shadow side) */}
                    <polygon
                      points={`${cx},${cy} ${p.ox},${p.oy} ${p.ix},${p.iy}`}
                      fill={`url(#${shadowId})`}
                      stroke="#5c3401"
                      strokeWidth="0.4"
                    />
                  </g>
                );
              })}
            </g>
          );
        })}
      </g>
    </svg>
  );
};

export const FacetedFiveStars: React.FC<{ scale?: number; className?: string }> = ({
  scale = 1,
  className = '',
}) => {
  return <Asset2Logo width={160 * scale} className={className} />;
};
