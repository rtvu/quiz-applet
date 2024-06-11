import { ReactNode } from "react";

export type QuestionHeaderProps = {
  question: string;
};

export function QuestionHeader(props: QuestionHeaderProps): ReactNode {
  return <div className="card-header">{props.question}</div>;
}
