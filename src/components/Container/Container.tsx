import { FC } from 'react';
import { ContainerProps } from './types';

const Container: FC<ContainerProps> = ({ className, children }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
