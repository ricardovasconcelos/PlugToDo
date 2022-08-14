import { TaskFieldContainer, TaskDetailContainer } from './styles';
import { Task } from '../../db/db.types';

interface TaskFieldProps extends Omit<Task, 'id'> {}

export function TaskField({ title, description, done }: TaskFieldProps) {
  return (
    <TaskFieldContainer done={done}>
      <TaskDetailContainer>
        <h3>{title}</h3>
        <p>{description}</p>
      </TaskDetailContainer>
    </TaskFieldContainer>
  );
}
