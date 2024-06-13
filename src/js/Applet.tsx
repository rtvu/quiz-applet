import { ReactNode, useRef, useState } from "react";

import { Question } from "./useQuestions";
import { QuizCard, QuizCardFeedbackProps } from "./QuizCard/QuizCard";
import { shuffleArray } from "./utilities";

export type AppletProps = {
  questions: Question[];
  onPlayAgain: () => void;
};

export function Applet(props: AppletProps): ReactNode {
  const [index, setIndex] = useState(0);
  const [selection, setSelection] = useState(-1);
  const [score, setScore] = useState(0);
  const shuffledAnswers = useRef<string[] | null>(null);
  const [feedback, setFeedback] = useState<QuizCardFeedbackProps["feedback"]>([]);

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
        <QuizCard.Feedback feedback={feedback} />
        <QuizCard.PlayAgain
          onPlayAgain={() => {
            setIndex(0);
            setScore(0);
            setFeedback([]);
            props.onPlayAgain();
          }}
        />
      </QuizCard>
    );
  }

  if (shuffledAnswers.current === null) {
    shuffledAnswers.current = shuffleArray([question.correct_answer].concat(question.incorrect_answers));
  }

  const answers = [...shuffledAnswers.current];
  const isCorrectChoice = answers[selection] === question.correct_answer;

  return (
    <QuizCard>
      <QuizCard.Question question={question.question} />
      <QuizCard.Answers
        answers={answers}
        selection={selection}
        onSelection={(index) => {
          setSelection(index);
        }}
      />
      <QuizCard.Submit
        disabled={selection === -1}
        onSubmit={() => {
          setIndex((index) => index + 1);
          setSelection(-1);
          setScore((score) => (isCorrectChoice ? score + 1 : score));
          shuffledAnswers.current = null;
          setFeedback((feedback) => {
            feedback = [...feedback];
            feedback.push({
              question: question.question,
              correct_answer: question.correct_answer,
              selected_answer: answers[selection] ?? "",
            });
            return feedback;
          });
        }}
      />
    </QuizCard>
  );
}
