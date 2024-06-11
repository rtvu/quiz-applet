import { ReactNode } from "react";

export enum QuizCardFeedbackResult {
  Correct,
  Incorrect,
}

export type QuizCardFeedbackProps = {
  feedback?: {
    question: string;
    answer: string;
    result: "Correct" | "Incorrect";
  };
  id?: string;
};

export function QuizCardFeedback(props: QuizCardFeedbackProps): ReactNode {
  let Feedback = null;
  if (props.feedback !== undefined) {
    const className = props.feedback.result === "Correct" ? "text-success" : "text-danger";
    const response =
      props.feedback.result === "Correct"
        ? `Correct: ${props.feedback.question} ${props.feedback.answer}`
        : `Incorrect: ${props.feedback.question} (${props.feedback.answer})`;

    Feedback = (
      <div className={className} data-testid={props.id}>
        <small>{response}</small>
      </div>
    );
  }

  return <div className="d-inline-block align-content-center ms-2">{Feedback}</div>;
}
