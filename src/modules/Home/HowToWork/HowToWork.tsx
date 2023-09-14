import { launchGraph } from '../../../assets/Images';
import {
  BgContainer,
  Button,
  Container,
  InnerContainer,
  Typography,
} from '../../../components';

const HowToWork = () => {
  return (
    <BgContainer>
      <Container>
        <InnerContainer>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-[90px]'>
            <img
              src={launchGraph}
              alt='Launch Graph'
              className='order-first md:order-last h-full'
            />
            <div className='flex flex-col gap-[24px]'>
              <Typography
                variant='h5'
                className='md:text-[40px] md:leading-[48px] md:text-start lg:w-[60%]'
              >
                We work how you work everyday
              </Typography>
              <Typography
                variant='body1'
                className='text-lightBlack text-center md:text-start lg:w-[80%]'
              >
                {
                  'Since the easiest things to use actually get used, we adapts to the way your team works – not the other way around.'
                }
              </Typography>
              <Button className='lg:w-[50%]'>Get started free</Button>
            </div>
          </div>
        </InnerContainer>
      </Container>
    </BgContainer>
  );
};

export default HowToWork;
