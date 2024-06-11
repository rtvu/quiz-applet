import { ReactNode } from "react";

export type QuizCardConsoleProps = {
  children: ReactNode;
};

export function QuizCardConsole(props: QuizCardConsoleProps): ReactNode {
  return <div className="card-footer px-2">{props.children}</div>;
}
