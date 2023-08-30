import { FC } from 'react';
import { Typography } from '../../../../../components';
import { CardProps } from '../../types';

const Card: FC<CardProps> = ({ icon, title, desc }) => {
  return (
    <div className='flex flex-col items-center justify-center md:justify-start'>
      <img
        src={icon}
        alt='Icon'
        className='h-[48px] w-[48px] md:h-[64px] md:w-[64px]'
      />
      <Typography variant='h5' className='leading-[18px] mt-[16px] mb-[8px]'>
        {title}
      </Typography>
      <Typography variant='body1' className='text-center text-lightBlack'>
        {desc}
      </Typography>
    </div>
  );
};

export default Card;
