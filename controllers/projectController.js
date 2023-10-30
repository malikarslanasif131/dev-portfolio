// controllers/projectController.js

import Project from "../models/projectModel.js";

// Create a new project
export const createProject = async (req, res) => {
  // console.log(req.body);
  try {
    const { name, stack, usedTech, details } = req.body;
    const image =
      req.files && req.files["image"] ? req.files["image"][0].filename : null;
    const video =
      req.files && req.files["video"] ? req.files["video"][0].filename : null;
    console.log("video" + video);

    const project = new Project({
      name,
      stack,
      // selectedOption,
      usedTech,
      image,
      video,
      details,
    });
    await project.save();

    res.json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a project by ID
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Project.findByIdAndRemove(id);
    res.json({ success: true, message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
