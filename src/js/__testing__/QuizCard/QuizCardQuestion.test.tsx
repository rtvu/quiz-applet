import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";

import { QuizCardQuestion } from "../../QuizCard/QuizCardQuestion";

describe(QuizCardQuestion.name, () => {
  const id = QuizCardQuestion.name;

  test("has question", async () => {
    const question = "What is your name?";

    const quizCardQuestion = render(<QuizCardQuestion question={question} id={id} />);

    const questionText = await quizCardQuestion.findByTestId(id);
    expect(questionText).toHaveTextContent(question);
  });
});
