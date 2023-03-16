import {Request, Response} from "express";
import {CreateQuestionUseCase} from "./createQuestionUseCase";

export class CreateQuestionController {
    async handle(req:Request,res:Response){
        const body = req.body;
        const createQuestionUseCase = new CreateQuestionUseCase();

        const result = createQuestionUseCase.execute(body)

        return res.status(201).json(result)
    }
}