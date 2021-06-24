import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 250px;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 17px;
  color: #fff;
  background: #625BE7;
  border-radius: 36px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;
