import { ReactNode } from "react";

import { Question } from "./Question/Question";

export function Applet(): ReactNode {
  return (
    <main className="container" role="main">
      <Question>
        <Question.Header question="What is your name?" />
      </Question>
    </main>
  );
}
