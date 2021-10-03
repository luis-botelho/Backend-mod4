import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Genre } from '../entities/genre.entity';

export class CreateGenreDto extends Genre {
  @IsString({ message: 'The name must be a string' })
  @IsNotEmpty({ message: 'The name must not be empty' })
  name: string;

  @IsOptional()
  games?: Prisma.GenresOnGamesUncheckedCreateNestedManyWithoutGenreInput;
}
