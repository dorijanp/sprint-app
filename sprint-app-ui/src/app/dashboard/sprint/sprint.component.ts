import { Component, Input } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Sprint } from 'src/app/shared/models/sprint';
import { Task } from 'src/app/shared/models/task';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.css'],
  providers: [DialogService],
})
export class SprintComponent {
  private _sprint: Sprint | undefined;
  ref: DynamicDialogRef | undefined;

  todoTasks: Task[] = [];
  inProgressTasks: Task[] = [];
  inReviewTasks: Task[] = [];
  finishedTasks: Task[] = [];

  constructor(public dialogService: DialogService) {}

  @Input() set sprint(value: Sprint | undefined) {
    this._sprint = value;
    console.log(value);
    if (value)
      for (const task of value.tasks!) {
        switch (task.status) {
          case 'ToDo':
            this.todoTasks.push(task);
            break;
          case 'InProgress':
            this.inProgressTasks.push(task);
            break;
          case 'InReview':
            this.inReviewTasks.push(task);
            break;
          case 'Finished':
            this.finishedTasks.push(task);
            break;
        }
        task.createdAt = new Date(task.createdAt);
      }
  }

  openTaskDetailsDialog(task: Task) {
    this.ref = this.dialogService.open(TaskComponent, {
      header: 'Task details',
      data: { id: task.id },
      maximizable: true,
    });
  }
}
