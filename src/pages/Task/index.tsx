import { TaskField } from '../../components/TaskField';
import { TaskContainer, TitleStatus, Divisor, NewTaskButton } from './styles';

import plus from '../../assets/plus.svg';
import { Sidebar } from '../../components/Sidebar';
import { useState } from 'react';
import { useTasks } from '../../hooks/useTasks';

export function Task() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleOpenSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };

  const { tasks } = useTasks();

  return (
    <TaskContainer>
      <div>
        <TitleStatus>TO DO</TitleStatus>
        {tasks?.map((task) => {
          const isTaskDone = task.done;
          if (!isTaskDone) {
            return (
              <TaskField
                key={task.id}
                title={task.title}
                description={task.description}
                done={task.done}
              />
            );
          }
        })}
      </div>

      <Divisor />

      <div>
        <TitleStatus>DONE</TitleStatus>
        {tasks?.map((task) => {
          const isTaskDone = task.done;
          if (isTaskDone) {
            return (
              <TaskField
                key={task.id}
                title={task.title}
                description={task.description}
                done={task.done}
              />
            );
          }
        })}
      </div>

      <NewTaskButton onClick={handleOpenSidebar}>
        <img src={plus} alt='Ícone com símbolo mais' />
        NOVO
      </NewTaskButton>

      <Sidebar showSidebar={showSidebar} onShowSidebar={handleOpenSidebar} />
    </TaskContainer>
  );
}
