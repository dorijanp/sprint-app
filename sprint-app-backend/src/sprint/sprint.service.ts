import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSprintDTO } from './dto';

@Injectable()
export class SprintService {
  constructor(private prisma: PrismaService) {}

  getSprints() {
    return this.prisma.sprint.findMany();
  }

  createSprint(createSprintDTO: CreateSprintDTO) {
    return this.prisma.sprint.create({
      data: {
        ...createSprintDTO,
      },
    });
  }
}
