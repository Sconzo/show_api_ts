import {CreateSessionRequest} from "./dtos/createSessionRequest";
import {Session} from "@prisma/client";
import {prisma} from "../../prisma/client";
import {AppError} from "../../errors/AppError";

export class SessionService {
    async createSession({
                      sessionName,
                      numberOfQuestions,
                      numberOfGroups,
                      numberOfChallengers,
                      cards,
                      studentsHelp,
                      skips,
                      audienceHelp
                  }: CreateSessionRequest):Promise<Session> {
        const sessionNameAlreadyExists = await prisma.session.findUnique({
            where:{
                sessionName
            }
        })

        // if(sessionNameAlreadyExists){
        //     console.log("Nome da sessão repetido")
        //     console.log("Nome da sessão repetido")
        //     throw new AppError("Session name already exists",401)
        // }

        return prisma.session.create({
            data: {
                sessionName,
                numberOfQuestions,
                numberOfGroups,
                numberOfChallengers,
                cards,
                studentsHelp,
                skips,
                audienceHelp
            }
        });
    }

    async getAllSessions(): Promise<Session[]>{
        return prisma.session.findMany({});
    }

    async getNumberQuestionsCreated(sessionId: number): Promise<number> {

        const aa = await prisma.question.findMany({
            where: {
                sessionId: sessionId
            }
        })

        return aa.length;
    }
    async getOneSession(sessionId:number) : Promise<Session>{
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