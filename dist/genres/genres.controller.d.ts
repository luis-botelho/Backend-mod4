import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
export declare class GenresController {
    private readonly genresService;
    constructor(genresService: GenresService);
    create(createGenreDto: CreateGenreDto): import(".prisma/client").Prisma.Prisma__GenresClient<import(".prisma/client").Genres>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Genres[]>;
    findOne(id: string): string;
    update(id: string, updateGenreDto: UpdateGenreDto): string;
    remove(id: string): string;
}
