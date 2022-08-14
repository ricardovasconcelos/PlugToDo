import styled from 'styled-components';

export const TaskContainer = styled.main`
  display: flex;
  padding-top: 10rem;
  justify-content: space-evenly;
  height: calc(100vh - 3.75rem);
`;

export const TitleStatus = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  color: ${(props) => props.theme['blue-100']};
`;

export const Divisor = styled.span`
  border: 1px solid ${(props) => props.theme['gray-300']};
  height: 70%;
`;
