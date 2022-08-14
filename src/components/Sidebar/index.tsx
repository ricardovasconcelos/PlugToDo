import { useRef, useEffect, useState, useCallback, MouseEvent } from 'react';
import { useSpring, animated } from 'react-spring';

import { Button } from '../Button';
import { Input } from '../Input';

import close from '../../assets/close.svg';
import { Switch } from '../Switch';

import { useTasks } from '../../hooks/useTasks';

import {
  SidebarContainer,
  SidebarWrapper,
  SidebarContent,
  SidebarHeader,
  CloseSidebar,
  SidebarFooter,
} from './styles';

interface SidebarProps {
  showSidebar: boolean;
  onShowSidebar: (value: boolean) => void;
}

export const Sidebar = ({ showSidebar, onShowSidebar }: SidebarProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [done, setDone] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);

  const { createTask } = useTasks();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showSidebar ? 1 : 0,
    transform: showSidebar ? `translateY(0%)` : `translateY(-100%)`,
  });

  const keyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showSidebar) {
        onShowSidebar(false);
      }
    },
    [onShowSidebar, showSidebar],
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  function closeSidebar(event: MouseEvent<HTMLDivElement>) {
    if (sidebarRef.current === event.target) {
      onShowSidebar(false);
    }
  }

  function resetFormsOnCreateNewTask() {
    setTitle('');
    setDescription('');
    setDone(false);
  }

  function handleCreateNewTask() {
    try {
      createTask({
        title,
        description,
        done,
      });
      onShowSidebar(false);
      resetFormsOnCreateNewTask();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      {showSidebar ? (
        <SidebarContainer onClick={closeSidebar} ref={sidebarRef}>
          <animated.div style={animation}>
            <SidebarWrapper>
              <SidebarHeader>
                <CloseSidebar onClick={() => onShowSidebar(false)}>
                  <img src={close} alt='Botão para fechar modal de tarefas' />
                </CloseSidebar>
                <p>Nova Tarefa</p>
              </SidebarHeader>

              <SidebarContent>
                <Input
                  placeholder='Título'
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />

                <Input
                  placeholder='Descrição'
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />

                <Switch
                  label='Done'
                  checked={done}
                  onChange={() => setDone((prevState) => !prevState)}
                />
              </SidebarContent>

              <SidebarFooter>
                <Button width={20} onClick={handleCreateNewTask} disabled={!title}>
                  CRIAR TAREFA
                </Button>
              </SidebarFooter>
            </SidebarWrapper>
          </animated.div>
        </SidebarContainer>
      ) : null}
    </>
  );
};
