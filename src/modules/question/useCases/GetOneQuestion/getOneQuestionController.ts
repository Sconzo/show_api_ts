import {Request, Response} from "express";
import {GetOneQuestionUseCase} from "./getOneQuestionUseCase";
import {typeEnum} from "../../dtos/typeEnum";

export class GetOneQuestionController {
    async handle(req: Request, res: Response) {
        const getOneQuestionUseCase = new GetOneQuestionUseCase();
        console.log(parseInt(req.params.id))
        const q = await getOneQuestionUseCase.execute(parseInt(req.params.id));

        let optionList = [];
        if (q.type == typeEnum.MULTIPLE_CHOICE && q.options != null) {
            optionList.push(
                {id: 1, description: q.options.option1},
                {id: 2, description: q.options.option2},
                {id: 3, description: q.options.option3},
                {id: 4, description: q.options.option4}
                )
        }

        const questionResponse = {
            questionId: q.id,
            questionDescription: q.questionDescription,
            sessionName: q.session.sessionName,
            sessionId: q.session.id,
            type: q.type,
            level: q.level,
            optionList: optionList
        }

        return res.status(200).json(questionResponse);
    }
}