import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [PrismaModule, UserModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
