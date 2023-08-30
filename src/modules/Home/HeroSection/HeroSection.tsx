import { RightArrow } from '../../../assets/Icons';
import {
  airbnb,
  facebook,
  google,
  graph2,
  hubspot,
  slack,
} from '../../../assets/Images';
import { Button, Slider, TextInput, Typography } from '../../../components';

const HeroSection = () => {
  return (
    <>
      <div className='bg-honeydew rounded-[100px] py-[4px] px-[16px]'>
        <Typography
          variant='body3'
          className='flex flex-row items-center md:text-body1'
        >
          Get account of $59{' '}
          <RightArrow className='ml-1 md:w-[5px] md:h-[8px]' />
        </Typography>
      </div>

      <Typography
        variant='h3'
        className='text-center md:w-[80%] lg:w-[60%] md:text-h1'
      >
        Manage the team everyone wants to be on
      </Typography>

      <Typography
        variant='body1'
        className='text-center md:w-[60%] lg:w-[40%] text-lightBlack'
      >
        Simple platform that lets you master what great managers do best, as
        develop trust, collaborate, and drive team performance.
      </Typography>
      <div className='grid grid-cols-1 gap-[8px] md:grid-cols-3 md:gap-0 w-full md:w-auto'>
        <TextInput
          placeholder='name@yourcompany.com'
          className='md:col-span-2'
        />
        <Button className='rounded-none rounded-tr rounded-br'>
          Try it free
        </Button>
      </div>
      <img src={graph2} alt='Graph' className='w-full' />
      <Typography
        variant='body2'
        className='text-[11px] leading-[11px] uppercase md:text-[16px] md:leading-[16px]'
      >
        TRUSTED BY OVER <strong className='font-700'>10.000+</strong> WORLD’S
        BEST TEAMS
      </Typography>
      <div className='relative'>
        <Slider className='!flex flex-row'>
          <img src={google} alt='google' />
          <img src={airbnb} alt='airbnb' />
          <img src={facebook} alt='facebook' />
          <img src={hubspot} alt='hubspot' />
          <img src={slack} alt='Slack' />
        </Slider>
      </div>
    </>
  );
};

export default HeroSection;
