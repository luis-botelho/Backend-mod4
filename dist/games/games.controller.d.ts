import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
export declare class GamesController {
    private readonly gamesService;
    constructor(gamesService: GamesService);
    private readonly notFound;
    create(createGameDto: CreateGameDto): import(".prisma/client").Prisma.Prisma__GamesClient<import(".prisma/client").Games>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Games[]>;
    findOne(id: string): Promise<import(".prisma/client").Games>;
    update(id: string, updateGameDto: UpdateGameDto): Promise<import(".prisma/client").Games>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__GamesClient<import(".prisma/client").Games>;
}
