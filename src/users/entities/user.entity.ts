import { Prisma } from '.prisma/client';

export class User implements Prisma.UsersUncheckedCreateInput {
  id?: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  cpf: string;
  profiles?: Prisma.ProfilesUncheckedCreateNestedManyWithoutUserInput;
  games?: Prisma.GamesOnUsersUncheckedCreateNestedManyWithoutUserInput;
}
