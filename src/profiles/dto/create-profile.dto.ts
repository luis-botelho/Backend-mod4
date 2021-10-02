import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Profile } from '../entities/profile.entity';
import { Prisma } from '@prisma/client';

export class CreateProfileDto extends Profile {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsOptional()
  games?: Prisma.GamesOnProfilesCreateNestedManyWithoutProfileInput;

  @IsOptional()
  user: Prisma.UsersCreateNestedOneWithoutProfilesInput;
}
