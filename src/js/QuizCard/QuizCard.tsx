import { ReactNode } from "react";

import { QuizCardQuestion } from "./QuizCardQuestion";
import { QuizCardAnswers } from "./QuizCardAnswers";
import { QuizCardConsole } from "./QuizCardConsole";
import { QuizCardSubmit } from "./QuizCardSubmit";
import { QuizCardFeedback } from "./QuizCardFeedback";
import { QuizCardResults } from "./QuizCardResults";

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

export type { QuizCardConsoleProps } from "./QuizCardConsole";
QuizCard.Console = QuizCardConsole;

export type { QuizCardSubmitProps } from "./QuizCardSubmit";
QuizCard.Submit = QuizCardSubmit;

export type { QuizCardFeedbackProps } from "./QuizCardFeedback";
QuizCard.Feedback = QuizCardFeedback;

export type { QuizCardResultsProps } from "./QuizCardResults";
QuizCard.Results = QuizCardResults;
