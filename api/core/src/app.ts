import  express from "express"
import "express-async-error";
import {routes} from "./routes";

const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(routes)

app.listen(port, () => {
    console.log("App is up and running")
})


export default app;