import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { SprintModule } from './sprint/sprint.module';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, UserModule, SprintModule, TaskModule, AuthModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
