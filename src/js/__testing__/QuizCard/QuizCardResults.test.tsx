import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";

import { QuizCardResults } from "../../QuizCard/QuizCardResults";

describe("QuizCardResults", () => {
  const id = "QuizCardResults";
  const correct = 2;
  const total = 4;

  test("results", async () => {
    const quizCardResults = render(<QuizCardResults correct={correct} total={total} id={id} />);

    const results = await quizCardResults.findByTestId(id);
    expect(results).toHaveTextContent(`${correct.toString()} correct out of ${total.toString()} questions!`);
  });
});
