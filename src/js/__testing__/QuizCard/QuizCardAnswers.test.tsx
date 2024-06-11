import { describe, expect, test } from "vitest";
import { fireEvent, render } from "@testing-library/react";

import { QuizCardAnswers } from "../../QuizCard/QuizCardAnswers";

describe("QuizCardAnswers", () => {
  const id = "QuizCardAnswers";

  test("answers are selectable", async () => {
    let selection = -1;
    const answers = ["Ryan", "Daniel", "Jack", "John"];
    const onSelection = (index: number) => {
      selection = index;
    };

    const quizCardAnswers = render(
      <QuizCardAnswers answers={answers} selection={selection} onSelection={onSelection} id={id} />,
    );

    for (const [index, answer] of answers.entries()) {
      const indexString = index.toString();
      const answerText = await quizCardAnswers.findByTestId(id + "-text-" + indexString);
      expect(answerText).toHaveDisplayValue(answer);
      const answerRadio = await quizCardAnswers.findByTestId(id + "-radio-" + indexString);
      expect(answerRadio).not.toBeChecked();
    }

    for (const index of answers.keys()) {
      const indexString = index.toString();
      const answerText = await quizCardAnswers.findByTestId(id + "-text-" + indexString);
      selection = -1;
      fireEvent.focus(answerText);
      expect(selection).toBe(index);
      const answerRadio = await quizCardAnswers.findByTestId(id + "-radio-" + indexString);
      selection = -1;
      fireEvent.click(answerRadio);
      expect(selection).toBe(index);
    }
  });
});
