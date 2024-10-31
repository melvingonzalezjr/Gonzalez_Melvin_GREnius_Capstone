import Question from "../models/questions.js"; // Adjust the path as necessary

export async function getQuestion(req, res) {
  const { section } = req.params;

  try {
    // Use `Question.countDocuments` to count documents in the collection
    const count = await Question.countDocuments({ section });
    console.log("Total questions found:", count); // Log the count

    if (count === 0) {
      return res
        .status(404)
        .json({ message: "No questions found for this section" });
    }

    // Use `Question.findOne` to find a random document in the specified section
    const random = Math.floor(Math.random() * count);
    const question = await Question.findOne({ section }).skip(random);
    console.log("Random question selected:", question); // Log the question found

    res.json(question);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export const submitAnswer = async (req, res) => {
  const { questionId, answer } = req.body;
  try {
    const question = await Question.findById(questionId);
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    const isCorrect = question.correctAnswer == answer;

    
    const response = {
      isCorrect: isCorrect,
      correctAnswer: isCorrect ? null : question.correctAnswer
    };

    console.log("Response:", response); // Log response object to console for debugging
    res.json(response); // Send response object
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
