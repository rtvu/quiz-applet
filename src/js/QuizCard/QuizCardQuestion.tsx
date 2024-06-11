import { ReactNode } from "react";

export type QuizCardQuestionProps = {
  question: string;
  id?: string;
};

export function QuizCardQuestion(props: QuizCardQuestionProps): ReactNode {
  return (
    <div className="card-header" data-testid={props.id}>
      {props.question}
    </div>
  );
}
