import { FC } from 'react';
import { TypographyProps } from './types';

const Typography: FC<TypographyProps> = ({ variant, children, className }) => {
  switch (variant) {
    case 'h1':
      return (
        <h1 className={`text-h1 text-black font-Inter ${className}`}>
          {children}
        </h1>
      );

    case 'h2':
      return (
        <h2 className={`text-h2 text-black font-Inter ${className}`}>
          {children}
        </h2>
      );

    case 'h3':
      return (
        <h2 className={`text-h3 text-black font-Inter ${className}`}>
          {children}
        </h2>
      );

    case 'h4':
      return (
        <h2 className={`text-h4 text-black font-Inter ${className}`}>
          {children}
        </h2>
      );

    case 'h5':
      return (
        <h2 className={`text-h5 text-black font-Inter ${className}`}>
          {children}
        </h2>
      );

    case 'body2':
      return (
        <p className={`text-body2 text-black font-Inter ${className}`}>
          {children}
        </p>
      );

    case 'body3':
      return (
        <p className={`text-body3 text-black font-Inter ${className}`}>
          {children}
        </p>
      );

    default:
      return (
        <p className={`text-body1 text-black font-Inter ${className}`}>
          {children}
        </p>
      );
  }
};

export default Typography;
