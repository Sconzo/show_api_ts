/*
  Warnings:

  - You are about to alter the column `true_or_false_answer` on the `tb_question` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `tb_question` MODIFY `true_or_false_answer` BOOLEAN NULL;
