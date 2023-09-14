import { Container, InnerContainer, Typography } from '../../../components';

const Customer = () => {
  return (
    <Container>
      <InnerContainer className='flex flex-col items-center justify-center mt-[66px] md:mt-[100px] gap-[24px]'>
        <Typography
          variant='h5'
          className='text-center md:text-[40px] md:leading-[48px] md:text-start lg:w-[60%]'
        >
          Why customers love working with us
        </Typography>
        <Typography
          variant='body1'
          className='text-lightBlack text-center md:text-start lg:w-[80%]'
        >
          &#34;It&#39;s amazing what has helped me learn about my team. I
          don&#39;t worry about blindspots anymore, and 1-on-1s have never been
          more productive. The team loves it.&#34;
        </Typography>
      </InnerContainer>
    </Container>
  );
};

export default Customer;
