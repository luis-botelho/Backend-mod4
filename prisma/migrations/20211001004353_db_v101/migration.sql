/*
  Warnings:

  - You are about to drop the `gamesonusers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `gamesonusers` DROP FOREIGN KEY `GamesOnUsers_gameId_fkey`;

-- DropForeignKey
ALTER TABLE `gamesonusers` DROP FOREIGN KEY `GamesOnUsers_userId_fkey`;

-- DropTable
DROP TABLE `gamesonusers`;

-- CreateTable
CREATE TABLE `GamesOnProfiles` (
    `profileId` INTEGER NOT NULL,
    `gameId` INTEGER NOT NULL,

    PRIMARY KEY (`profileId`, `gameId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `GamesOnProfiles` ADD CONSTRAINT `GamesOnProfiles_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `Profiles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GamesOnProfiles` ADD CONSTRAINT `GamesOnProfiles_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `Games`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
