import express from "express";
import {
  loginController,
  registerController,
  forgotPasswordController,
} from "../controllers/userCtrl.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerController);

router.post("/login", loginController);

router.post("/forgot-password", forgotPasswordController);

export default router;
