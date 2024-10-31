import mongoose from "mongoose";
import dotenv from "dotenv";
import Question from "./models/questions.js"; 

dotenv.config(); 

const verbalQuestions = [
  {
    section: "verbal",
    questionText: "The (i)____________ with which a statement is conveyed is frequently more important to the listener in determining the intended meaning than the actual words (ii)____________.",
    options: ["inflection, implied", "pitch, repudiated", "accuracy, utilized"],
    correctAnswer: "inflection, implied",
  },
  {
    section: "verbal",
    questionText: "Though a film studio produces works that are (i)____________ and artistic, its priorities often dictate that creativity be (ii)____________ to a secondary position.",
    options: ["expressive, compared", "tedious, uplifted", "tiresome, relegated"],
    correctAnswer: "tiresome, relegated",
  },
  {
    section: "verbal",
    questionText: "Science and religion each have core tenets that are considered ____________; however, some scientific tenets conflict with religious ones.",
    options: ["historic", "axiomatic", "disputable", "ubiquitous", "empirical"],
    correctAnswer: "axiomatic",
  },
  {
    section: "verbal",
    questionText: "George was a mercurial character; one moment he was optimistic, and the next he was ____________.",
    options: ["immoral", "hopeful", "witty", "morose", "dour", "buoyant"],
    correctAnswer: "morose",
  },
  {
    section: "verbal",
    questionText: "Oscar Wilde’s *The Importance of Being Earnest* satirizes the ____________ nature of British society; its characters take trivial concerns seriously while dismissing important ones.",
    options: ["maladaptive", "insincere", "unusual", "insignificant", "shallow"],
    correctAnswer: "shallow",
  },
];

// Actual function to insert Questions
const insertQuestions = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    await Question.insertMany(verbalQuestions);
    console.log("Verbal Reasoning questions inserted successfully");
  
} catch (error) {
    console.error("Error inserting questions:", error);
  
} finally {
    // Close the connection
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
};

// Run the function to insert questions
insertQuestions();
