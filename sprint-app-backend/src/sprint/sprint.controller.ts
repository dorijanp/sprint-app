import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { SprintService } from './sprint.service';
import { CreateSprintDTO } from './dto';

@Controller('sprint')
export class SprintController {
  constructor(private sprintService: SprintService) {}

  @Get()
  getSprints() {
    return this.sprintService.getSprints();
  }

  @Get(':id')
  getSprint(@Param('id', ParseIntPipe) id: number) {
    return this.sprintService.getSprint(id);
  }

  @Post()
  createSprint(@Body() createSprintDTO: CreateSprintDTO) {
    return this.sprintService.createSprint(createSprintDTO);
  }
}
