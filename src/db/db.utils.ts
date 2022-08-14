import { Response } from 'miragejs';

import type { Task } from './db.types';

export const tasks: Task[] = [
  {
    id: '1',
    title: 'Criar projeto para Plug',
    description: 'Desenvolver o PlugToDo',
    done: false,
  },
  { id: '2', title: 'Fazer café', description: '', done: true },
  { id: '3', title: 'Ir ao supermercado', description: 'Comprar pão e queijo', done: false },
  { id: '4', title: 'Academia', description: 'Treino de peito', done: true },
  {
    id: '5',
    title: 'Estudar sobre complexidade de algoritmos',
    description: 'Big O e algoritmos de ordenação',
    done: true,
  },
];

export function successResponse(status: number, data?: any) {
  return new Response(status, {}, data);
}

export function errorResponse(status: number, message?: string) {
  return new Response(status, {}, { errors: { message } });
}
