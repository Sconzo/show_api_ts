import express, {Request, Response, NextFunction} from "express";
import "express-async-error";
import {routes} from "./routes";
import {AppError} from "./errors/AppError";

const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(routes)

app.listen(port, () => {
    console.log("App is up and running")
})