import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import queryRoutes from "./routes/queries.js"; // Import the query routes

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/queries", queryRoutes); // Register query routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
