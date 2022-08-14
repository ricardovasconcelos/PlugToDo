import styled from 'styled-components';

export const InputComponent = styled.input`
  border: 1px solid ${(props) => props.theme['gray-500']};
  height: 3rem;
  border-radius: 4px;
  padding: 1rem;
  line-height: 150%;
  width: 100%;

  ::placeholder {
    font-weight: bold;
    color: ${(props) => props.theme['gray-800']};
  }

  &:focus {
    border: 0;
  }
`;
