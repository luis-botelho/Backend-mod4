import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfilesController {
    private readonly profilesService;
    constructor(profilesService: ProfilesService);
    create(createProfileDto: CreateProfileDto): import(".prisma/client").Prisma.Prisma__ProfilesClient<import(".prisma/client").Profiles>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Profiles & {
        games: import(".prisma/client").GamesOnProfiles[];
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ProfilesClient<import(".prisma/client").Profiles & {
        games: import(".prisma/client").GamesOnProfiles[];
    }>;
    update(id: string, updateProfileDto: UpdateProfileDto): import(".prisma/client").Prisma.Prisma__ProfilesClient<import(".prisma/client").Profiles>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ProfilesClient<import(".prisma/client").Profiles>;
}
