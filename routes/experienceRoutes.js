import express from "express";
import {
  addExperience,
  getExperience,
  deleteExperience,
} from "../controllers/experienceController.js";

const router = express.Router();

// Add a new experience entry
router.post("/", addExperience);

// Get all experience entries
router.get("/", getExperience);

// Delete an experience entry by ID
router.delete("/:id", deleteExperience);

export default router;
