// routes/educationRoutes.js
import express from "express";
import {
  createEducation,
  getEducation,
  deleteEducation,
} from "../controllers/educationController.js";

const router = express.Router();

router.post("/", createEducation);
router.get("/", getEducation);
router.delete("/:id", deleteEducation);

export default router;
