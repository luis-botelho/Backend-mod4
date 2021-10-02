import { Prisma } from '.prisma/client';

export class Profile implements Prisma.ProfilesUncheckedCreateInput {
  id?: never;
  title: string;
  image: string;
  userId: never;
  games?: Prisma.GamesOnProfilesUncheckedCreateNestedManyWithoutProfileInput;
}
