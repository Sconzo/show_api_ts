import {Request, Response} from "express";
import {CreateSessionUseCase} from "./createSessionUseCase";
export class CreateSessionController {
    async handle(req:Request,res:Response){
        const {
            sessionName,
            numberOfQuestions,
            numberOfGroups,
            numberOfChallengers,
            cards,
            studentsHelp,
            skips,
            audienceHelp
        } = req.body;

        const createSessionUseCase = new CreateSessionUseCase();

        const result = createSessionUseCase.execute({
            sessionName,
            numberOfQuestions,
            numberOfGroups,
            numberOfChallengers,
            cards,
            studentsHelp,
            skips,
            audienceHelp
        })

        return res.status(201).json(result);
    }
}