import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import queryRoutes from "./routes/queries.js";

dotenv.config();
const app = express();
app.use(express.json());

// Fix CORS issue
app.use(cors({
  origin: "https://skprecasttech.vercel.app", // Replace with your frontend URL
  methods: "GET,POST",
  allowedHeaders: "Content-Type"
}));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

app.use("/api/queries", queryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
