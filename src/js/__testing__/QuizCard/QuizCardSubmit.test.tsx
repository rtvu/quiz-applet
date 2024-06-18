import { describe, expect, test } from "vitest";
import { fireEvent, render } from "@testing-library/react";

import { QuizCardSubmit } from "../../QuizCard/QuizCardSubmit";

describe(QuizCardSubmit.name, () => {
  const id = QuizCardSubmit.name;

  test("disabled button", async () => {
    const onSubmit = () => {
      undefined;
    };

    const quizCardSubmit = render(<QuizCardSubmit disabled onSubmit={onSubmit} id={id} />);

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

    const quizCardSubmit = render(<QuizCardSubmit onSubmit={onSubmit} id={id} />);

    const button = await quizCardSubmit.findByTestId(id);
    fireEvent.click(button);
    expect(count).toBe(afterClickCount);
  });
});
