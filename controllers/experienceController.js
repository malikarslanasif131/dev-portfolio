import Experience from "../models/experienceModel.js";
import mongoose from "mongoose";
// Add a new experience entry
export const addExperience = async (req, res) => {
  try {
    const { organization, role, joiningDate, completionDate, details } =
      req.body;

    const newExperience = new Experience({
      organization,
      role,
      joiningDate,
      completionDate,
      details,
    });

    await newExperience.save();

    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all experience entries
export const getExperience = async (req, res) => {
  try {
    const experienceEntries = await Experience.find();
    res.status(200).json(experienceEntries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an experience entry by ID
export const deleteExperience = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ success: false });

    const deletedExperience = await Experience.findByIdAndRemove(id);

    if (!deletedExperience) return res.status(404).json({ success: false });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
