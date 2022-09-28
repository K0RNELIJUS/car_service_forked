import styled from 'styled-components';

export const StyledBtnCarousel = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.white};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  & i {
    font-size: 20px;
  }

  &:hover {
    background: ${({ theme }) => theme.color.black};
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    scale: calc(1.335);

    color: ${({ theme }) => theme.color.white};

    &:active {
      scale: 1;
    }
  }
`;
