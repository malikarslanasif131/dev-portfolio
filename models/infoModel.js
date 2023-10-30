import mongoose from "mongoose";

const homeSchema = new mongoose.Schema(
  {
    proName: {
      type: String,
      required: true,
    },
    tech: {
      type: String,
      required: true,
    },
    contactLink: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    resumefile: {
      type: String, // You may want to store the file path or use GridFS for file storage
    },
    image: {
      type: String, // You may want to store the file path or use GridFS for file storage
    },
  },
  { timestamps: true }
);

const Home = mongoose.model("Home", homeSchema);

export default Home;
