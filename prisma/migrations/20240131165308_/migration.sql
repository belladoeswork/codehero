/*
  Warnings:

  - You are about to drop the column `badge` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `roomId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Answer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Question` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Room` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AnswerToUser` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `avatar` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_questionId_fkey";

-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_roomId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_roomId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_roomId_fkey";

-- DropForeignKey
ALTER TABLE "_AnswerToUser" DROP CONSTRAINT "_AnswerToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_AnswerToUser" DROP CONSTRAINT "_AnswerToUser_B_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "badge",
DROP COLUMN "roomId",
ADD COLUMN     "level" INTEGER NOT NULL DEFAULT 1,
ALTER COLUMN "avatar" SET NOT NULL,
ALTER COLUMN "avatar" SET DEFAULT 'avatar6';

-- DropTable
DROP TABLE "Answer";

-- DropTable
DROP TABLE "Question";

-- DropTable
DROP TABLE "Room";

-- DropTable
DROP TABLE "_AnswerToUser";
