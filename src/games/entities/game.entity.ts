import { Genre } from 'src/genres/entities/genre.entity';
import { Profile } from 'src/profiles/entities/profile.entity';

export class Game {
  id?: number;
  title: string;
  cover: string;
  description: string;
  year: number;
  IMDB: number;
  trailer: string;
  gameplay: string;
  genre?: Genre[];
  profiles?: Profile[];
}
