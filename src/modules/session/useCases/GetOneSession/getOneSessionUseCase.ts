import {Session} from "@prisma/client";
import {prisma} from "../../../../prisma/client";
import {AppError} from "../../../../errors/AppError";

export class GetOneSessionUseCase {
    async execute(sessionId:number) : Promise<Session>{
        const session = await prisma.session.findUnique({
            where : {
                id : sessionId
            }
        })

        if(session) {
            return session
        }

        throw new AppError("Session not found")
    }
}