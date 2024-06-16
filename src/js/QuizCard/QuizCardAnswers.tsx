import { useId, KeyboardEvent, ReactNode } from "react";

export type QuizCardAnswersProps = {
  answers: string[];
  selection: number;
  onSelection: (index: number) => void;
  groupName?: string;
  id?: string;
};

export function QuizCardAnswers(props: QuizCardAnswersProps): ReactNode {
  const idForGroupName = useId();
  const groupName = props.groupName ?? idForGroupName;

  const Radios = props.answers.map((answer, index) => {
    const indexString = index.toString();

    const onChangeOrClick = () => {
      props.onSelection(index);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        props.onSelection(index);
      }
    };

    return (
      <div key={index} className="input-group input-group-sm my-1">
        <div className="input-group-text">
          <input
            type="radio"
            className="form-check-input mt-0"
            name={groupName}
            aria-label={`Checkbox for answer choice: ${indexString}`}
            value={index}
            checked={index === props.selection}
            onChange={onChangeOrClick}
            data-testid={props.id === undefined ? undefined : `${props.id}-${indexString}-radio`}
          />
        </div>
        <input
          type="text"
          className="form-control"
          aria-label={`Text for answer choice: ${indexString}`}
          value={answer}
          readOnly
          onClick={onChangeOrClick}
          onKeyDown={onKeyDown}
          data-testid={props.id === undefined ? undefined : `${props.id}-${indexString}-text`}
        />
      </div>
    );
  });

  return <div className="card-body px-3 py-2">{Radios}</div>;
}
