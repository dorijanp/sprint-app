import { User } from './user';

export interface Task {
  id: number;
  createdAt: Date;
  description: string;
  status: string;
  title: string;
  assignee?: User;
  creator: User;
}
