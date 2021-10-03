import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfilesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateProfileDto): import(".prisma/client").Prisma.Prisma__ProfilesClient<import(".prisma/client").Profiles>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Profiles & {
        games: import(".prisma/client").GamesOnProfiles[];
    })[]>;
    findOne(id: number): Promise<import(".prisma/client").Profiles & {
        games: import(".prisma/client").GamesOnProfiles[];
    }>;
    update(id: number, data: UpdateProfileDto): Promise<import(".prisma/client").Profiles>;
    remove(id: number): Promise<import(".prisma/client").Profiles>;
}
