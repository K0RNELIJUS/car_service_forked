import styled from 'styled-components';
import BREAKPOINTS from '../../../../constants/breakpoints';

export const StyledRewiewSection = styled.section`
  background: ${({ theme }) => theme.color.lightGrey};
  padding: 64px 20px;

  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 64px 40px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    padding: 128px 40px;
  }

  & h3 {
    ${({ theme }) => theme.h3};
    color: ${({ theme }) => theme.color.black};
    max-width: 909px;
    text-align: center;
    margin-bottom: 64px;
    @media screen and (min-width: ${BREAKPOINTS.xl}) {
      margin-bottom: 94px;
    }
  }
`;
