import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  secondary = false,
  className = '',
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-5 py-2.5 font-medium rounded-md transition-all duration-300
        ${
          secondary
            ? 'bg-white text-black border border-black hover:bg-gray-100'
            : 'bg-black text-white hover:bg-gray-800'
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;