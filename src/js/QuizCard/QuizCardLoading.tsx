import { ReactNode } from "react";

export type QuizCardLoadingProps = {
  id?: string;
};

export function QuizCardLoading(props: QuizCardLoadingProps): ReactNode {
  return (
    <div className="card-body px-3 py-2" data-testid={props.id}>
      Loading
    </div>
  );
}
