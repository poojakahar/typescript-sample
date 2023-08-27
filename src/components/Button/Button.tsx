import { FC } from 'react';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={`text-body1 font-500 leading-[16px] bg-purple ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
