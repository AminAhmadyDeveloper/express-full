import express from "express";
import morgan from "morgan";
import indexRouter from "@/routes/indexRouter";

const expressApp = express();

expressApp.set("views", __dirname + "/views");
expressApp.use(express.static(__dirname + "/views"));
expressApp.set("view engine", "pug");
expressApp.use(morgan("dev"));
expressApp.use("/", indexRouter);

export default expressApp;
