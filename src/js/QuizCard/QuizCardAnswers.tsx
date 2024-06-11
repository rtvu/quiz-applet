import { ReactNode, useId } from "react";

export type QuizCardAnswersProps = {
  answers: string[];
  selection: number;
  onSelection: (index: number) => void;
  id?: string;
};

export function QuizCardAnswers(props: QuizCardAnswersProps): ReactNode {
  const groupName = useId();

  const radios = props.answers.map((answer, index) => {
    const indexString = index.toString();

    return (
      <div key={index} className="input-group input-group-sm my-1">
        <div className="input-group-text">
          <input
            className="form-check-input mt-0"
            type="radio"
            aria-label={`Checkbox for answer choice: ${indexString}`}
            name={groupName}
            value={index}
            onChange={() => {
              props.onSelection(index);
            }}
            checked={index === props.selection ? true : false}
            data-testid={props.id !== undefined ? `${props.id}-radio-${indexString}` : undefined}
          />
        </div>
        <input
          type="text"
          className="form-control"
          aria-label={`Test for answer choice: ${indexString}`}
          readOnly
          value={answer}
          onFocus={() => {
            props.onSelection(index);
          }}
          data-testid={props.id !== undefined ? `${props.id}-text-${indexString}` : undefined}
        />
      </div>
    );
  });

  return <div className="card-body px-3 py-2">{radios}</div>;
}
