import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { ProfilesModule } from './profiles/profiles.module';
import { GamesModule } from './games/games.module';
import { GenresModule } from './genres/genres.module';

@Module({
  imports: [UsersModule, GenresModule, GamesModule, ProfilesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
