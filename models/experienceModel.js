import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  organization: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  joiningDate: {
    type: Date,
    required: true,
  },
  completionDate: {
    type: Date,
  },
  details: {
    type: String,
    required: true,
  },
});

const Experience = mongoose.model("Experience", experienceSchema);

export default Experience;
