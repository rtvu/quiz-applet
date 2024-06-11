import { ReactNode, useState } from "react";

import { QuizCard } from "./QuizCard/QuizCard";

export function Applet(): ReactNode {
  const [selection, setSelection] = useState(-1);

  return (
    <main className="container" role="main">
      <QuizCard>
        <QuizCard.Question question="What is your name?" />
        <QuizCard.Answers
          answers={["Ryan", "Daniel", "Jack", "John"]}
          selection={selection}
          onSelection={(index) => {
            setSelection(index);
          }}
        />
        <QuizCard.Console>
          <QuizCard.Submit
            disabled={selection === -1}
            onSubmit={() => {
              console.log(selection);
            }}
          />
        </QuizCard.Console>
      </QuizCard>
    </main>
  );
}
