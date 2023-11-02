import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  providers: [TaskService],
  imports: [UserModule],
  controllers: [TaskController],
})
export class TaskModule {}
