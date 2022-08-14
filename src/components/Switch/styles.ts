import styled from 'styled-components';

export const SwithContainer = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-weight: bold;
    color: ${(props) => props.theme['gray-800']};
  }
`;

export const SwitchWrapper = styled.div`
  position: relative;
`;

export const SwitchItem = styled.label`
  width: 2.3125rem;
  height: 1rem;

  position: absolute;
  top: 0;
  left: 0;

  border-radius: 15px;
  background-color: ${(props) => props.theme['gray-300']};
  cursor: pointer;

  &::after {
    content: '';
    display: block;

    width: 1.25rem;
    height: 1.25rem;

    border-radius: 50%;
    margin-top: -2px;
    background-color: ${(props) => props.theme['gray-100']};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);

    transition: 0.2s;
  }
`;

export const SwitchCheckbox = styled.input`
  width: 2.625rem;
  height: 1.625rem;

  opacity: 0;
  z-index: 1;
  border-radius: 15px;

  &:checked + ${SwitchItem} {
    background: ${(props) => props.theme['gray-600']};
    &::after {
      content: '';
      display: block;
      width: 1.25rem;
      height: 1.25rem;

      border-radius: 50%;
      background: ${(props) => props.theme['blue-100']};

      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
