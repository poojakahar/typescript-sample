import { FC } from 'react';
import { TextInputProps } from './types';

const TextInput: FC<TextInputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`py-[18px] px-[24px] border border-platinum w-full bg-white text-[16px] leading-[16px] font-600 w-full ${className}`}
      {...props}
    />
  );
};

export default TextInput;
