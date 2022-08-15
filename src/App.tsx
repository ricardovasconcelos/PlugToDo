import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { ToastContainer } from 'react-toastify';

import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';

import { makeServer } from './db';
import { TasksProvider } from './hooks/useTasks';

import 'react-toastify/dist/ReactToastify.min.css';

makeServer();
export function App() {
  return (
    <TasksProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
        <ToastContainer />
      </ThemeProvider>
    </TasksProvider>
  );
}
