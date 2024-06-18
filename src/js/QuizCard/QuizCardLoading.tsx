import { ReactNode } from "react";

export type QuizCardLoadingProps = {
  testId?: string;
};

export function QuizCardLoading(props: QuizCardLoadingProps): ReactNode {
  return (
    <div className="card-body px-3 py-2" data-testid={props.testId}>
      Loading
    </div>
  );
}
