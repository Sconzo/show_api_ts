import {Router} from "express";
import {CreateChallengerController} from "../modules/challenger/useCases/createChallengerController";

const createChallengerController = new CreateChallengerController();

const challengerRoute = Router();

challengerRoute.post("/", createChallengerController.handle)

export {challengerRoute}