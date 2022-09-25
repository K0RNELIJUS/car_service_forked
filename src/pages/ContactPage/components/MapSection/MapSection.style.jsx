import styled from 'styled-components';
import BREAKPOINTS from '../../../../constants/breakpoints';

export const StyledMapSection = styled.section`
  width: 100%;
  max-width: 1920px;
  position: relative;

  margin-top: 200px;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    margin-top: 358px;
  }

  & img {
    height: 224px;
    width: 100%;
    display: flex;

    background-size: cover;
    object-fit: cover;

    @media screen and (min-width: ${BREAKPOINTS.lg}) {
      height: 395px;
    }
  }
`;

export const StyledMapCont = styled.div`
  position: absolute;

  top: -80%;
  left: 0;
  right: 0;

  height: 300px;
  width: 100%;
  max-width: 1280px;

  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 0 40px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    height: 512px;
  }
`;
