import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
export declare class GenresService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateGenreDto): import(".prisma/client").Prisma.Prisma__GenresClient<import(".prisma/client").Genres>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Genres[]>;
    findOne(id: number): string;
    update(id: number, updateGenreDto: UpdateGenreDto): string;
    remove(id: number): string;
}
