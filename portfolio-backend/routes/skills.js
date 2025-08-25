import express from "express";
import Skill from "../models/Skill.js";

const router = express.Router();

// Get all skills
router.get("/", async (req, res) => {
  const skills = await Skill.find();
  res.json(skills);
});

// Add a new skill
router.post("/", async (req, res) => {
  try {
    const skill = new Skill(req.body);
    await skill.save();
    res.status(201).json(skill);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
