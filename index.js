import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import queryRoutes from "./routes/queries.js";
var cors = require('cors')

app.use(cors()) 
dotenv.config();
const app = express();
app.use(express.json());

// ✅ FIX: Proper CORS Configuration
const allowedOrigins = ["https://skprecasttech.vercel.app"];

app.use(cors({
  origin: allowedOrigins,  // Allow frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// ✅ FIX: Handle Preflight Requests (OPTIONS)
app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", allowedOrigins);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return res.status(200).end();
});

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

app.use("/api/queries", queryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
