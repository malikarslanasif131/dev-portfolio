import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  stack: {
    type: String,
    required: true,
  },
  usedTech: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    // required: true,
  },
  // selectedOption: [
  //   {
  //     value: {
  //       type: String,
  //       // required: true,
  //     },
  //     // label: {
  //     //   type: String,
  //     //   required: true,
  //     // },
  //   },
  // ],
  details: {
    type: String,
    required: true,
  },
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
