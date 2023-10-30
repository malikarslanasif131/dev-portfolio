// models/about.js
import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  content: String,
});

const About = mongoose.model("About", aboutSchema);

export default About;
