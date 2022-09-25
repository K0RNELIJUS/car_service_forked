import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  padding: 22.91px 40.33px;
  background-color: ${(props) => (props.primary ? '#fff' : '#F2F2F2')};
  border: none;
  outline: none;

  & ::placeholder {
    ${({ theme }) => theme.body2};
    color: ${(props) => (props.primary ? 'rgba(30, 27, 27, 0.5)' : '#1E1B1B')};
  }
`;
