import {CreateQuestionRequest} from "../../dtos/createQuestionRequest";
import {prisma} from "../../../../prisma/client";
import {typeEnum} from "../../dtos/typeEnum";

export class CreateQuestionUseCase {

    async execute(reqList: CreateQuestionRequest[]): Promise<void> {

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

            const question = prisma.question.create({
                data: {
                    questionDescription: req.questionDescription,
                    type: req.type,
                    level: req.level,
                    sessionId: req.sessionId,
                    multipleChoiceAnswer,
                    trueOrFalseAnswer
                }
            })
            console.log(req)
            console.log(req.options)

            if (req.type === typeEnum.MULTIPLE_CHOICE && req.options.length === 4) {
                const questionId = await question.then(result => result.id);
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
}