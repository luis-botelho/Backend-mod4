import { Prisma } from '.prisma/client';

export class Genre implements Prisma.GenresUncheckedCreateInput {
  id?: number;
  name: string;
  games?: Prisma.GenresOnGamesUncheckedCreateNestedManyWithoutGenreInput;
}
