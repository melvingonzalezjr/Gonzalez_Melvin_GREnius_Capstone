import mongoose from "mongoose";
import dotenv from "dotenv";
import Question from "./models/questions.js"; // Adjust the path if needed

dotenv.config();

const quantQuestions = [
  {
    section: "quantitative",
    questionText: "Compare the total weight of m peanuts (each weighing n + 3 mg) and n almonds (each weighing m + 3 mg).",
    options: ["Quantity A is greater.", "Quantity B is greater.", "The two quantities are equal.", 
              "The relationship cannot be determined from the information given."],
    correctAnswer: "The relationship cannot be determined from the information given."
  },
  {
    section: "quantitative",
    questionText: "(5^27) * 575 vs (5^28)*115",
    options: ["Quantity A is greater.", "Quantity B is greater.", "The two quantities are equal.", 
              "The relationship cannot be determined from the information given."],
    correctAnswer: "The two quantities are equal."
  },
  {
    section: "quantitative",
    questionText: "Alejandro rolls a six-sided die twice. Compare the probability of rolling two even numbers to the probability that neither number is a multiple of 3.",
    options: ["Quantity A is greater.", "Quantity B is greater.", "The two quantities are equal.", 
              "The relationship cannot be determined from the information given."],
    correctAnswer: "Quantity B is greater."
  },
  {
    section: "quantitative",
    questionText: "If 4(r – s) = –2, then what is r, in terms of s?",
    options: ["-s / 2", "s - 1 / 2", "s - 3 / 2", "s + 2", "2s"],
    correctAnswer: "s - 1 / 2"
  },
  {
    section: "quantitative",
    questionText: "*Open-ended* At Tenderloin Pharmaceuticals, 25% of employees take the subway. Among those, 42% transfer lines during their commute. What percent of all employees transfer lines?",
    options: [],  // No answer choices; open-ended question
    correctAnswer: "10.5"
  }
];

const insertQuestions = async () => {
  try {
    // Connect to MongoDB with recommended options
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Insert questions
    await Question.insertMany(quantQuestions);
    console.log('Quantitative Reasoning questions inserted successfully');

  } catch (error) {
    console.error('Error inserting questions:', error);
    
  } finally {
    // Ensure the connection is closed
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
};

insertQuestions();
