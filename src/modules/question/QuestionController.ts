import {Request, Response} from "express";

import {typeEnum} from "./dtos/typeEnum";
import {QuestionService} from "./QuestionService";
import {AppError} from "../../errors/AppError";


const service = new QuestionService();

export class QuestionController {
    async createQuestionHandle(req: Request, res: Response) {
        const body = req.body;

        const result = service.createQuestion(body)

        return res.status(201).json(result)
    }

    async getOneQuestionHandle(req: Request, res: Response) {

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

    async getQuestionForChallengerHandle(req: Request, res: Response) {
        const qList = await service.getQuestionForChallenger(parseInt(<string>req.query.sessionId));
        let responseList = [];

        for (let i = 0; i < qList.length; i++) {
            let optionList = [];
            const q = qList[i];

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
            responseList.push(questionResponse)
        }

        return res.status(200).json(responseList);
    }
    async checkAnswerHandle(req: Request, res: Response) {

        const answer = await service.checkAnswer(parseInt(<string>req.query.questionId), parseInt(<string>req.query.choiceId));

        return res.status(201).json(answer)

    }
}