import { Router } from "express";
import { indexGet } from "@/controllers/indexController";

const indexRouter: Router = Router();

indexRouter.get("/", indexGet);

export default indexRouter;
