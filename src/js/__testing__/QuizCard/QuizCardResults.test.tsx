import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";

import { QuizCardResults } from "../../QuizCard/QuizCardResults";

describe(QuizCardResults.name, () => {
  const score = 2;
  const total = 4;
  const testId = QuizCardResults.name;

  test("results", async () => {
    const quizCardResults = render(<QuizCardResults score={score} total={total} testId={testId} />);

    const results = await quizCardResults.findByTestId(testId);
    expect(results).toHaveTextContent(`You got ${score.toString()} out of ${total.toString()} questions correct!`);
  });
});
