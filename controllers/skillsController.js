// controllers/skillsController.js
import Skill from "../models/skillsModel.js";

// Create a new skill
export const createSkill = async (req, res) => {
  // console.log(req.body);

  try {
    const { name } = req.body;
    // const image =
    //  req.files && req.files["image"] ? req.files["image"][0].filename : null;
    const image =
      req.files && req.files["image"] ? req.files["image"][0].filename : null;
    // console.log(image);
    const newSkill = new Skill({ name, image });
    await newSkill.save();
    res.status(201).json({ success: true, data: newSkill });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all skills
export const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json({ success: true, data: skills });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a skill by ID
export const deleteSkill = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSkill = await Skill.findByIdAndRemove(id);
    if (!deletedSkill) {
      return res
        .status(404)
        .json({ success: false, message: "Skill not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Skill deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
