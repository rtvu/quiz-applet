import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";

import { QuizCardQuestion } from "../../QuizCard/QuizCardQuestion";

describe("QuizCardQuestion", () => {
  const id = "QuizCardQuestion";

  test("has question", async () => {
    const question = "What is your name?";

    const navbar = render(<QuizCardQuestion question={question} id={id} />);

    const quizCardQuesiton = await navbar.findByTestId(id);
    expect(quizCardQuesiton).toHaveTextContent(question);
  });
});
