import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(19, 21, 31, 0.877);

  position: absolute;
  z-index: 1;
  top: 0;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const SidebarWrapper = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  width: 23.75rem;
  height: 100vh;
  background-color: ${(props) => props.theme['white-100']};
  color: ${(props) => props.theme['black-100']};

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const SidebarHeader = styled.header`
  width: 100%;
  height: 3.1875rem;
  padding: 2rem 1rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  p {
    flex: 1;
    font-size: 1.5rem;
    line-height: 150%;
    font-weight: 400;
    color: ${(props) => props.theme['blue-500']};
  }
`;

export const CloseSidebar = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  &:active {
    box-shadow: none;
  }
`;

export const SidebarContent = styled.div`
  flex: 1;
  width: 100%;
  padding: 2rem;

  *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

export const SidebarFooter = styled.footer`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${(props) => props.theme['gray-400']};
`;
