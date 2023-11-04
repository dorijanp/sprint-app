import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { UpdateTaskDTO } from './dto';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get(':id')
  getTask(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.getTask(id);
  }

  @Put(':id')
  updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDTO: UpdateTaskDTO,
  ) {
    return this.taskService.updateTask(id, updateTaskDTO);
  }
}
