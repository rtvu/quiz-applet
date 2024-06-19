import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { QuizCardPlayAgain } from "@QuizCard/QuizCardPlayAgain";

describe(QuizCardPlayAgain.name, () => {
  const testId = QuizCardPlayAgain.name;

  test("use button", async () => {
    let isTrue = false;
    const onPlayAgain = () => {
      isTrue = true;
    };

    const quizCardPlayAgain = render(<QuizCardPlayAgain onPlayAgain={onPlayAgain} testId={testId} />);

    const button = await quizCardPlayAgain.findByTestId(testId);
    expect(isTrue).toBe(false);
    expect(button).toBeEnabled();
    fireEvent.click(button);
    expect(isTrue).toBe(true);
    expect(button).toBeDisabled();
  });
});
