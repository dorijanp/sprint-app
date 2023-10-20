import { Module } from '@nestjs/common';
import { SprintService } from './sprint.service';
import { SprintController } from './sprint.controller';

@Module({
  providers: [SprintService],
  controllers: [SprintController],
})
export class SprintModule {}
