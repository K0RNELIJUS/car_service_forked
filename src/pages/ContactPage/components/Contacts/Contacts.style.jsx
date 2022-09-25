import styled from 'styled-components';

export const StyledContacts = styled.dl`
  display: flex;
  flex-direction: column;
  & dt {
    ${({ theme }) => theme.body2};
    color: ${({ theme }) => theme.color.black};
    opacity: 0.7;

    margin-bottom: 2px;

    &:not(:first-of-type) {
      margin-top: 32px;
    }
  }
  & dd {
    ${({ theme }) => theme.title2};
    color: ${({ theme }) => theme.color.black};
    white-space: pre-line;
  }
`;
