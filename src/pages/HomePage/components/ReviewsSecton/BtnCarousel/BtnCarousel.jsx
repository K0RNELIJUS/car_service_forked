import { StyledBtnCarousel } from './BtnCarousel.style';

const BtnCarousel = ({ icon, action }) => {
  return <StyledBtnCarousel onClick={action}>{icon}</StyledBtnCarousel>;
};

export default BtnCarousel;
