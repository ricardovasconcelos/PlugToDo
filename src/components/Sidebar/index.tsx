import { useRef, useEffect, useState, useCallback, MouseEvent } from 'react';
import { useSpring, animated } from 'react-spring';

import { Button } from '../Button';
import { Input } from '../Input';

import close from '../../assets/close.svg';
import { Switch } from '../Switch';

import { useTasks } from '../../hooks/useTasks';
import { useParams, useNavigate } from 'react-router-dom';

import { toast } from '../../lib/toast';

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

  const { tasks, createTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const { id } = useParams();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showSidebar ? 1 : 0,
    transform: showSidebar ? `translateY(0%)` : `translateY(-100%)`,
  });

  const handleCloseSidebarModal = useCallback(() => {
    navigate('/tasks');
    onShowSidebar(false);
    clearSidebarInputs();
  }, [navigate, onShowSidebar]);

  useEffect(() => {
    const keyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showSidebar) {
        handleCloseSidebarModal();
      }
    };
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [handleCloseSidebarModal, showSidebar]);

  useEffect(() => {
    const filteredTask = tasks.find((task) => task.id === id);
    if (filteredTask) {
      setTitle(filteredTask.title);
      setDescription(filteredTask.description ?? '');
      setDone(filteredTask.done);
    }
  }, [id, tasks]);

  function handleClickOutsideSidebar(event: MouseEvent<HTMLDivElement>) {
    if (sidebarRef.current === event.target) {
      handleCloseSidebarModal();
    }
  }

  function clearSidebarInputs() {
    setTitle('');
    setDescription('');
    setDone(false);
  }

  function handleSubmitSidebarButton() {
    try {
      if (hasTaskIDSelected) {
        updateTask({
          id,
          title,
          description,
          done,
        });
        toast({ type: 'success', message: 'Alterado com sucesso!' });
      } else {
        createTask({
          title,
          description,
          done,
        });
        toast({ type: 'success', message: 'Sucesso!' });
      }
      handleCloseSidebarModal();
    } catch (e) {
      toast({ type: 'error', message: 'Ops! Deu ruim, tente novamente!' });
    }
  }

  const hasTaskIDSelected = id;

  return (
    <>
      {showSidebar ? (
        <SidebarContainer onClick={handleClickOutsideSidebar} ref={sidebarRef}>
          <animated.div style={animation}>
            <SidebarWrapper>
              <SidebarHeader>
                <CloseSidebar onClick={handleCloseSidebarModal}>
                  <img src={close} alt='Botão para fechar modal de tarefas' />
                </CloseSidebar>
                <p>{hasTaskIDSelected ? 'Editar Tarefa' : 'Nova Tarefa'}</p>
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
                <Button width={20} onClick={handleSubmitSidebarButton} disabled={!title}>
                  {hasTaskIDSelected ? 'EDITAR TAREFA' : 'CRIAR TAREFA'}
                </Button>
              </SidebarFooter>
            </SidebarWrapper>
          </animated.div>
        </SidebarContainer>
      ) : null}
    </>
  );
};
