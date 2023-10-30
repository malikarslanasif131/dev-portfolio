// controllers/educationController.js
import Education from "../models/educationModel.js";
import mongoose from "mongoose";
// Create a new education entry
export const createEducation = async (req, res) => {
  try {
    const education = new Education(req.body);
    const newEducation = await education.save();
    res.status(201).json(newEducation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all education entries
export const getEducation = async (req, res) => {
  try {
    const education = await Education.find();
    res.status(200).json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an education entry by ID
export const deleteEducation = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No education entry with that ID");

  await Education.findByIdAndRemove(id);

  res.json({ message: "Education entry deleted successfully" });
};
