import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfilesController {
    private readonly profilesService;
    constructor(profilesService: ProfilesService);
    private readonly notFound;
    create(createProfileDto: CreateProfileDto): import(".prisma/client").Prisma.Prisma__ProfilesClient<import(".prisma/client").Profiles>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Profiles & {
        games: import(".prisma/client").GamesOnProfiles[];
    })[]>;
    findOne(id: string): Promise<import(".prisma/client").Profiles & {
        games: import(".prisma/client").GamesOnProfiles[];
    }>;
    update(id: string, updateProfileDto: UpdateProfileDto): Promise<import(".prisma/client").Profiles>;
    remove(id: string): Promise<import(".prisma/client").Profiles>;
}
