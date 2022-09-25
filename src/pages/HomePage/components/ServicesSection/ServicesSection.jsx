import TEXTS from '../../../../constants/texts';
import NAV_LINKS from '../../../../constants/navLinks';
import ArrowLink from '../../../../components/atoms/ArrowLink/ArrowLink';
import Button from '../../../../components/atoms/Button/Button';
import SERVICES from '../../../../constants/services';
import ServiceCard from '../../../../components/atoms/ServiceCard';
import { INPUTS } from '../../../../constants/inputs';
import Input from '../../../../components/atoms/Input';
import {
  StyledServicesSection,
  StyledContainerL,
  StyledCardsCont,
  StyledContainerR,
} from './ServicesSection.style';

const ServicesSection = () => {
  return (
    <StyledServicesSection>
      <StyledContainerL>
        <h2>{TEXTS.homePage.servicesSection.services.heading}</h2>
        <StyledCardsCont>
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              text={service.description}
            />
          ))}
        </StyledCardsCont>
        <ArrowLink
          link={NAV_LINKS[1].link}
          text={TEXTS.homePage.servicesSection.services.button.text}
        />
      </StyledContainerL>
      <StyledContainerR>
        <h3>{TEXTS.homePage.servicesSection.form.title}</h3>
        <form
          onClick={(e) => {
            e.preventDefault();
          }}>
          {INPUTS.map((input) => (
            <Input
              key={input.id}
              placeholder={input.placeholder}
              type={input.type}
              primary
            />
          ))}
        </form>
        <Button
          primary
          text={TEXTS.homePage.servicesSection.form.button.text}
        />
      </StyledContainerR>
    </StyledServicesSection>
  );
};

export default ServicesSection;
