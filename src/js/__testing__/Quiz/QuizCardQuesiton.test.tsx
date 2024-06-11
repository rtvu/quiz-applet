import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";

import { QuizCardQuestion } from "../../Quiz/QuizCardQuestion";

describe("QuizCardQuestion", () => {
  test("has question", async () => {
    const question = "What is your name?";
    const id = "QuizCardQuestion";

    const navbar = render(<QuizCardQuestion question={question} id={id} />);

    const quizCardQuesiton = await navbar.findByTestId(id);
    expect(quizCardQuesiton).toHaveTextContent(question);
  });
});
