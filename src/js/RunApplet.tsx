import { ReactNode, useState } from "react";

import { useQuestions } from "./useQuestions";
import { Applet } from "./Applet";

export function RunApplet(): ReactNode {
  const [round, setRound] = useState(0);
  const [questions] = useQuestions(round);

  const onPlayAgain = () => {
    setRound((round) => round + 1);
  };

  return <Applet questions={questions} onPlayAgain={onPlayAgain} />;
}
