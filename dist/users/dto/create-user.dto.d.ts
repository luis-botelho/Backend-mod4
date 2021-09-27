import { Prisma } from '@prisma/client';
import { User } from '../entities/user.entity';
export declare class CreateUserDto extends User {
    name: string;
    lastName: string;
    email: string;
    password: string;
    cpf: string;
    profiles?: Prisma.ProfilesUncheckedCreateNestedManyWithoutUserInput;
    games?: Prisma.GamesOnUsersUncheckedCreateNestedManyWithoutUserInput;
}
