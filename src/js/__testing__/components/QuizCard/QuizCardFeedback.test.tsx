import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { QuizCardFeedback, QuizCardFeedbackProps } from "@QuizCard/QuizCardFeedback";

describe(QuizCardFeedback.name, () => {
  const feedback: QuizCardFeedbackProps["feedback"] = [
    { question: "What is your name?", correct_answer: "Ryan", selected_answer: "Ryan" },
    { question: "What is your name?", correct_answer: "Ryan", selected_answer: "Daniel" },
  ];
  const testId = QuizCardFeedback.name;

  test("correctly formats feedback", async () => {
    const quizCardFeedback = render(<QuizCardFeedback feedback={feedback} testId={testId} />);

    for (const [index, { question, correct_answer, selected_answer }] of feedback.entries()) {
      const indexString = index.toString();
      const isCorrect = correct_answer === selected_answer;

      const paragraph = await quizCardFeedback.findByTestId(`${testId}-${indexString}-paragraph`);
      expect(paragraph).toHaveTextContent(`${(index + 1).toString()}.`);
      expect(paragraph).toHaveTextContent(question);
      expect(paragraph).toHaveTextContent(selected_answer);

      const listNumber = await quizCardFeedback.findByTestId(`${testId}-${indexString}-list-number`);
      expect(listNumber).toHaveClass(isCorrect ? "text-success" : "text-danger");

      const selectedAnswer = await quizCardFeedback.findByTestId(`${testId}-${indexString}-selected-answer`);
      expect(selectedAnswer).toHaveClass(isCorrect ? "text-success" : "text-danger");

      if (!isCorrect) {
        const correctAnswer = await quizCardFeedback.findByTestId(`${testId}-${indexString}-correct-answer`);
        expect(correctAnswer).toHaveTextContent(`(${correct_answer})`);
        expect(correctAnswer).toHaveClass("text-success");
      }
    }
  });
});
