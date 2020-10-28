import React from 'react';

export default function Row(
  {
    children,
    className = ''
  }: {
    children: React.ReactNode;
    className?: string;
  }
) {
  return (
    <div className={`row ${className}`}>
      {children}
    </div>
  );
}
