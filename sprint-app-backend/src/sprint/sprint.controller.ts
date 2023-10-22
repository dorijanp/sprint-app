import { Body, Controller, Get, Post } from '@nestjs/common';
import { SprintService } from './sprint.service';
import { CreateSprintDTO } from './dto';

@Controller('sprint')
export class SprintController {
  constructor(private sprintService: SprintService) {}

  @Get()
  getSprints() {
    return this.sprintService.getSprints();
  }

  @Post()
  createSprint(@Body() createSprintDTO: CreateSprintDTO) {
    return this.sprintService.createSprint(createSprintDTO);
  }
}
