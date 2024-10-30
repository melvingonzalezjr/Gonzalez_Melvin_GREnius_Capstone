// models/Question.js
import { Schema, model } from "mongoose";

const questionSchema = new Schema({
  section: { type: String, required: true, enum: ["quantitative", "verbal"] },
  questionText: { type: String, required: true },
  options: { type: [String], required: true },
  correctAnswer: { type: String, required: true },
});

export default model("Question", questionSchema);
