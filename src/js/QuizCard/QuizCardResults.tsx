import { ReactNode } from "react";

export type QuizCardResultsProps = {
  correct: number;
  total: number;
  id?: string;
};

export function QuizCardResults(props: QuizCardResultsProps): ReactNode {
  return (
    <div className="card-bodycard-body px-3 py-2" data-testid={props.id}>
      {`${props.correct.toString()} correct out of ${props.total.toString()} questions!`}
    </div>
  );
}
