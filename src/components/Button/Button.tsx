import { FC } from 'react';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={`text-body1 font-700 leading-[16px] bg-purple rounded-[4px] text-white w-full py-[18px] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
