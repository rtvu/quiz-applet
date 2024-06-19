import { ReactNode } from "react";

export type QuizCardFeedbackProps = {
  feedback: {
    question: string;
    correct_answer: string;
    selected_answer: string;
  }[];
  testId?: string;
};

export function QuizCardFeedback(props: QuizCardFeedbackProps): ReactNode {
  const Feedback = props.feedback.map(({ question, correct_answer, selected_answer }, index) => {
    const indexString = index.toString();
    const isCorrect = correct_answer === selected_answer;

    return (
      <div key={index} className="d-flex my-1 px-2 py-1 border rounded bg-light">
        <p
          className="lh-sm my-0"
          data-testid={props.testId === undefined ? undefined : `${props.testId}-${indexString}-paragraph`}
        >
          <small
            className={isCorrect ? "text-success" : "text-danger"}
            data-testid={props.testId === undefined ? undefined : `${props.testId}-${indexString}-list-number`}
          >
            {index + 1}.
          </small>
          <small>{` ${question} `}</small>
          <small
            className={isCorrect ? "text-success" : "text-danger"}
            data-testid={props.testId === undefined ? undefined : `${props.testId}-${indexString}-selected-answer`}
          >
            {selected_answer}
          </small>
          {isCorrect ? null : (
            <small
              className="text-success"
              data-testid={props.testId === undefined ? undefined : `${props.testId}-${indexString}-correct-answer`}
            >
              {" "}
              ({correct_answer})
            </small>
          )}
        </p>
      </div>
    );
  });

  return <div className="card-body px-3 py-2">{Feedback}</div>;
}
