import { useState } from 'react';
import ReviewCard from '../ReviewCard';
import BtnCarousel from '../BtnCarousel';
import useViewport from '../../../../../hooks/useViewport';
import UsePagination from '../../../../../hooks/usePagination';
import BREAKPOINTS from '../../../../../constants/breakpoints';
import {
  StyledCardsContainer,
  StyledPaginationWrapper,
  StyledPaginationContainer,
  StyledDot,
  StyledBtnsWrapper,
} from './Carousel.style';

const Carousel = ({ reviews }) => {
  // State

  const [page, setPage] = useState(0);

  const { isSmall } = useViewport(BREAKPOINTS.lg);
  const data = UsePagination(reviews, isSmall ? 1 : 2);

  // Functions
  const NextChangeHandler = (page, data) => {
    page + 1 < data.length ? setPage(page + 1) : setPage(0);
  };

  const PrevChangeHandler = (page, data) => {
    page <= 0 ? setPage(data.length - 1) : setPage(page - 1);
  };

  if (data.length - 1 < page) {
    return setPage(0);
  }

  return (
    <div>
      <StyledCardsContainer>
        <ReviewCard
          key={data[page][0].id}
          img={data[page][0].img}
          name={data[page][0].name}
          city={data[page][0].city}
          text={data[page][0].text}
        />
        {!isSmall && (
          <ReviewCard
            key={data[page][1].id}
            img={data[page][1].img}
            name={data[page][1].name}
            city={data[page][1].city}
            text={data[page][1].text}
          />
        )}
      </StyledCardsContainer>
      <StyledPaginationWrapper>
        <StyledPaginationContainer>
          <ul>
            {data.map((_, index) => (
              <StyledDot key={index} isActive={index === page} />
            ))}
          </ul>
          <StyledBtnsWrapper>
            <BtnCarousel
              icon={<i className='fa-solid fa-arrow-left-long'></i>}
              action={() => PrevChangeHandler(page, data)}
            />
            <BtnCarousel
              icon={<i className='fa-solid fa-arrow-right-long'></i>}
              action={() => NextChangeHandler(page, data)}
            />
          </StyledBtnsWrapper>
        </StyledPaginationContainer>
      </StyledPaginationWrapper>
    </div>
  );
};

export default Carousel;
