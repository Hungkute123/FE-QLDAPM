import React from 'react';
import './Button.scss';

export const Button: React.FC<IButton> = ({
  className,
  type,
  onClick,
  disabled,
  children,
  width,
  height,
}) => {
  return (
    <button className={`button ${className}`} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};