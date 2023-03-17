import {CreateQuestionRequest} from "./dtos/createQuestionRequest";
import {typeEnum} from "./dtos/typeEnum";
import {prisma} from "../../prisma/client";
import {AppError} from "../../errors/AppError";

export class QuestionService {
    async createQuestion(reqList: CreateQuestionRequest[]): Promise<void> {

        for (const req of reqList) {
            let trueOrFalseAnswer = null;
            let multipleChoiceAnswer = null;
            if (req.type === typeEnum.TRUE_OR_FALSE) {
                let correct = req.options.filter(item => item.correctOption)[0];
                trueOrFalseAnswer = correct.optionNumber === 1;
            } else if (req.type === typeEnum.MULTIPLE_CHOICE) {
                let correct = req.options.filter(item => item.correctOption)[0];
                multipleChoiceAnswer = correct.optionNumber;
            }

            const question = await prisma.question.create({
                data: {
                    questionDescription: req.questionDescription,
                    type: req.type,
                    level: req.level,
                    sessionId: req.sessionId,
                    multipleChoiceAnswer,
                    trueOrFalseAnswer
                }
            })

            if (req.type === typeEnum.MULTIPLE_CHOICE && req.options.length === 4) {
                const questionId = question.id
                console.log(questionId)
                await prisma.option.create({
                    data:
                        {
                            questionId: questionId,
                            option1: req.options[0].optionText,
                            option2: req.options[1].optionText,
                            option3: req.options[2].optionText,
                            option4: req.options[3].optionText
                        }
                })
            }
        }
    }

    async getOneQuestion(questionId: number) {

        const q = await prisma.question.findUnique({
            where: {
                id: questionId
            },
            include: {
                options: true,
                session: true
            }
        })

        if (q) {
            return q
        }
        throw new AppError("Session not found")
    }

    async getQuestionForChallenger(sessionId: number) {

        const responseList = await prisma.question.findMany({
            where: {
                sessionId: sessionId
            },
            include: {
                options: true,
                session: true
            }
        })

        if (responseList) {
            return responseList
        }
        throw new AppError("Session not found")
    }

    async checkAnswer(questionId: number, choiceId: number){
        const question = await prisma.question.findUnique({where:{id:questionId}})

        if(question){
            if(question.type === typeEnum.MULTIPLE_CHOICE){
                return (question.multipleChoiceAnswer === choiceId);
            }
            else if(question.type === typeEnum.TRUE_OR_FALSE){
                let choiceBoolean;
                choiceBoolean = choiceId === 1;
                return (question.trueOrFalseAnswer === choiceBoolean);
            }
        }
        throw new AppError("Erro",404);
    }
}