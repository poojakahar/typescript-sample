import { timeline } from '../../../assets/Images';
import { BgContainer, Container, TimelineCard } from '../../../components';
import { timelineList } from './constants';

const Timeline = () => {
  return (
    <BgContainer>
      <Container>
        <div className='max-w-screen-xl xl:mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-[32px] md:gap-[80px]'>
            <img src={timeline} alt='Timeline' />
            <div className='grid grid-flow-rows'>
              {timelineList.map((data, index) => (
                <TimelineCard
                  key={`Timeline-list-${index}`}
                  title={data.title}
                  desc={data.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </BgContainer>
  );
};

export default Timeline;
