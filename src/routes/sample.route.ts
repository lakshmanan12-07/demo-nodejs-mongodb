import { Router } from "express";
import sampleController from "../controllers/sample.controller";
import validate from "../config/validate";
import userValidation from "../validations/user.validation";
import auth from "../config/auth";

const router = Router();
// auth,
router.post("/login",  validate(userValidation.loginUser), sampleController.userLoginOrRegister);
router.get("/refresh-token", auth, sampleController.generateAuthToken);

export default router;
