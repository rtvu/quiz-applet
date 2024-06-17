import { describe, expect, test } from "vitest";
import { fireEvent, render } from "@testing-library/react";

import { QuizCardPlayAgain } from "../../QuizCard/QuizCardPlayAgain";

describe(QuizCardPlayAgain.name, () => {
  const id = QuizCardPlayAgain.name;

  test("use button", async () => {
    let isTrue = false;
    const onPlayAgain = () => {
      isTrue = true;
    };

    const quizCardPlayAgain = render(<QuizCardPlayAgain onPlayAgain={onPlayAgain} id={id} />);

    const button = await quizCardPlayAgain.findByTestId(id);
    expect(isTrue).toBe(false);
    expect(button).toBeEnabled();
    fireEvent.click(button);
    expect(isTrue).toBe(true);
    expect(button).toBeDisabled();
  });
});
