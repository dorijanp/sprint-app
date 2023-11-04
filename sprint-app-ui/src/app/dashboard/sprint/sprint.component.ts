import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  _sprint: Sprint | undefined;
  ref: DynamicDialogRef | undefined;

  todoTasks: Task[] = [];
  inProgressTasks: Task[] = [];
  inReviewTasks: Task[] = [];
  finishedTasks: Task[] = [];

  constructor(public dialogService: DialogService) {}

  @Input() set sprint(value: Sprint | undefined) {
    if (value) {
      this._sprint = value;
      this.splitTasks(value);
    }
    console.log(value);
  }

  @Output() updateSprint = new EventEmitter();

  splitTasks(sprint: Sprint) {
    this.todoTasks = [];
    this.inProgressTasks = [];
    this.inReviewTasks = [];
    this.finishedTasks = [];

    for (const task of sprint.tasks!) {
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

    this.ref.onClose.subscribe((res) => {
      this.updateSprint.emit();
    });
  }
}
