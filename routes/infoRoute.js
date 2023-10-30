import express from "express";
import multer from "multer";
import {
  createHomeController,
  getHomeController,
  deleteHomeController,
  editHomeController,
} from "../controllers/infoCtrl.js";

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

router.post(
  "/home",
  upload.fields([
    { name: "resumefile", maxCount: 1 },
    { name: "image", maxCount: 1 },
  ]),
  createHomeController
);

router.get("/home", getHomeController);

router.delete("/home/:id", deleteHomeController);

// Edit an item by ID
router.put(
  "/home/:id",
  upload.fields([{ name: "resumefile" }, { name: "image" }]),
  editHomeController
);

export default router;
