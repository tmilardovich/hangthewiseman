export const calculateScore = (
  L: number,
  U: number,
  E: number,
  T: number
): number => {
  let score = L * U;

  score = score - E * 10;
  score = score + 1000 / T;
  score = Math.max(score, 0);

  return parseInt(score.toFixed(0));
};
