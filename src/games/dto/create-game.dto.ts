import { Prisma } from '@prisma/client';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Game } from '../entities/game.entity';

export class CreateGameDto extends Game {
  @IsString({ message: 'The title must be a string' })
  @IsNotEmpty({ message: 'The title must not be empty' })
  title: string;
  @IsString({ message: 'The cover must be a string' })
  @IsNotEmpty({ message: 'The cover must not be empty' })
  cover: string;
  @IsString({ message: 'The description must be a string' })
  @IsNotEmpty({ message: 'The description must not be empty' })
  description: string;
  @IsInt({ message: 'The year must be an integer' })
  @IsNotEmpty({ message: 'The year must not be empty' })
  year: number;
  @IsNumber()
  @IsNotEmpty({ message: 'The IMDB must not be empty' })
  imdb: number;
  @IsString({ message: 'The trailer link must to be a string' })
  @IsOptional()
  trailer: string | null;
  @IsString({ message: 'The game player must be a string' })
  @IsOptional({ message: 'The game player must not be empty' })
  gameplay: string | null;
  @IsOptional()
  users?: Prisma.GamesOnProfilesUncheckedCreateNestedManyWithoutGameInput;
  @IsOptional()
  genres?: Prisma.GenresOnGamesUncheckedCreateNestedManyWithoutGameInput;
}
