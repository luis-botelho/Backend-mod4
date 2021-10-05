import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Profile } from '../entities/profile.entity';
import { CreateGameDto } from 'src/games/dto/create-game.dto';
import { Type } from 'class-transformer';

export class CreateProfileDto extends Profile {
  @IsString({ message: 'The title must be string type.' })
  @IsNotEmpty({ message: 'The title must not be empty.' })
  title: string;

  @IsString({ message: 'The image must be a string type.' })
  @IsNotEmpty({ message: 'The image must not be empty.' })
  image: string | null;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateGameDto)
  games?: CreateGameDto[];
}
