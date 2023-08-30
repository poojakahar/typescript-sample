import { FC } from 'react';
import { LayoutProps } from './types';

const Layout: FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div>
      <div className='absolute top-0 left-0 -z-20 bg-ghostWhite border border-lightPurple h-[50%] w-full rounded-br-[40%] rounded-bl-[40%] md:h-[70%] lg:h-[100%]' />
      {children}
    </div>
  );
};

export default Layout;
