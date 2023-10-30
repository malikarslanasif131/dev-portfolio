// routes/skills.js
import express from "express";
import multer from "multer";
import {
  createSkill,
  getSkills,
  deleteSkill,
} from "../controllers/skillsController.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now(); // Get current timestamp
    const fileName = `${timestamp}-${file.originalname
      .toLowerCase()
      .split(" ")
      .join("-")}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });
const router = express.Router();

// Create a new skill
router.post("/", upload.fields([{ name: "image", maxCount: 1 }]), createSkill);

// Get all skills
router.get("/", getSkills);

// Delete a skill by ID
router.delete("/:id", deleteSkill);

export default router;
