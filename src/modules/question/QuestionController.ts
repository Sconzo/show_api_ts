import {Request, Response} from "express";

import {typeEnum} from "./dtos/typeEnum";
import {QuestionService} from "./QuestionService";


const service = new QuestionService();
export class QuestionController {
    async createQuestionHandle(req:Request,res:Response){
        const body = req.body;

        const result = service.createQuestion(body)

        return res.status(201).json(result)
    }

    async getOneQuestionHandle(req:Request,res:Response){

        const q = await service.getOneQuestion(parseInt(req.params.id));

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