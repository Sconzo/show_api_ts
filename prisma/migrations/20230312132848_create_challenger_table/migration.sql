-- CreateTable
CREATE TABLE `tb_challenger` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `challenger_name` VARCHAR(150) NOT NULL,
    `score` INTEGER NOT NULL,
    `cards_left` INTEGER NOT NULL,
    `students_help_left` INTEGER NOT NULL,
    `skips_left` INTEGER NOT NULL,
    `audience_help_left` INTEGER NOT NULL,
    `session_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
