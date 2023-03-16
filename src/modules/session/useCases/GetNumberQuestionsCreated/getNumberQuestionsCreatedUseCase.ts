import {Session} from "@prisma/client";
import {prisma} from "../../../../prisma/client";

export class GetNumberQuestionsCreatedUseCase {
    async execute(sessionId: number): Promise<number> {

        const aa = await prisma.question.findMany({
            where: {
                sessionId: sessionId
            }
        })

        return aa.length;
    }
}