import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";

import { QuizCardResults } from "../../QuizCard/QuizCardResults";

describe("QuizCardResults", () => {
  const id = "QuizCardResults";
  const score = 2;
  const total = 4;

  test("results", async () => {
    const quizCardResults = render(<QuizCardResults score={score} total={total} id={id} />);

    const results = await quizCardResults.findByTestId(id);
    expect(results).toHaveTextContent(`You got ${score.toString()} out of ${total.toString()} questions correct!`);
  });
});
