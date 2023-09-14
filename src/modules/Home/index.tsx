import Customer from './Customer';
import HeroSection from './HeroSection';
import HowToWork from './HowToWork';
import Timeline from './Timeline';
import WorkEasier from './WorkEasier';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Timeline />
      <WorkEasier />
      <HowToWork />
      <Customer />
    </>
  );
};

export default Home;
