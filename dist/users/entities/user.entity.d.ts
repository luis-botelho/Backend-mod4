import { Profile } from 'src/profiles/entities/profile.entity';
export declare class User {
    id?: number;
    name: string;
    lastName: string;
    email: string;
    password: string;
    cpf: string;
    admin: boolean;
    profiles?: Profile[];
}
