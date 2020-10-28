import React, { useMemo } from 'react';

export default function Col(
  {
    children,
    className = '',
    span = 12
  }: {
    children: React.ReactNode;
    className?: string;
    span?: 1 | 2 | 3 | 4 | 6 | 8 | 9 | 10 | 12
  }
) {

  const flexBasis = useMemo(() => {
    return `${(100 / 12) * span}%`
  }, [span])

  return (
    <div className={`col ${className}`} style={{ flexBasis }}>
      {children}
    </div>
  );
}
