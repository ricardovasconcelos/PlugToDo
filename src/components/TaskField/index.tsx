import { TaskFieldContainer, TaskDetailContainer } from './styles';
import { Task } from '../../db/db.types';

interface TaskFieldProps extends Omit<Task, 'id'> {
  onClickTask: () => void;
}

export function TaskField({ title, description, done, onClickTask }: TaskFieldProps) {
  return (
    <TaskFieldContainer done={done} onClick={onClickTask}>
      <TaskDetailContainer>
        <h3>{title}</h3>
        <p>{description}</p>
      </TaskDetailContainer>
    </TaskFieldContainer>
  );
}
