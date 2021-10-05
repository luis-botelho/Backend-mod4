import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

import { Game } from 'src/games/entities/game.entity';
import { Genre } from '../entities/genre.entity';

export class CreateGenreDto extends Genre {
  @IsString({ message: 'The name must be a string' })
  @IsNotEmpty({ message: 'The name must not be empty' })
  name: string;
}
