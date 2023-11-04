export interface CreateTaskDTO {
  status: 'ToDo' | 'InProgress' | 'InReview' | 'Finished';
  title: string;
  description: string;
  creatorId: number;
  assigneeId?: number;
  sprintId: number;
}
