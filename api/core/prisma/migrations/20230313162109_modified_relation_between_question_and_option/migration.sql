/*
  Warnings:

  - A unique constraint covering the columns `[question_id]` on the table `tb_option` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `tb_option_question_id_key` ON `tb_option`(`question_id`);
