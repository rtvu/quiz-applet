import { ReactNode } from "react";

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
