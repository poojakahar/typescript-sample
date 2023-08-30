import { FC } from 'react';
import { InnerContainerProps } from './types';

const InnerContainer: FC<InnerContainerProps> = ({
  className = '',
  children,
}) => {
  return (
    <div
      className={`mx-[20px] md:mx-[38px] max-w-screen-xl xl:mx-auto flex flex-col items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
};

export default InnerContainer;
