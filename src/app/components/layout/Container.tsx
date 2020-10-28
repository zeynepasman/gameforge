import React from 'react';

export default function Container({ children, className = '', ...others }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`${className} container`} {...others}>{children}</div>
  );
}
