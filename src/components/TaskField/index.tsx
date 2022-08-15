import { useDrag } from 'react-dnd';

import { Task } from '../../db/db.types';

import { TaskFieldContainer, TaskDetailContainer } from './styles';

interface TaskFieldProps extends Task {
  cardType: string;
  onClickTask: () => void;
  onDropPlayer: (item: Task) => void;
}

export function TaskField({
  id,
  title,
  description,
  done,
  cardType,
  onDropPlayer,
  onClickTask,
}: TaskFieldProps) {
  const [{ isDragging }, dragRef] = useDrag({
    type: cardType,
    item: {
      id,
      title,
      description,
      done,
      type: cardType,
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        onDropPlayer(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <TaskFieldContainer done={done} onClick={onClickTask} ref={dragRef} isDragging={isDragging}>
      <TaskDetailContainer>
        <h3>{title}</h3>
        <p>{description}</p>
      </TaskDetailContainer>
    </TaskFieldContainer>
  );
}
