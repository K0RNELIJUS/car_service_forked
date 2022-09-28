import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import ProcessSection from './components/processSection/ProcessSection';
import CardsSection from './components/CardsSection/CardsSection';
import CallToAction from '../../components/organisms/CallToAction';
import ExperienceSection from './components/ExperienceSection/ExperienceSection';
import BrandsSection from './components/BrandsSection';
import ReviewsSection from './components/ReviewsSecton';
import FaqSection from './components/FaqSection';
import FooterContacts from '../../components/organisms/FooterContacts';

import { StyledHomePage } from './HomePage.style';

const HomePage = () => {
  return (
    <StyledHomePage>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <CardsSection />
      <CallToAction />
      <ExperienceSection background={'#F2F2F2'} />
      <BrandsSection />
      <ReviewsSection />
      <FaqSection />
      <FooterContacts />
    </StyledHomePage>
  );
};

export default HomePage;
