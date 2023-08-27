import { FC } from 'react';
import { LayoutProps } from './types';

const Layout: FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className='container'>
      <div className='absolute top-0 left-0 -z-20 bg-ghostWhite border border-lightPurple h-[50%] w-full rounded-br-[40%] rounded-bl-[40%]' />
      <div className={`max-w-screen-xl xl:mx-auto ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
