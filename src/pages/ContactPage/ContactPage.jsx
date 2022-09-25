import { StyledContactPage } from './ContactPage.style';
import ContactSection from './components/ContactSection/ContactSection';
import MapSection from './components/MapSection/MapSection';
import imgMapSec from '../../assets/images/contactPage/contact.jpg';

const ContactPage = () => {
  return (
    <StyledContactPage>
      <ContactSection />
      <MapSection img={imgMapSec} />
    </StyledContactPage>
  );
};

export default ContactPage;
