import styled from 'styled-components';
import BREAKPOINTS from '../../../../../../constants/breakpoints';

export const StyledInfoWindowContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 10px;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 20px;
  }

  & dl {
    font-weight: 600;
    font-size: 12px;
    & dt {
      color: ${({ theme }) => theme.color.black};
      opacity: 0.7;

      margin-bottom: 1px;

      &:not(:first-of-type) {
        margin-top: 10px;
      }
    }
    & dd {
      color: ${({ theme }) => theme.color.black};

      white-space: pre-line;
    }
  }
`;
