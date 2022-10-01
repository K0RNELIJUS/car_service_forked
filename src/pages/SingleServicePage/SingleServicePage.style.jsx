import styled from 'styled-components';
import BREAKPOINTS from '../../constants/breakpoints';

export const StyledSingleServicePage = styled.main`
  max-width: 1920px;

  & h1 {
    ${({ theme }) => theme.h1}
    text-align: center;
    max-width: 1300px;
    color: ${({ theme }) => theme.color.black};
    margin: 0 auto 46px auto;

    @media screen and (min-width: ${BREAKPOINTS.xxl}) {
      margin: 0 auto 96px auto;
    }

    @media screen and (min-width: ${BREAKPOINTS.xxl}) {
      text-align: start;
    }
  }
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0px 20px 64px 20px;
  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 0px 40px 64px 40px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    flex-direction: row;
    padding: 0px 0px 128px 0px;
    gap: 96px;
  }
`;
