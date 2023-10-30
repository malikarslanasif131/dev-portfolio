// routes/about.js
import express from "express";
import {
  createAdSetting,
  getLatestAdSetting,
  deleteAdSetting,
} from "../controllers/adSettingController.js";

const router = express.Router();

router.get("/", getLatestAdSetting);
router.post("/", createAdSetting);

router.delete("/:id", deleteAdSetting);

export default router;
