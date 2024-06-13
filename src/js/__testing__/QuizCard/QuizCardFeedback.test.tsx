import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";

import { QuizCardFeedback, QuizCardFeedbackProps } from "../../QuizCard/QuizCardFeedback";

describe("QuizCardFeedback", () => {
  const id = "QuizCardFeedback";

  const feedback: QuizCardFeedbackProps["feedback"] = [
    { question: "What is your name?", correct_answer: "Ryan", selected_answer: "Ryan" },
    { question: "What is your name?", correct_answer: "Ryan", selected_answer: "Daniel" },
  ];

  test("correctly formats feedback", async () => {
    const quizCardFeedback = render(<QuizCardFeedback feedback={feedback} id={id} />);

    for (const [index, { question, correct_answer, selected_answer }] of feedback.entries()) {
      const isCorrect = correct_answer === selected_answer;

      const paragraph = await quizCardFeedback.findByTestId(id + "-" + (index + 1).toString() + "-paragraph");
      expect(paragraph).toHaveTextContent(question);
      expect(paragraph).toHaveTextContent(selected_answer);

      const listNumber = await quizCardFeedback.findByTestId(id + "-" + (index + 1).toString() + "-list-number");
      expect(listNumber).toHaveClass(isCorrect ? "text-success" : "text-danger");

      const selectedAnswer = await quizCardFeedback.findByTestId(
        id + "-" + (index + 1).toString() + "-selected-answer",
      );
      expect(selectedAnswer).toHaveClass(isCorrect ? "text-success" : "text-danger");

      if (!isCorrect) {
        const correctAnswer = await quizCardFeedback.findByTestId(
          id + "-" + (index + 1).toString() + "-correct-answer",
        );
        expect(correctAnswer).toHaveTextContent("(" + correct_answer + ")");
      }
    }
  });
});
