import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Profile } from '../entities/profile.entity';
import { Prisma } from '@prisma/client';

export class CreateProfileDto extends Profile {
  @IsString({ message: 'The title must be string type.' })
  @IsNotEmpty({ message: 'The title must not be empty.' })
  title: string;

  @IsString({ message: 'The image must be a string type.' })
  @IsNotEmpty({ message: 'The image must not be empty.' })
  image: string | null;

  @IsOptional()
  games?: Prisma.GamesOnProfilesCreateNestedManyWithoutProfileInput;

  @IsOptional()
  user: Prisma.UsersCreateNestedOneWithoutProfilesInput;
}
