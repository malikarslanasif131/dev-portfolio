// models/education.js
import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: true,
  },
  institute: {
    type: String,
    required: true,
  },
  yearStarted: {
    type: Number,
    required: true,
    min: 1900,
    max: 2099,
  },
  yearCompleted: {
    type: Number,
    required: true,
    min: 1900,
    max: 2099,
  },
  details: {
    type: String,
    required: true,
  },
});

const Education = mongoose.model("Education", educationSchema);

export default Education;
