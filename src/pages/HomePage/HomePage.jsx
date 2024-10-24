import { Helmet } from 'react-helmet-async';
import HeroSection from '../../components/HeroSection/HeroSection';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HeroSection />
    </>
  );
};

export default HomePage;
