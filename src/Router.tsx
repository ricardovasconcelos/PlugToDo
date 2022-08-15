import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Task } from './pages/Task';

import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/tasks' element={<Task />} />
        <Route path='/tasks/:id' element={<Task />} />
      </Route>
    </Routes>
  );
}
