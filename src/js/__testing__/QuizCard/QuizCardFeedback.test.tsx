import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";

import { QuizCardFeedback } from "../../QuizCard/QuizCardFeedback";

describe("QuizCardFeedback", () => {
  const id = "QuizCardFeedback";

  const question = "What is your name?";
  const answer = "Ryan";

  test("no feedback", async () => {
    const quizCardFeedback = render(<QuizCardFeedback id={id} />);

    await expect(quizCardFeedback.findByTestId("QuizCardFeedback")).rejects.toThrowError();
  });

  test("correct feedback", async () => {
    const quizCardFeedback = render(
      <QuizCardFeedback feedback={{ question: question, answer: answer, result: "Correct" }} id={id} />,
    );

    const feedback = await quizCardFeedback.findByTestId("QuizCardFeedback");
    expect(feedback).toHaveClass("text-success");
    expect(feedback).toHaveTextContent(`Correct: ${question} ${answer}`);
  });

  test("incorrect feedback", async () => {
    const quizCardFeedback = render(
      <QuizCardFeedback feedback={{ question: question, answer: answer, result: "Incorrect" }} id={id} />,
    );

    const feedback = await quizCardFeedback.findByTestId("QuizCardFeedback");
    expect(feedback).toHaveClass("text-danger");
    expect(feedback).toHaveTextContent(`Incorrect: ${question} (${answer})`);
  });
});
