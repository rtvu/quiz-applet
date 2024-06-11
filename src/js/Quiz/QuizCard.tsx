import { ReactNode } from "react";

import { QuizCardQuestion } from "./QuizCardQuestion";
import { QuizCardAnswers } from "./QuizCardAnswers";

export type QuizCardProps = {
  children: ReactNode;
};

export function QuizCard(props: QuizCardProps): ReactNode {
  return (
    <div className="card mx-auto my-3" style={{ maxWidth: "400px" }}>
      {props.children}
    </div>
  );
}

export type { QuizCardQuestionProps } from "./QuizCardQuestion";
QuizCard.Question = QuizCardQuestion;

export type { QuizCardAnswersProps } from "./QuizCardAnswers";
QuizCard.Answers = QuizCardAnswers;
