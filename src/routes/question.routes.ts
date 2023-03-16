import {Router} from "express";
import {QuestionController} from "../modules/question/QuestionController";

const questionController = new QuestionController();

const questionRoute = Router();

questionRoute.post("/", questionController.createQuestionHandle);
questionRoute.get("/:id", questionController.getOneQuestionHandle);

export {questionRoute};
