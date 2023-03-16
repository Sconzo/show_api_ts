import {Session} from "@prisma/client";
import {prisma} from "../../../../prisma/client";

export class GetAllSessionsUseCase {
    async execute(): Promise<Session[]>{
        const sessions = await prisma.session.findMany({})

        return sessions
    }
}