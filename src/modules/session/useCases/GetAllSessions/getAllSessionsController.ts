import {Response,Request} from "express";
import {GetAllSessionsUseCase} from "./getAllSessionsUseCase";

export class GetAllSessionsController {
    async handle(req: Request, res:Response){
        const getAllSessionsUseCase = new GetAllSessionsUseCase();

        const result = await getAllSessionsUseCase.execute();

        res.status(200).json(result);
    }
}