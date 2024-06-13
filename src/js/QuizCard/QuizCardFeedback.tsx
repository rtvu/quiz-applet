import { ReactNode } from "react";

export type QuizCardFeedbackProps = {
  feedback: {
    question: string;
    correct_answer: string;
    selected_answer: string;
  }[];
  id?: string;
};

export function QuizCardFeedback(props: QuizCardFeedbackProps): ReactNode {
  const Feedback = props.feedback.map(({ question, correct_answer, selected_answer }, index) => {
    index = index + 1;

    const isCorrect = correct_answer === selected_answer;

    return (
      <div key={index} className="d-flex my-1 px-2 py-1 border rounded bg-light">
        <p
          className="lh-sm my-0"
          data-testid={props.id === undefined ? undefined : props.id + "-" + index.toString() + "-paragraph"}
        >
          <small
            className={isCorrect ? "text-success" : "text-danger"}
            data-testid={props.id === undefined ? undefined : props.id + "-" + index.toString() + "-list-number"}
          >
            {index.toString()}.
          </small>
          <small>{` ${question} `}</small>
          <small
            className={isCorrect ? "text-success" : "text-danger"}
            data-testid={props.id === undefined ? undefined : props.id + "-" + index.toString() + "-selected-answer"}
          >
            {selected_answer}
          </small>
          {isCorrect ? null : (
            <small
              className="text-success"
              data-testid={props.id === undefined ? undefined : props.id + "-" + index.toString() + "-correct-answer"}
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
