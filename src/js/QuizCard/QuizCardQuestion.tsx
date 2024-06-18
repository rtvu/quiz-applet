import { ReactNode } from "react";

export type QuizCardQuestionProps = {
  question: string;
  testId?: string;
};

export function QuizCardQuestion(props: QuizCardQuestionProps): ReactNode {
  return (
    <div className="card-header" data-testid={props.testId}>
      {props.question}
    </div>
  );
}
