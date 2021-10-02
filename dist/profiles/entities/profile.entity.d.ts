import { Prisma } from '.prisma/client';
export declare class Profile implements Prisma.ProfilesUncheckedCreateInput {
    id?: never;
    title: string;
    image: string;
    userId: never;
    games?: Prisma.GamesOnProfilesUncheckedCreateNestedManyWithoutProfileInput;
}
