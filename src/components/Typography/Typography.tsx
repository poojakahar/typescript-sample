import { FC } from 'react';
import { TypographyProps } from './types';

const Typography: FC<TypographyProps> = ({ variant, children, className }) => {
  switch (variant) {
    case 'h1':
      return <h1 className={`text-h1 font-Inter ${className}`}>{children}</h1>;

    case 'h2':
      return <h2 className={`text-h2 font-Inter ${className}`}>{children}</h2>;

    case 'h3':
      return <h2 className={`text-h3 font-Inter ${className}`}>{children}</h2>;

    case 'body2':
      return <p className={`text-body2 font-Inter ${className}`}>{children}</p>;

    default:
      return <p className={`text-body1 font-Inter ${className}`}>{children}</p>;
  }
};

export default Typography;
