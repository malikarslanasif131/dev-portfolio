import express from "express";
import colors from "colors";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path"; // Import the 'path' module

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.static(path.join(__dirname, "./ars-portfolio/build")));
//import route
import userRoute from "./routes/userRoute.js";
import infoRoute from "./routes/infoRoute.js";
import aboutRoutes from "./routes/aboutRoutes.js";
import skillsRouter from "./routes/skillsRoute.js";
import educationRoutes from "./routes/educationRoutes.js";
import experienceRoutes from "./routes/experienceRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import settingRoutes from "./routes/settingRoute.js";
import { authMiddleware } from "./middleware/authMiddleware.js";

//config connect
dotenv.config();
// connectDB();
// const app = express();

app.use(cors());
app.use(express.json());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
// Serve static files from the 'uploads' directory
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Define a route for the server
app.use("/api/user/", userRoute);

app.use("/api/info/", infoRoute);

app.use("/api/about", aboutRoutes);

app.use("/api/skills", skillsRouter);

app.use("/api/education", educationRoutes);

app.use("/api/experience", experienceRoutes);

app.use("/api/projects", projectRoutes);

app.use("/api/contact", contactRoutes);

app.use("/api/setting", settingRoutes);

app.get("/api/test", authMiddleware, (req, res) => {
  res.send("Hello from the Express server and test middleware!");
});

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./ars-portfolio/build/index.html"));
});

const port = process.env.PORT || 8080;
// Start the server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`.bgCyan.white);
  });
});
