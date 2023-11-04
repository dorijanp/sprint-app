import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Sprint } from 'src/app/shared/models/sprint';
import { Task } from 'src/app/shared/models/task';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { CreateTaskComponent } from '../create-task/create-task.component';

interface TaskList {
  ToDo: Task[];
  InProgress: Task[];
  InReview: Task[];
  Finished: Task[];
}

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.css'],
  providers: [DialogService],
})
export class SprintComponent {
  _sprint: Sprint | undefined;
  ref: DynamicDialogRef | undefined;

  tasks!: TaskList;

  constructor(public dialogService: DialogService) {}

  @Input() set sprint(value: Sprint | undefined) {
    if (value) {
      this._sprint = value;
      this.splitTasks(value);
    }
  }

  @Output() updateSprint = new EventEmitter();

  splitTasks(sprint: Sprint) {
    this.tasks = {
      ToDo: [],
      InProgress: [],
      InReview: [],
      Finished: [],
    };

    for (const task of sprint.tasks!) {
      this.tasks[task.status as keyof TaskList].push(task);
      task.createdAt = new Date(task.createdAt);
    }

    console.log(this.tasks);
  }

  createTask() {
    this.ref = this.dialogService.open(CreateTaskComponent, {
      header: 'Task details',
      data: { sprintId: this._sprint?.id },
      maximizable: true,
    });

    this.ref.onClose.subscribe((res) => {
      this.updateSprint.emit();
    });
  }

  draggedTask: Task | null = null;

  dragStart(task: Task) {
    this.draggedTask = task;
  }

  drop(event: DragEvent) {
    console.log(event);
    if (!this.draggedTask) return;

    const target: HTMLElement = event.target as HTMLElement;

    this.tasks[target.ariaPlaceholder! as keyof TaskList] = [
      ...this.tasks[target.ariaPlaceholder! as keyof TaskList],
      this.draggedTask,
    ];
  }

  dragEnd(event: DragEvent) {
    this.draggedTask = null;
  }
}
