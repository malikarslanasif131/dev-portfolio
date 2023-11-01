// projectRoutes.js
import express from "express";
import multer from "multer"; // For handling file uploads
import {
  createProject,
  getAllProjects,
  deleteProject,
} from "../controllers/projectController.js";

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

// Create a new project (with image upload)
router.post(
  "/",
  upload.fields([
    { name: "image", maxCount: 1 },
    // { name: "video", maxCount: 1 },
  ]),
  createProject
);

// Get all projects
router.get("/", getAllProjects);

// Delete a project by ID
router.delete("/:id", deleteProject);

export default router;
