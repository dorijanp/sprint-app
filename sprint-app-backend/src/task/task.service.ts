import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { UpdateTaskDTO } from './dto';

@Injectable()
export class TaskService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}

  async getTaskWithoutDetails(id: number) {
    return this.prisma.task.findUnique({
      where: {
        id,
      },
    });
  }

  async getTask(id: number) {
    const task = await this.getTaskWithoutDetails(id);

    const { creatorId, assigneeId, ...taskDetails } = task;

    const creator = await this.userService.getUser(creatorId);
    const assignee = await this.userService.getUser(assigneeId);

    return { ...taskDetails, creator, assignee };
  }

  async updateTask(id: number, updateTaskDTO: UpdateTaskDTO) {
    const task = await this.getTaskWithoutDetails(id);

    if (!task) throw new BadRequestException();

    const updatedTask = await this.prisma.task.update({
      where: {
        id,
      },
      data: {
        ...updateTaskDTO,
      },
    });

    return updatedTask;
  }
}
