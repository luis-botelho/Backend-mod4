import { Prisma } from '.prisma/client';
export declare class Genre implements Prisma.GenresUncheckedCreateInput {
    id?: number;
    name: string;
    games?: Prisma.GenresOnGamesUncheckedCreateNestedManyWithoutGenreInput;
}
