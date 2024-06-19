import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { QuizCardLoading } from "@QuizCard/QuizCardLoading";

describe(QuizCardLoading.name, () => {
  const testId = QuizCardLoading.name;

  test("displays loading", async () => {
    const quizCardLoading = render(<QuizCardLoading testId={testId} />);

    const loading = await quizCardLoading.findByTestId(testId);
    expect(loading).toHaveTextContent("Loading");
  });
});
