/*
  Warnings:

  - You are about to drop the column `filepath` on the `uploads` table. All the data in the column will be lost.
  - Added the required column `file_path` to the `uploads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `uploads` RENAME COLUMN `filepath` TO `file_path`;
