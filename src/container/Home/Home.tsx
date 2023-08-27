import { RightArrow } from '../../assets/Icons';
import { Layout, Typography } from '../../components';

const Home = () => {
  return (
    <Layout className='mt-[66px] flex flex-col items-center justify-center mx-[38px] gap-[16px] md:gap-[24px] md:mt-[100px]'>
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
        className='text-center md:w-[80%] lg:w-[60%] md:text-h1 text-black'
      >
        Manage the team everyone wants to be on
      </Typography>

      <Typography
        variant='body1'
        className='text-justify md:text-center md:w-[60%] lg:w-[40%] text-lightBlack'
      >
        Simple platform that lets you master what great managers do best, as
        develop trust, collaborate, and drive team performance.
      </Typography>
    </Layout>
  );
};

export default Home;
