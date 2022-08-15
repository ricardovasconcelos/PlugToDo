import { useState, useCallback } from 'react';
import { TaskField } from '../../components/TaskField';

import plus from '../../assets/plus.svg';
import { Sidebar } from '../../components/Sidebar';

import { useTasks } from '../../hooks/useTasks';
import { useNavigate } from 'react-router-dom';
import { useDisableScroll } from '../../hooks/useDisableScroll';

import { TaskContainer, TaskWrapper, TitleStatus, Divisor, NewTaskButton } from './styles';

import { useDrop } from 'react-dnd';

import { toast } from '../../lib/toast';

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

  const { tasks, updateTask } = useTasks();

  const [{ isOver }, toDoRef] = useDrop({
    accept: 'doing',
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const [{ isOver: isDoingOver }, doneRef] = useDrop({
    accept: 'done',
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const movePlayer = (item: any) => {
    updateTask({ ...item, done: !item.done });
    toast({ type: 'success', message: 'Movido com sucesso!' });
  };

  const isHoverDoneField = isOver;
  const isHoverDoingField = isDoingOver;

  return (
    <TaskContainer>
      <TaskWrapper ref={toDoRef} isDragging={isHoverDoneField}>
        <TitleStatus>TO DO</TitleStatus>
        {tasks?.map((task) => {
          const isTaskDone = task.done;
          if (!isTaskDone) {
            return (
              <TaskField
                key={task.id}
                id={task.id}
                title={task.title}
                cardType='done'
                description={task.description}
                done={task.done}
                onDropPlayer={movePlayer}
                onClickTask={() => handleClickTask(task.id)}
              />
            );
          }
        })}
      </TaskWrapper>

      <Divisor />

      <TaskWrapper ref={doneRef} isDragging={isHoverDoingField}>
        <TitleStatus>DONE</TitleStatus>
        {tasks?.map((task) => {
          const isTaskDone = task.done;
          if (isTaskDone) {
            return (
              <TaskField
                key={task.id}
                id={task.id}
                title={task.title}
                cardType='doing'
                description={task.description}
                onDropPlayer={movePlayer}
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
