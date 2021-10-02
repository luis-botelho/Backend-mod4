import { Prisma } from '.prisma/client';

export class Game implements Prisma.GamesUncheckedCreateInput {
  id?: number;
  title: string;
  cover: string;
  description: string;
  year: number;
  IMDB: number;
  trailer: string;
  gameplay: string;
  genre?: Prisma.GenresOnGamesUncheckedCreateNestedManyWithoutGameInput;
  users?: Prisma.GamesOnProfilesUncheckedCreateNestedManyWithoutGameInput;
}
