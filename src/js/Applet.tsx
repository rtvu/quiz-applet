import { ReactNode } from "react";

import { QuizCard } from "./Quiz/QuizCard";

export function Applet(): ReactNode {
  return (
    <main className="container" role="main">
      <QuizCard>
        <QuizCard.Question question="What is your name?" />
      </QuizCard>
    </main>
  );
}
