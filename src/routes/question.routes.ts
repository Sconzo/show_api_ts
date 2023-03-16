import {Router} from "express";
import {CreateQuestionController} from "../modules/question/useCases/CreateQuestion/createQuestionController";
import {GetOneQuestionController} from "../modules/question/useCases/GetOneQuestion/getOneQuestionController";

const createQuestionController = new CreateQuestionController();
const getOneQuestionController = new GetOneQuestionController();

const questionRoute = Router();

questionRoute.post("/", createQuestionController.handle);
questionRoute.get("/:id", getOneQuestionController.handle);

export {questionRoute};
