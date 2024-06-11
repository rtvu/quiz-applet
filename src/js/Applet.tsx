import { ReactNode } from "react";

import { Question } from "./Question/Question";

export function Applet(): ReactNode {
  return (
    <main className="container" role="main">
      <Question>Question</Question>
    </main>
  );
}
