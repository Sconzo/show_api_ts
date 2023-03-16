import {CreateSessionRequest} from "../../dtos/createSessionRequest";
import {prisma} from "../../../../prisma/client";
import {Session} from "@prisma/client";

export class CreateSessionUseCase {
    async execute({
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
}