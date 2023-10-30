// routes/about.js
import express from "express";
import {
  getAbout,
  updateAbout,
  deleteAboutCtrl,
} from "../controllers/aboutController.js";

const router = express.Router();

router.get("/", getAbout);
router.post("/update", updateAbout);

router.delete("/:id", deleteAboutCtrl);

export default router;
