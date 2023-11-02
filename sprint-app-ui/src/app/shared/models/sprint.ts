import { Task } from './task';

export interface Sprint {
  id: number;
  name: string;
  createdAt: string;
  finishedAt: string | null;
  tasks: Task[] | undefined;
}
