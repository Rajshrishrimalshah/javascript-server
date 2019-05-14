import { Router } from "express";

import traineeRouter from "./controllers/trainee/routes";
import userRouter from "./controllers/user/routes";

const routes: Router = Router();

routes.use("/trainee", traineeRouter);
routes.use("/user", userRouter);

export default routes;
