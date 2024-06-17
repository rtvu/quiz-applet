import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";

import { QuizCardLoading } from "../../QuizCard/QuizCardLoading";

describe(QuizCardLoading.name, () => {
  const id = QuizCardLoading.name;

  test("displays loading", async () => {
    const quizCardLoading = render(<QuizCardLoading id={id} />);

    const loading = await quizCardLoading.findByTestId(id);
    expect(loading).toHaveTextContent("Loading");
  });
});
