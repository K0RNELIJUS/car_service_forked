import TEXTS from '../../../../constants/texts';
import Carousel from './Carousel';
import REVIEWS from '../../../../constants/reviews';
import { StyledRewiewSection } from './ReviewsSection.style';

const ReviewsSection = () => {
  return (
    <StyledRewiewSection>
      <h3>{TEXTS.homePage.reviwsSection.heading}</h3>
      <Carousel reviews={REVIEWS} />
    </StyledRewiewSection>
  );
};

export default ReviewsSection;
