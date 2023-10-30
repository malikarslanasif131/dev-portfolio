// routes/about.js
import express from "express";
import { addContact } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", addContact);

export default router;
