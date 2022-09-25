import TEXTS from '../../../../constants/texts';
import {
  StyledContactSection,
  StyledFlexWrapper,
} from './ContactSection.style';
import Form from '../Form/Form';
import Contacts from '../Contacts/Contacts';

const ContactSection = () => {
  return (
    <StyledContactSection>
      <h1>{TEXTS.contactPage.title}</h1>
      <StyledFlexWrapper>
        <Form />
        <Contacts />
      </StyledFlexWrapper>
    </StyledContactSection>
  );
};

export default ContactSection;
