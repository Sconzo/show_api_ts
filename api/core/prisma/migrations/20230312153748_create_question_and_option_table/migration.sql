-- CreateTable
CREATE TABLE `tb_question` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `question_description` VARCHAR(255) NOT NULL,
    `type` VARCHAR(150) NOT NULL,
    `level` VARCHAR(150) NOT NULL,
    `multiple_choice_answer` INTEGER NULL,
    `true_or_false_answer` INTEGER NULL,
    `session_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_option` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `option1` VARCHAR(255) NOT NULL,
    `option2` VARCHAR(255) NOT NULL,
    `option3` VARCHAR(255) NULL,
    `option4` VARCHAR(255) NULL,
    `question_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
