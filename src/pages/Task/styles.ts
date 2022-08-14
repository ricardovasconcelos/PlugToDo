import styled from 'styled-components';

export const TaskContainer = styled.main`
  display: flex;
  padding: 6rem 5rem 0;
  justify-content: space-evenly;
`;

export const TitleStatus = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  padding-bottom: 4rem;
  color: ${(props) => props.theme['blue-100']};
`;

export const Divisor = styled.hr`
  border: 1px solid ${(props) => props.theme['gray-300']};
  height: inherit;
  min-height: 20rem;
  margin: 3rem 0 5rem;
`;
