import { Container, InnerContainer, Typography } from '../../../components';
import { Card } from './components';
import { workList } from './constants';

const WorkEasier = () => {
  return (
    <Container>
      <InnerContainer className='my-[56px] md:my-[100px]'>
        <Typography
          variant='h4'
          className='leading-[15px] md:text-[32px] md:leading-[40px]'
        >
          Make your work easier
        </Typography>
        <div className='grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-[48px] mt-[40px]'>
          {workList.map((data, index) => (
            <Card
              key={`work-easier-${index}`}
              icon={data.icon}
              title={data.title}
              desc={data.desc}
            />
          ))}
        </div>
      </InnerContainer>
    </Container>
  );
};

export default WorkEasier;
