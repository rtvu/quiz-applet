import { ReactNode } from "react";

export type QuizCardSubmitProps = {
  disabled?: boolean;
  onSubmit: () => void;
  testId?: string;
};

export function QuizCardSubmit(props: QuizCardSubmitProps): ReactNode {
  return (
    <div className="card-footer px-2">
      <button
        type="button"
        className="btn btn-primary btn-sm"
        disabled={props.disabled}
        onClick={props.onSubmit}
        data-testid={props.testId}
      >
        Submit
      </button>
    </div>
  );
}
