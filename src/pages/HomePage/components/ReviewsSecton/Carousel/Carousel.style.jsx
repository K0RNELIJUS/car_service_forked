import styled from 'styled-components';
import BREAKPOINTS from '../../../../../constants/breakpoints';

export const StyledCarousel = styled.div``;

export const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;

  width: 100%;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    justify-content: center;
    flex-direction: row;
  }
`;

export const StyledPaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 43px;
  width: 100%;
  max-width: 1300px;

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const StyledPaginationContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  width: 100%;
  height: 62px;

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    flex-direction: row;
    width: 100%;

    align-items: baseline;
    justify-content: space-between;
  }

  & ul {
    position: absolute;
    left: calc(50% - 86.5px);
    top: 31px;
    display: flex;
    flex-direction: row;
    gap: 15px;

    & li {
      list-style: none;
      cursor: pointer;
    }
  }
`;

export const StyledDot = styled.div`
  width: 32px;
  background-color: ${({ isActive }) => (isActive ? '#FF6433' : '#939191')};
  height: 0px;
  border: 2px solid ${({ isActive }) => (isActive ? '#FF6433' : '#939191')};

  transition: all 0.3s ease-in-out;

  display: none;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    display: block;
  }
`;

export const StyledBtnsWrapper = styled.div`
  width: 100%;
  gap: 34px;
  height: 62px;

  justify-content: center;
  align-items: center;
  display: flex;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    margin-top: 0;
    justify-content: flex-end;
  }
`;
