import { Game } from 'src/games/entities/game.entity';

export class Genre {
  id?: number;
  name: string;
  games?: Game[];
}
