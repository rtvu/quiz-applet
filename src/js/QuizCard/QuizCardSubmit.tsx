import { ReactNode } from "react";

export type QuizCardSubmitProps = {
  disabled?: boolean;
  onSubmit: () => void;
  id?: string;
};

export function QuizCardSubmit(props: QuizCardSubmitProps): ReactNode {
  return (
    <button
      type="button"
      className="btn btn-primary btn-sm"
      disabled={props.disabled}
      onClick={props.onSubmit}
      data-testid={props.id}
    >
      Submit
    </button>
  );
}