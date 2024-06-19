import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { QuizCardSubmit } from "@QuizCard/QuizCardSubmit";

describe(QuizCardSubmit.name, () => {
  const testId = QuizCardSubmit.name;

  test("disabled button", async () => {
    const onSubmit = () => {
      undefined;
    };

    const quizCardSubmit = render(<QuizCardSubmit disabled onSubmit={onSubmit} testId={testId} />);

    const button = await quizCardSubmit.findByTestId(testId);
    expect(button).toBeDisabled();
  });

  test("click button", async () => {
    const initialCount = 0;
    const afterClickCount = 1;

    let count = initialCount;
    const onSubmit = () => {
      count = afterClickCount;
    };

    const quizCardSubmit = render(<QuizCardSubmit onSubmit={onSubmit} testId={testId} />);

    const button = await quizCardSubmit.findByTestId(testId);
    fireEvent.click(button);
    expect(count).toBe(afterClickCount);
  });
});
