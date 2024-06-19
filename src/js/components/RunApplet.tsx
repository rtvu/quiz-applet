import { ReactNode, useState } from "react";

import { Applet } from "@components/Applet";

import { useQuestions } from "@hooks/useQuestions";

export function RunApplet(): ReactNode {
  const [round, setRound] = useState(0);
  const [questions] = useQuestions(round);

  const onPlayAgain = () => {
    setRound((round) => round + 1);
  };

  return <Applet questions={questions} onPlayAgain={onPlayAgain} />;
}
