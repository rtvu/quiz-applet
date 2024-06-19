import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { QuizCardAnswers } from "@QuizCard/QuizCardAnswers";

describe(QuizCardAnswers.name, () => {
  const answers = ["Ryan", "Daniel", "Jack", "John"];

  let selection = -1;
  const onSelection = (index: number) => {
    selection = index;
  };

  const groupName = QuizCardAnswers.name;
  const testId = QuizCardAnswers.name;

  test("radios are in the same group", async () => {
    const quizCardAnswers = render(
      <QuizCardAnswers
        answers={answers}
        selection={selection}
        onSelection={onSelection}
        groupName={groupName}
        testId={testId}
      />,
    );

    for (const index of answers.keys()) {
      const indexString = index.toString();

      const answerRadio = await quizCardAnswers.findByTestId(testId + "-" + indexString + "-radio");
      expect(answerRadio).toHaveAttribute("name", groupName);
    }
  });

  test("answers are shown", async () => {
    const quizCardAnswers = render(
      <QuizCardAnswers answers={answers} selection={selection} onSelection={onSelection} testId={testId} />,
    );

    for (const [index, answer] of answers.entries()) {
      const indexString = index.toString();

      const answerText = await quizCardAnswers.findByTestId(testId + "-" + indexString + "-text");
      expect(answerText).toHaveDisplayValue(answer);
    }
  });

  test("selection checks answer", async () => {
    selection = -1;

    const quizCardAnswers = render(
      <QuizCardAnswers answers={answers} selection={selection} onSelection={onSelection} testId={testId} />,
    );

    for (const index of answers.keys()) {
      const indexString = index.toString();

      const answerRadio = await quizCardAnswers.findByTestId(testId + "-" + indexString + "-radio");
      expect(answerRadio).not.toBeChecked();
    }

    for (selection of answers.keys()) {
      quizCardAnswers.rerender(
        <QuizCardAnswers answers={answers} selection={selection} onSelection={onSelection} testId={testId} />,
      );

      for (const index of answers.keys()) {
        const indexString = index.toString();

        const answerRadio = await quizCardAnswers.findByTestId(testId + "-" + indexString + "-radio");
        if (selection === index) {
          expect(answerRadio).toBeChecked();
        } else {
          expect(answerRadio).not.toBeChecked();
        }
      }
    }
  });

  test("selecting answers changes selection", async () => {
    selection = -1;

    const quizCardAnswers = render(
      <QuizCardAnswers answers={answers} selection={selection} onSelection={onSelection} testId={testId} />,
    );

    for (const index of answers.keys()) {
      const indexString = index.toString();

      const answerRadio = await quizCardAnswers.findByTestId(testId + "-" + indexString + "-radio");
      selection = -1;
      fireEvent.click(answerRadio);
      expect(selection).toBe(index);

      const answerText = await quizCardAnswers.findByTestId(testId + "-" + indexString + "-text");
      selection = -1;
      fireEvent.click(answerText);
      expect(selection).toBe(index);
      selection = -1;
      fireEvent.keyDown(answerText, { key: "Enter", code: "Enter", charCode: 13 });
      expect(selection).toBe(index);
    }
  });
});
