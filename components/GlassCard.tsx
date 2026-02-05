import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
    children, 
    className = '',
    noPadding = false 
}) => {
  return (
    <div className={`glass-panel rounded-2xl transition-all duration-300 ${noPadding ? '' : 'p-8'} ${className}`}>
      {children}
    </div>
  );
};