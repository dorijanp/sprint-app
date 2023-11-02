import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class TaskService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}

  async getTask(id: number) {
    const task = await this.prisma.task.findUnique({
      where: {
        id,
      },
    });

    const { creatorId, assigneeId, ...taskDetails } = task;

    const creator = await this.userService.getUser(creatorId);
    const assignee = await this.userService.getUser(assigneeId);

    return { ...taskDetails, creator, assignee };
  }
}
