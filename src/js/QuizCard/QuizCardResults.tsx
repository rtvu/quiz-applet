import { ReactNode } from "react";

export type QuizCardResultsProps = {
  score: number;
  total: number;
  id?: string;
};

export function QuizCardResults(props: QuizCardResultsProps): ReactNode {
  return (
    <div className="card-bodycard-body px-3 py-2" data-testid={props.id}>
      {`${props.score.toString()} score out of ${props.total.toString()} questions!`}
    </div>
  );
}
