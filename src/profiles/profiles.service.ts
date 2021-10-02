import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  constructor(private readonly prisma: PrismaService) {}
  create(data: CreateProfileDto) {
    return this.prisma.profiles.create({ data });
  }

  findAll() {
    return this.prisma.profiles.findMany({ include: { games: true } });
  }

  findOne(id: number) {
    return this.prisma.profiles.findUnique({
      where: { id },
      include: { games: true },
    });
  }

  update(id: number, data: UpdateProfileDto) {
    return this.prisma.profiles.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.profiles.delete({ where: { id } });
  }
}
