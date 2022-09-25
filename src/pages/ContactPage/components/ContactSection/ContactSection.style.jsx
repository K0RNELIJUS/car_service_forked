import styled from 'styled-components';
import BREAKPOINTS from '../../../../constants/breakpoints';

export const StyledContactSection = styled.section`
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  max-width: 1280px;

  margin: 0 auto;

  & h1 {
    ${({ theme }) => theme.h1}
    max-width: 507px;
    margin-bottom: 48px;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 40px 40px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    padding: 80px 40px;
  }
`;

export const StyledFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
