import {prisma} from "../../../../prisma/client";
import {AppError} from "../../../../errors/AppError";

export class GetOneQuestionUseCase {

    async execute(questionId: number) {
        console.log(questionId)
        const q = await prisma.question.findUnique({
            where: {
                id: questionId
            },
            include: {
                options: true,
                session:true
            }
        })


        if (q) {
            return q
        }

        throw new AppError("Session not found")
    }
}