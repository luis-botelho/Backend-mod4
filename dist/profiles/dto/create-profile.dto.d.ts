import { Profile } from '../entities/profile.entity';
import { Prisma } from '@prisma/client';
export declare class CreateProfileDto extends Profile {
    title: string;
    image: string | null;
    games?: Prisma.GamesOnProfilesCreateNestedManyWithoutProfileInput;
    user: Prisma.UsersCreateNestedOneWithoutProfilesInput;
}
