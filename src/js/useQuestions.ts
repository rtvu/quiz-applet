import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { decode } from "html-entities";

async function fetchQuestions() {
  const result = await fetch("https://opentdb.com/api.php?amount=5&category=22&difficulty=easy&type=multiple");

  if (!result.ok) {
    throw new Error("Could not fetch questions.");
  }

  return result.json();
}

export type Question = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export function useQuestions(round: number): [Question[], UseQueryResult["status"]] {
  const results = useQuery({ queryKey: ["questions", round], queryFn: fetchQuestions });

  let questions: Question[] = [];
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (results.data?.results) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const data = results.data.results as Question[];
    questions = data.map((question) => {
      return {
        question: decode(question.question),
        correct_answer: decode(question.correct_answer),
        incorrect_answers: question.incorrect_answers.map((answer) => decode(answer)),
      };
    });
  }

  return [questions, results.status];
}
