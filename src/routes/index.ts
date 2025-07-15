import express from "express";
import sampleRoute from "./sample.route";
import taskRoute from "./task.route";

const appRoute = express.Router();

appRoute.use("/user", sampleRoute);
appRoute.use("/task", taskRoute);

export default appRoute;
