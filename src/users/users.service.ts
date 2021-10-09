import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  private readonly _include = {
    profiles: { select: { title: true, image: true } },
  };
  create(dto: CreateUserDto) {
    const data: Prisma.UsersCreateInput = {
      ...dto,
      profiles: { create: dto.profiles },
    };

    return this.prisma.users.create({
      data,
      include: this._include,
    });
  }

  findAll() {
    return this.prisma.users.findMany({ include: { profiles: true } });
  }

  async findOne(id: number) {
    return this.prisma.users.findUnique({
      where: { id },
      include: { profiles: true },
      rejectOnNotFound: true,
    });
  }

  update(id: number, data: UpdateUserDto) {
    return this.prisma.users.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.users.delete({ where: { id } });
  }
}
