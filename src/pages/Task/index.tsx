import { TaskField } from '../../components/TaskField';
import { TaskContainer, TitleStatus, Divisor, NewTaskButton } from './styles';

import plus from '../../assets/plus.svg';
import { Sidebar } from '../../components/Sidebar';
import { useState } from 'react';

export function Task() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleOpenSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };

  return (
    <TaskContainer>
      <div>
        <TitleStatus>TO DO</TitleStatus>
        <TaskField
          title='Criar projeto para Plug Criar projeto para Plug'
          description='Desenvolver o PlugToDo '
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

      <NewTaskButton onClick={handleOpenSidebar}>
        <img src={plus} alt='Ícone com símbolo mais' />
        NOVO
      </NewTaskButton>

      <Sidebar showSidebar={showSidebar} onShowSidebar={handleOpenSidebar} />
    </TaskContainer>
  );
}
