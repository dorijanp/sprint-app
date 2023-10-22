import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSprintDTO } from './dto';

@Injectable()
export class SprintService {
  constructor(private prisma: PrismaService) {}

  getSprints() {
    return this.prisma.sprint.findMany();
  }

  async getSprint(id: number) {
    const sprint = await this.prisma.sprint.findUnique({
      where: {
        id,
      },
    });

    if (!sprint) throw new BadRequestException('No such sprint!');

    const tasks = await this.prisma.task.findMany({
      where: {
        sprintId: sprint.id,
      },
    });

    return { ...sprint, tasks };
  }

  createSprint(createSprintDTO: CreateSprintDTO) {
    return this.prisma.sprint.create({
      data: {
        ...createSprintDTO,
      },
    });
  }
}
