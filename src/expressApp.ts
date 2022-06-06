import express from "express";
import morgan from "morgan";
import indexRouter from "@/routes/indexRouter";

const expressApp = express();

expressApp.use(morgan("dev"));
expressApp.use("/", indexRouter);

export default expressApp;
