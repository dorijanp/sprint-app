import { Injectable, NotFoundException } from '@nestjs/common';
import { LoginDTO } from './dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async login(loginDTO: LoginDTO) {
    const { email, password } = loginDTO;

    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) throw new NotFoundException('No user with email: ' + email);

    const matches = await bcrypt.compare(password, user.hash);

    return matches ? user : {};
  }
}
