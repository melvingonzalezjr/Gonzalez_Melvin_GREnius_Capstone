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

export const submitAnswer = async (req, res) => {
  const { questionId, answer } = req.body;
  try {
    const question = await Question.findById(questionId);
    if (!question)
      return res.status(404).json({ message: "Question not found" });
    const isCorrect = question.correctAnswer === answer;
    res.json({ isCorrect });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
