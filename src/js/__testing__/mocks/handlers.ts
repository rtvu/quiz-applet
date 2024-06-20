import { http, HttpResponse } from "msw";

import { Question } from "@hooks/useQuestions";

export type QuestionResponse = {
  results: Question[];
};

let dataIndex = 0;
const data: QuestionResponse[] = [
  {
    results: [
      { question: "What is your name?", correct_answer: "Ryan", incorrect_answers: ["Daniel", "Jack", "John"] },
    ],
  },
  {
    results: [{ question: "What is my name?", correct_answer: "Daniel", incorrect_answers: ["Ryan", "Jack", "John"] }],
  },
];

export function getData(index: number): QuestionResponse | null {
  const response = data[index]?.results[0];
  if (response !== undefined) {
    return { results: [{ ...response }] };
  } else {
    return null;
  }
}

let handlesCalled = 0;
export function getHandlesCalled(): number {
  return handlesCalled;
}

export const handlers = [
  http.get("https://opentdb.com/api.php", () => {
    handlesCalled += 1;

    const index = dataIndex;
    dataIndex = (dataIndex + 1) % data.length;

    return HttpResponse.json(data[index]);
  }),
];
