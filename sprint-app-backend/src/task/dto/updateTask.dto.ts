export interface UpdateTaskDTO {
  title: string;
  description: string;
  assigneeId?: number;
  status: 'ToDo' | 'InProgress' | 'InReview' | 'Finished';
}
