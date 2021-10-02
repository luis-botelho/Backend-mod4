import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): import(".prisma/client").Prisma.Prisma__UsersClient<import(".prisma/client").Users>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Users & {
        profiles: import(".prisma/client").Profiles[];
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__UsersClient<import(".prisma/client").Users & {
        profiles: import(".prisma/client").Profiles[];
    }>;
    update(id: string, updateUserDto: UpdateUserDto): import(".prisma/client").Prisma.Prisma__UsersClient<import(".prisma/client").Users>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__UsersClient<import(".prisma/client").Users>;
}
