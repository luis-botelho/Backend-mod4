import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  constructor(private readonly prisma: PrismaService) {}
  private readonly _include = {
    games: {
      select: {
        title: true,
        cover: true,
        description: true,
        year: true,
        trailer: true,
        imdb: true,
        gameplay: true,
      },
    },
  };
  create(dto: CreateProfileDto) {
    return this.prisma.profiles.create({ dto });
  }

  findAll() {
    return this.prisma.profiles.findMany({ include: { games: true } });
  }

  async findOne(id: number) {
    return this.prisma.profiles.findUnique({
      where: { id },
      include: { games: true },
      rejectOnNotFound: true,
    });
  }

  async update(id: number, data: UpdateProfileDto) {
    return this.prisma.profiles.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.profiles.delete({ where: { id } });
  }
}
