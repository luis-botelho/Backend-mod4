/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Genres` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[admin]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `admin` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `genres` DROP FOREIGN KEY `Genres_gameId_fkey`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `admin` BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE `GenresOnGames` (
    `genreId` INTEGER NOT NULL,
    `gameId` INTEGER NOT NULL,

    PRIMARY KEY (`genreId`, `gameId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Genres_name_key` ON `Genres`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Users_admin_key` ON `Users`(`admin`);

-- AddForeignKey
ALTER TABLE `GenresOnGames` ADD CONSTRAINT `GenresOnGames_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `Genres`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GenresOnGames` ADD CONSTRAINT `GenresOnGames_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `Games`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
