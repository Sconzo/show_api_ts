import {Request, Response} from "express";
import {GetNumberQuestionsCreatedUseCase} from "./getNumberQuestionsCreatedUseCase";

export class GetNumberQuestionsCreatedController {
    async handle(req: Request, res: Response){
        const getNumberQuestionsCreatedUseCase = new GetNumberQuestionsCreatedUseCase();

        const result = await getNumberQuestionsCreatedUseCase.execute(parseInt(req.params.id));

        return res.status(200).json(result);
    }
}