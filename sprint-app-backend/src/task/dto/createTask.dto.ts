export interface CreateTaskDTO {
  title: string;
  description: string;
  creatorId: number;
  assigneeId?: number;
  sprintId: number;
}
