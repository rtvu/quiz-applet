import { ReactNode } from "react";

import { QuestionHeader } from "./QuestionHeader";

export type QuestionProps = {
  children: ReactNode;
};

export function Question(props: QuestionProps): ReactNode {
  return (
    <div className="card mx-auto my-3" style={{ maxWidth: "500px" }}>
      {props.children}
    </div>
  );
}

export type { QuestionHeaderProps } from "./QuestionHeader";
Question.Header = QuestionHeader;
