import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { TaskService } from '../task.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { User } from 'src/app/shared/models/user';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent {
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private taskService: TaskService,
    private userService: UserService,
    private sharedService: SharedService
  ) {}

  users!: User[];
  task: any;

  ngOnInit() {
    this.task = {
      title: '',
      description: '',
      assignee: null,
    };
    this.userService.getUsers().subscribe((res: User[]) => {
      this.users = res;
      this.users = this.users.map((user) => {
        return { ...user, name: user.firstName + ' ' + user.lastName };
      });
    });
  }

  loading = false;
  async submit() {
    this.loading = true;

    const { assignee, ...createTask } = this.task;

    if (assignee) createTask.assigneeId = assignee.id;

    createTask.sprintId = this.config.data.sprintId;
    createTask.creatorId = await this.sharedService.loggedUser.id;

    console.log(createTask);

    this.taskService.createTask(createTask).subscribe((res) => {
      this.loading = false;
      this.ref.close();
    });
  }
}
