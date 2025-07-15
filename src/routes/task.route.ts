import { Router } from "express";
import sampleController from "../controllers/sample.controller";
import validate from "../config/validate";
import taskValidation from "../validations/task.validation";
import auth from "../config/auth";

const router = Router();
// auth,
router.post("/create", auth,  validate(taskValidation.createTask), sampleController.createTask);
router.patch("/:id", auth,  validate(taskValidation.updateTask), sampleController.upateTask);
router.post("/list", auth,  validate(taskValidation.fetchTask), sampleController.fetchTask);

export default router;
