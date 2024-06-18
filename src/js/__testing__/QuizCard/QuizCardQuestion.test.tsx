import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";

import { QuizCardQuestion } from "../../QuizCard/QuizCardQuestion";

describe(QuizCardQuestion.name, () => {
  const testId = QuizCardQuestion.name;

  test("has question", async () => {
    const question = "What is your name?";

    const quizCardQuestion = render(<QuizCardQuestion question={question} testId={testId} />);

    const questionText = await quizCardQuestion.findByTestId(testId);
    expect(questionText).toHaveTextContent(question);
  });
});
