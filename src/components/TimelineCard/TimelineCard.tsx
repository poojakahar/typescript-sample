import { FC } from 'react';
import Typography from '../Typography/Typography';
import { TimelineCardProps } from './types';

const TimelineCard: FC<TimelineCardProps> = ({ title, desc }) => {
  return (
    <div className='flex flex-col py-[26px] px-[32px] border-b border-b-lightPurple hover:bg-lightPurple hover:cursor-pointer hover:border-b-[8px] hover:border-b-purple lg:hover:border-b-0 lg:hover:border-l-[8px] lg:hover:border-l-purple hover:rounded-tl-[10px] hover:rounded-tr-[10px] lg:hover:rounded-br-[10px] lg:hover:rounded-tl-none'>
      <Typography variant='h5'>{title}</Typography>
      <Typography variant='body1'>{desc}</Typography>
    </div>
  );
};

export default TimelineCard;
