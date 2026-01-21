import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <button
      className={`
         rounded-lg transition-all ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
