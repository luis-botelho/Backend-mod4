import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    private readonly notFound;
    create(createUserDto: CreateUserDto): import(".prisma/client").Prisma.Prisma__UsersClient<import(".prisma/client").Users & {
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
    update(id: number, updateUserDto: UpdateUserDto): Promise<import(".prisma/client").Users>;
    remove(id: number): Promise<import(".prisma/client").Users>;
}
