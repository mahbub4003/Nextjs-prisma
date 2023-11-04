/*
  Warnings:

  - Added the required column `bloger_name` to the `blogs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img` to the `blogs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `blogs` ADD COLUMN `bloger_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `img` VARCHAR(191) NOT NULL;
