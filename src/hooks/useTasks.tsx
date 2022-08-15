import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { Task as TaskData } from '../db/db.types';

interface Task extends TaskData {}

type TaskInput = Omit<Task, 'id'>;

interface TasksProviderProps {
  children: ReactNode;
}

interface TasksContextData {
  tasks: Task[];
  createTask: (task: TaskInput) => Promise<void>;
  updateTask: (task: Task) => void;
}

const TasksContext = createContext<TasksContextData>({} as TasksContextData);

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    async function getTasks() {
      const { data } = await api.get('tasks');
      setTasks(data.tasks);
    }

    getTasks();
  }, []);

  async function createTask(taskInput: TaskInput) {
    const response = await api.post('/tasks', taskInput);
    const { task } = response.data;

    setTasks((oldState) => [...oldState, task]);
  }

  function updateTask(taskData: Task) {
    const updateSelectedTask = {
      id: taskData.id,
      title: taskData.title,
      description: taskData.description,
      done: taskData.done,
    };
    const filteredTasks = tasks.filter((task) => task.id !== taskData.id);

    setTasks([...filteredTasks, updateSelectedTask]);
  }

  return (
    <TasksContext.Provider value={{ tasks, createTask, updateTask }}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);
  return context;
}
