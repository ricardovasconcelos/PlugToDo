import styled from 'styled-components';

interface TaskFieldContainerProps {
  done: boolean;
}

export const TaskFieldContainer = styled.div<TaskFieldContainerProps>`
  width: 20.75rem;
  height: 4.0625rem;
  border-radius: 9px;
  margin-bottom: 2rem;
  box-shadow: 3px 3px 5px ${(props) => props.theme['gray-400']};
  background-color: ${(props) => props.theme['white-100']};

  display: flex;
  align-items: flex-start;

  @media (max-width: 880px) {
    width: 17rem;
  }

  @media (max-width: 570px) {
    width: 10rem;
  }

  &::before {
    content: '';
    min-width: 0.75rem;
    height: inherit;
    display: flex;
    border-top-left-radius: 9px;
    border-bottom-left-radius: 9px;
    background-color: ${(props) =>
      props.done ? props.theme['secondary-100'] : props.theme['blue-100']};
  }
`;

export const TaskDetailContainer = styled.div`
  padding: 0.6rem 0.9rem;
  line-height: 150%;

  h3 {
    font-size: 0.875rem;
    width: 17rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (max-width: 880px) {
      width: 10rem;
    }

    @media (max-width: 570px) {
      width: 7rem;
    }
  }

  p {
    font-size: 0.75rem;

    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;
