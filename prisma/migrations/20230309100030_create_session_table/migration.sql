-- CreateTable
CREATE TABLE `tb_session` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `session_name` VARCHAR(150) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `number_of_questions` INTEGER NOT NULL,
    `number_of_challengers` INTEGER NOT NULL,
    `number_of_groups` INTEGER NOT NULL,
    `cards` BOOLEAN NOT NULL DEFAULT false,
    `students_help` BOOLEAN NOT NULL DEFAULT false,
    `skips` BOOLEAN NOT NULL DEFAULT false,
    `audience_help` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `tb_session_session_name_key`(`session_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
