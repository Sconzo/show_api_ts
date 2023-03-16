import {Request, Response} from "express";
import {CreateChallengerUseCase} from "./createChallengerUseCase";

export class CreateChallengerController {
    async handle(req: Request, res: Response) {
        const body = req.body;

        const createChallengerUseCase = new CreateChallengerUseCase();

        const result = createChallengerUseCase.execute(body);

        return res.status(201).json(result);
    }
}