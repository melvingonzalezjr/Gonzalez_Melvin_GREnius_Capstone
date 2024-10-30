import { countDocuments, findOne } from "../models/questions.js";

export async function getQuestion(req, res) {
  const { section } = req.params;
  try {
    const count = await countDocuments({ section });
    const random = Math.floor(Math.random() * count);
    const question = await findOne({ section }).skip(random);
    res.json(question);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
