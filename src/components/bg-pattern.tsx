import { cn } from '@/lib/utils';
import React from 'react';

interface LineConfig {
  orientation: 'vertical' | 'horizontal';
  start: number; // 0-1 (left to right for horizontal, top to bottom for vertical)
  end: number; // 0-1
  position: number; // 0-1 (top to bottom for horizontal, left to right for vertical)
  variant?: 'solid' | 'dashed';
}

interface BgPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  lines: LineConfig[];
  className?: string;
  children?: React.ReactNode;
}

export const BgPattern = ({ lines, className, children, ...props }: BgPatternProps) => {
  return (
    <div className={cn('relative', className)} {...props}>
      {/* Background lines */}
      <div className='pointer-events-none absolute inset-0 -z-10'>
        {lines.map((line, index) => {
          const isHorizontal = line.orientation === 'horizontal';
          const start = `${line.start * 100}%`;
          const end = `${line.end * 100}%`;
          const position = `${line.position * 100}%`;

          const lineStyles: React.CSSProperties = {
            position: 'absolute',
            backgroundColor: line.variant === 'dashed' ? 'transparent' : 'rgb(209 213 219)', // gray-300 instead of gray-200
            ...(isHorizontal
              ? {
                  height: '1px',
                  left: start,
                  right: `${100 - line.end * 100}%`,
                  top: position,
                }
              : {
                  width: '1px',
                  top: start,
                  bottom: `${100 - line.end * 100}%`,
                  left: position,
                }),
            ...(line.variant === 'dashed' && {
              backgroundImage: isHorizontal
                ? 'linear-gradient(to right, rgb(209 213 219) 50%, transparent 50%)' // gray-300
                : 'linear-gradient(to bottom, rgb(209 213 219) 50%, transparent 50%)', // gray-300
              backgroundSize: isHorizontal ? '8px 1px' : '1px 8px',
              backgroundRepeat: isHorizontal ? 'repeat-x' : 'repeat-y',
            }),
          };

          return <div key={index} style={lineStyles} />;
        })}
      </div>

      {/* Content */}
      {children}
    </div>
  );
};
