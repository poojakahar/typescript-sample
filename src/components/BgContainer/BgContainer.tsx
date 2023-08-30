import { FC } from 'react';
import { BgContainerProps } from './types';

const BgContainer: FC<BgContainerProps> = ({ children, className }) => {
  return (
    <div
      className={`bg-ghostWhite border-t border-t-lightPurple border-b border-b-lightPurple py-[32px] md:py-[61px] mt-[66px] md:mt-[100px] ${className}`}
    >
      {children}
    </div>
  );
};

export default BgContainer;
