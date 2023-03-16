import {Router} from "express";
import {CreateSessionController} from "../modules/session/useCases/CreateSession/createSessionController";
import {GetAllSessionsController} from "../modules/session/useCases/GetAllSessions/getAllSessionsController";
import {GetOneSessionController} from "../modules/session/useCases/GetOneSession/getOneSessionController";
import {
    GetNumberQuestionsCreatedController
} from "../modules/session/useCases/GetNumberQuestionsCreated/getNumberQuestionsCreatedController";

const createSessionController = new CreateSessionController();
const getAllSessionsController = new GetAllSessionsController();
const getOneSessionController = new GetOneSessionController();
const getNumberQuestionsCreatedController = new GetNumberQuestionsCreatedController();
const sessionRoute = Router();

sessionRoute.post("/", createSessionController.handle);
sessionRoute.get("/all", getAllSessionsController.handle);
sessionRoute.get("/:id", getOneSessionController.handle);
sessionRoute.get("/questions-created/:id", getNumberQuestionsCreatedController.handle);

export {sessionRoute};
