import styled from 'styled-components';
import { Button } from '../../components/Button';

export const TaskContainer = styled.main`
  display: flex;
  padding: 6rem 5rem 0;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    padding: 6rem 0;
  }
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

export const NewTaskButton = styled(Button)`
  position: absolute;
  bottom: 3%;
  right: 2%;
  border-radius: 100px;
  font-size: 0.875rem;
  line-height: 150%;
  letter-spacing: 0.0781rem;

  display: flex;
  align-items: center;

  width: 6.8125rem;

  img {
    padding-right: 5px;
  }
`;
