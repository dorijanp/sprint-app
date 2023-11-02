import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from './dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getAllUsers() {
    return this.prisma.user.findMany();
  }

  async getUser(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user ?? {};
  }

  async createUser(createUserDTO: CreateUserDTO) {
    const { password, ...user } = createUserDTO;
    const hash = await bcrypt.hash(password, 10);

    return await this.prisma.user.create({
      data: {
        ...user,
        hash,
      },
    });
  }
}
