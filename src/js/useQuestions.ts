import { useQuery, UseQueryResult } from "@tanstack/react-query";

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

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return [(results.data?.results ?? []) as Question[], results.status];
}
