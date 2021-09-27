import { Prisma } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  @IsString({ message: 'The name needs to be a string' })
  @IsNotEmpty({ message: 'The name is empty' })
  name: string;

  @IsString({ message: 'The last needs to be a string' })
  @IsNotEmpty({ message: 'The lastName is empty' })
  lastName: string;

  @IsEmail()
  @IsNotEmpty({ message: 'The email is empty' })
  email: string;

  @IsString({ message: 'The password needs to be a string' })
  @IsNotEmpty({ message: 'The password is empty' })
  password: string;

  @IsString({ message: 'The Cpf needs to be a string' })
  @IsNotEmpty({ message: 'The Cpf is empty' })
  cpf: string;

  @IsOptional()
  profiles?: Prisma.ProfilesUncheckedCreateNestedManyWithoutUserInput;

  @IsOptional()
  games?: Prisma.GamesOnUsersUncheckedCreateNestedManyWithoutUserInput;
}
