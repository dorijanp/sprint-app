import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Task } from 'src/app/shared/models/task';
import { TaskDetailsComponent } from '../task-details/task-details.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  constructor(private dialogService: DialogService) {}

  @Input() task!: Task;
  @Output() taskUpdated = new EventEmitter();
  ref: DynamicDialogRef | undefined;

  openTaskDetailsDialog(task: Task) {
    this.ref = this.dialogService.open(TaskDetailsComponent, {
      header: 'Task details',
      data: { id: task.id },
      maximizable: true,
    });

    this.ref.onClose.subscribe((res) => {
      this.taskUpdated.emit();
    });
  }
}
