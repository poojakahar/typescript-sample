import React from 'react';

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body1' | 'body2';
  className?: string;
  children: React.ReactNode;
}
