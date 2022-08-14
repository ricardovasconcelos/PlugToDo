import { useRef, useEffect, useCallback, MouseEvent } from 'react';
import { useSpring, animated } from 'react-spring';
import { Button } from '../Button';
import { Input } from '../Input';

import {
  SidebarContainer,
  SidebarWrapper,
  SidebarContent,
  SidebarHeader,
  CloseSidebar,
  SidebarFooter,
} from './styles';

import close from '../../assets/close.svg';

interface SidebarProps {
  showSidebar: boolean;
  onShowSidebar: (value: boolean) => void;
}

export const Sidebar = ({ showSidebar, onShowSidebar }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showSidebar ? 1 : 0,
    transform: showSidebar ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeSidebar = (event: MouseEvent<HTMLDivElement>) => {
    if (sidebarRef.current === event.target) {
      onShowSidebar(false);
    }
  };

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
                <Input placeholder='Título' />

                <Input placeholder='Descrição' />
              </SidebarContent>

              <SidebarFooter>
                <Button width={20}>CRIAR TAREFA</Button>
              </SidebarFooter>
            </SidebarWrapper>
          </animated.div>
        </SidebarContainer>
      ) : null}
    </>
  );
};
