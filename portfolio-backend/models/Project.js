import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  link: { type: String },
  tags: [{ type: String }],
});

export default mongoose.model("Project", projectSchema);
