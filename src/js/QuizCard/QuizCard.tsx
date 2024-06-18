import { ReactNode } from "react";

import { QuizCardAnswers } from "./QuizCardAnswers";
import { QuizCardFeedback } from "./QuizCardFeedback";
import { QuizCardLoading } from "./QuizCardLoading";
import { QuizCardPlayAgain } from "./QuizCardPlayAgain";
import { QuizCardQuestion } from "./QuizCardQuestion";
import { QuizCardResults } from "./QuizCardResults";
import { QuizCardSubmit } from "./QuizCardSubmit";

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

export type { QuizCardAnswersProps } from "./QuizCardAnswers";
QuizCard.Answers = QuizCardAnswers;

export type { QuizCardFeedbackProps } from "./QuizCardFeedback";
QuizCard.Feedback = QuizCardFeedback;

export type { QuizCardLoadingProps } from "./QuizCardLoading";
QuizCard.Loading = QuizCardLoading;

export type { QuizCardPlayAgainProps } from "./QuizCardPlayAgain";
QuizCard.PlayAgain = QuizCardPlayAgain;

export type { QuizCardQuestionProps } from "./QuizCardQuestion";
QuizCard.Question = QuizCardQuestion;

export type { QuizCardResultsProps } from "./QuizCardResults";
QuizCard.Results = QuizCardResults;

export type { QuizCardSubmitProps } from "./QuizCardSubmit";
QuizCard.Submit = QuizCardSubmit;
