import { ReactNode } from "react";

export type QuizCardQuestionProps = {
  question: string;
};

export function QuizCardQuestion(props: QuizCardQuestionProps): ReactNode {
  return <div className="card-header">{props.question}</div>;
}
