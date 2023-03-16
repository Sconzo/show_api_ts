import {CreateChallengerRequest} from "./dtos/createChallengerRequest";
import {Challenger, Session} from "@prisma/client";
import {prisma} from "../../prisma/client";

export class ChallengerService {
    async execute({
                     challengerName,
                     score,
                     sessionId,
                     cardsLeft,
                     studentsHelpLeft,
                     skipsLeft,
                     audienceHelpLeft
                 } : CreateChallengerRequest):Promise<Challenger>{

        const session = prisma.session.findUnique({
            where : {id:sessionId}
        })

        return prisma.challenger.create({
            data : {
                challengerName,
                score,
                sessionId,
                cardsLeft,
                studentsHelpLeft,
                skipsLeft,
                audienceHelpLeft}
        })
    }
}