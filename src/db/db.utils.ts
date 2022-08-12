import { Response } from "miragejs";

import type { Task } from "./db.types";

export const tasks: Task[] = [
  {
    id: "1",
    title: "Criar projeto para Plug",
    description: "Desenvolver o PlugToDo",
    done: false,
  },
  { id: "2", title: "Fazer café", description: "", done: true },
];

export function successResponse(status: number, data?: any) {
  return new Response(status, {}, data);
}

export function errorResponse(status: number, message?: string) {
  return new Response(status, {}, { errors: { message } });
}
