import { Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(dto: CreateUserDto): Prisma.Prisma__UsersClient<import(".prisma/client").Users & {
        profiles: {
            title: string;
            image: string;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Users & {
        profiles: import(".prisma/client").Profiles[];
    })[]>;
    findOne(id: number): Promise<import(".prisma/client").Users & {
        profiles: import(".prisma/client").Profiles[];
    }>;
    update(id: number, data: UpdateUserDto): Prisma.Prisma__UsersClient<import(".prisma/client").Users>;
    remove(id: number): Prisma.Prisma__UsersClient<import(".prisma/client").Users>;
}
