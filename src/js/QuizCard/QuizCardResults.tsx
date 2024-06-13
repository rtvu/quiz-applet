import { ReactNode } from "react";

export type QuizCardResultsProps = {
  score: number;
  total: number;
  id?: string;
};

export function QuizCardResults(props: QuizCardResultsProps): ReactNode {
  return (
    <div className="card-header" data-testid={props.id}>
      {`You got ${props.score.toString()} out of ${props.total.toString()} questions correct!`}
    </div>
  );
}
