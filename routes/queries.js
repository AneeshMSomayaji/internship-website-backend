import express from "express";
import Query from "../models/Query.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const query = new Query({ name, email, message });
    await query.save();

    res.status(201).json({ message: "Query submitted successfully!" });
  } catch (error) {
    console.error("Error submitting query:", error);
    res.status(500).json({ message: "Server error, try again later" });
  }
});

export default router;
