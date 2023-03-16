import {Response, Request} from "express";
import {GetOneSessionUseCase} from "./getOneSessionUseCase";

export class GetOneSessionController {
    async handle(req: Request, res: Response) {
        const getOneUseCase = new GetOneSessionUseCase();

        const result = await getOneUseCase.execute(parseInt(req.params.id))

        return res.status(200).json(result)
    }
}