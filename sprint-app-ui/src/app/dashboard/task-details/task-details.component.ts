import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Task } from 'src/app/shared/models/task';
import { TaskService } from '../task.service';
import { User } from 'src/app/shared/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent {
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private taskService: TaskService,
    private userService: UserService
  ) {}

  task!: Task;
  users!: User[];
  status = [
    {
      display: 'To do',
      value: 'ToDo',
    },
    {
      display: 'In Progress',
      value: 'InProgress',
    },
    {
      display: 'In Review',
      value: 'InReview',
    },
    {
      display: 'Finished',
      value: 'Finished',
    },
  ];

  ngOnInit() {
    this.taskService.getTask(this.config.data.id).subscribe((res: Task) => {
      this.task = res;
    });
    this.userService.getUsers().subscribe((res: User[]) => {
      this.users = res;
      this.users = this.users.map((user) => {
        return { ...user, name: user.firstName + ' ' + user.lastName };
      });

      console.log(res);
    });
  }

  loading = false;
  submit() {
    this.loading = true;

    const taskForSubmition = {
      title: this.task.title,
      description: this.task.description,
      status: this.task.status,
      assigneeId: this.task.assignee?.id,
    };

    this.taskService
      .updateTask(this.task.id, taskForSubmition)
      .subscribe((res) => {
        this.ref.close();
        this.loading = false;
      });
  }
}
