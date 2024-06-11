import { ReactNode, useEffect, useRef, useState } from "react";

import { Question } from "./useQuestions";
import { QuizCard, QuizCardFeedbackProps } from "./QuizCard/QuizCard";
import { shuffleArray } from "./utilities";

const DEFAULT_CLEAR_FEEDBACK_TIME = 5000;

export type AppletProps = {
  questions: Question[];
  onPlayAgain: () => void;
  clearFeedbackTime?: number;
};

export function Applet(props: AppletProps): ReactNode {
  const [index, setIndex] = useState(0);
  const [selection, setSelection] = useState(-1);
  const [score, setScore] = useState(0);
  const answers = useRef<string[] | null>(null);
  const [feedback, setFeedback] = useState<NonNullable<QuizCardFeedbackProps["feedback"]> | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearFeedbackTime = props.clearFeedbackTime ?? DEFAULT_CLEAR_FEEDBACK_TIME;

  useEffect(() => {
    return () => {
      if (timer.current !== null) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  if (props.questions.length === 0) {
    return (
      <QuizCard>
        <QuizCard.Loading />
      </QuizCard>
    );
  }

  const question = props.questions[index];

  if (question === undefined) {
    return (
      <QuizCard>
        <QuizCard.Results score={score} total={props.questions.length} />
        <QuizCard.Console>
          <QuizCard.PlayAgain
            onPlayAgain={() => {
              setIndex(0);
              setScore(0);
              props.onPlayAgain();
            }}
          />
          {feedback !== null && <QuizCard.Feedback feedback={feedback} />}
        </QuizCard.Console>
      </QuizCard>
    );
  }

  if (answers.current === null) {
    answers.current = shuffleArray([question.correct_answer].concat(question.incorrect_answers));
  }

  const isCorrectChoice = answers.current[selection] === question.correct_answer;

  return (
    <QuizCard>
      <QuizCard.Question question={question.question} />
      <QuizCard.Answers
        answers={answers.current}
        selection={selection}
        onSelection={(index) => {
          setSelection(index);
        }}
      />
      <QuizCard.Console>
        <QuizCard.Submit
          disabled={selection === -1}
          onSubmit={() => {
            setIndex((index) => index + 1);
            setSelection(-1);
            setScore((score) => (isCorrectChoice ? score + 1 : score));
            answers.current = null;
            setFeedback({
              question: question.question,
              answer: question.correct_answer,
              result: isCorrectChoice ? "Correct" : "Incorrect",
            });
            if (timer.current !== null) {
              clearTimeout(timer.current);
            }
            timer.current = setTimeout(() => {
              setFeedback(null);
            }, clearFeedbackTime);
          }}
        />
        {feedback !== null && <QuizCard.Feedback feedback={feedback} />}
      </QuizCard.Console>
    </QuizCard>
  );
}
