import { useState, useCallback } from 'react';
import { TaskField } from '../../components/TaskField';

import plus from '../../assets/plus.svg';
import { Sidebar } from '../../components/Sidebar';

import { useTasks } from '../../hooks/useTasks';
import { useNavigate } from 'react-router-dom';
import { useDisableScroll } from '../../hooks/useDisableScroll';

import { TaskContainer, TaskWrapper, TitleStatus, Divisor, NewTaskButton } from './styles';

export function Task() {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  const handleOpenSidebar = useCallback(() => {
    setShowSidebar((prevState) => !prevState);
  }, []);

  useDisableScroll(showSidebar);

  function handleClickTask(id: string) {
    navigate(`/tasks/${id}`);
    handleOpenSidebar();
  }

  const { tasks } = useTasks();

  return (
    <TaskContainer>
      <TaskWrapper>
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
                onClickTask={() => handleClickTask(task.id)}
              />
            );
          }
        })}
      </TaskWrapper>

      <Divisor />

      <TaskWrapper>
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
                onClickTask={() => handleClickTask(task.id)}
              />
            );
          }
        })}
      </TaskWrapper>

      <NewTaskButton onClick={handleOpenSidebar}>
        <img src={plus} alt='Ícone com símbolo mais' />
        NOVO
      </NewTaskButton>

      <Sidebar showSidebar={showSidebar} onShowSidebar={handleOpenSidebar} />
    </TaskContainer>
  );
}
