// Fisher-Yates Sorting Algorithm
// https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/
export function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    // @ts-expect-error: index access is guranteed to be defined
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
