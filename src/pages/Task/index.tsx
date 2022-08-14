import { TaskField } from '../../components/TaskField';
import { TaskContainer, TitleStatus, Divisor } from './styles';

export function Task() {
  return (
    <TaskContainer>
      <div>
        <TitleStatus>TO DO</TitleStatus>
        <TaskField
          title='Criar projeto para Plug Criar projeto para Plug'
          description='Desenvolver o PlugToDo'
          done={false}
        />
        <TaskField
          title='Criar projeto para Plug'
          description='Desenvolver o PlugToDo'
          done={false}
        />
      </div>

      <Divisor />

      <div>
        <TitleStatus>DONE</TitleStatus>
        <TaskField
          title='Criar projeto para Plug'
          description='Desenvolver o PlugToDo'
          done={true}
        />
      </div>
    </TaskContainer>
  );
}
