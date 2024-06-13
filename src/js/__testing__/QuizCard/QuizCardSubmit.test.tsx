import { describe, expect, test } from "vitest";
import { fireEvent, render } from "@testing-library/react";

import { QuizCardSubmit } from "../../QuizCard/QuizCardSubmit";

describe("QuizCardSubmit", () => {
  const id = "QuizCardSubmit";

  test("disabled button", async () => {
    const quizCardSubmit = render(
      <QuizCardSubmit
        disabled
        id={id}
        onSubmit={() => {
          undefined;
        }}
      />,
    );

    const button = await quizCardSubmit.findByTestId(id);
    expect(button).toBeDisabled();
  });

  test("click button", async () => {
    const initialCount = 0;
    const afterClickCount = 1;

    let count = initialCount;

    const onSubmit = () => {
      count = afterClickCount;
    };

    const quizCardSubmit = render(<QuizCardSubmit id={id} onSubmit={onSubmit} />);

    const button = await quizCardSubmit.findByTestId(id);
    fireEvent.click(button);
    expect(count).toBe(afterClickCount);
  });
});
