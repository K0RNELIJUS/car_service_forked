import styled from 'styled-components';
import BREAKPOINTS from '../../../../constants/breakpoints';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    width: 50%;
  }

  & input {
    height: 72px;
  }

  & button {
    margin-top: 48px;
  }
`;
