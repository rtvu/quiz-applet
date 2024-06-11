import { describe, expect, test } from "vitest";
import { fireEvent, render } from "@testing-library/react";

import { QuizCardPlayAgain } from "../../QuizCard/QuizCardPlayAgain";

describe("QuizCardPlayAgain", () => {
  const id = "QuizCardPlayAgain";

  test("use button", async () => {
    let flag = false;

    const quizCardPlayAgain = render(
      <QuizCardPlayAgain
        id={id}
        onPlayAgain={() => {
          flag = true;
        }}
      />,
    );

    const button = await quizCardPlayAgain.findByTestId(id);
    expect(flag).toBe(false);
    expect(button).toBeEnabled();
    fireEvent.click(button);
    expect(flag).toBe(true);
    expect(button).toBeDisabled();
  });
});
