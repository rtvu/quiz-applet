import { ReactNode } from "react";

import { QuizCard } from "./QuizCard/QuizCard";

export function Applet(): ReactNode {
  return (
    <main className="container" role="main">
      <QuizCard>
        <QuizCard.Results correct={2} total={5} />
        <QuizCard.Console>
          <QuizCard.PlayAgain
            onPlayAgain={() => {
              console.log("clicked");
            }}
          />
        </QuizCard.Console>
      </QuizCard>
    </main>
  );
}
