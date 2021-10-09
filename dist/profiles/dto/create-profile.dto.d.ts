import { Profile } from '../entities/profile.entity';
import { CreateGameDto } from 'src/games/dto/create-game.dto';
export declare class CreateProfileDto extends Profile {
    title: string;
    image: string | null;
    user: never;
    games?: CreateGameDto[];
}
