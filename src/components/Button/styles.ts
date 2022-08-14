import styled from 'styled-components';

interface ButtonProps {
  width?: number;
}

export const ButtonComponent = styled.button<ButtonProps>`
  border: 0;
  padding: 1rem;
  font-size: 0.875rem;
  font-weight: bold;
  border-radius: 6px;
  width: ${(props) => props.width}rem;
  color: ${(props) => props.theme['white-100']};
  background-color: ${(props) => props.theme['brand-100']};
  cursor: pointer;
  transition: filter 0.2s;
  letter-spacing: 0.0781rem;

  &:hover {
    filter: opacity(90%);
  }

  &:disabled {
    background-color: ${(props) => props.theme['gray-200']};
    color: ${(props) => props.theme['gray-700']};
  }
`;
