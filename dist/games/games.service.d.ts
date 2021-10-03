import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
export declare class GamesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateGameDto): import(".prisma/client").Prisma.Prisma__GamesClient<import(".prisma/client").Games>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Games[]>;
    findOne(id: number): Promise<import(".prisma/client").Games>;
    update(id: number, data: UpdateGameDto): Promise<import(".prisma/client").Games>;
    remove(id: number): Promise<import(".prisma/client").Games>;
}
