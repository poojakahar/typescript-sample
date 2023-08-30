import { Layout } from '../../components';
import { HomeModule } from '../../modules';

const Home = () => {
  return (
    <Layout className='mt-[66px] flex flex-col items-center justify-center mx-[38px] gap-[16px] md:gap-[24px] md:mt-[100px]'>
      <HomeModule />
    </Layout>
  );
};

export default Home;
