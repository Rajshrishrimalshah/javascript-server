import * as express from "express";
import {default as routes} from "./Controller"
let app = express();
let router = express.Router();


    router.get("/app", routes.getMethod);
    router.post("/app", routes.postMethod);
    router.put("/app", routes.putMethod);
    router.delete("/app", routes.deleteMethod);

export default routes;
