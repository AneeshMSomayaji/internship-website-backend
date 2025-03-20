import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  clientName: String,
  projectTitle: String,
  description: String,
  images: [String],
});

export default mongoose.model("Project", ProjectSchema);
