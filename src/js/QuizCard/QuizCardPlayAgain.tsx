import { ReactNode, useState } from "react";

export type QuizCardPlayAgainProps = {
  onPlayAgain: () => void;
  id?: string;
};

export function QuizCardPlayAgain(props: QuizCardPlayAgainProps): ReactNode {
  const [disabled, setDisabled] = useState(false);

  const onPlayAgain = () => {
    setDisabled(true);
    props.onPlayAgain();
  };

  return (
    <div className="card-footer px-2">
      <button
        type="button"
        className="btn btn-primary btn-sm text-nowrap"
        disabled={disabled}
        onClick={onPlayAgain}
        data-testid={props.id}
      >
        Play Again
      </button>
    </div>
  );
}
