import { calculateScore } from '../helpers/calculateScore';

test('Less errors results in a higher score', () => {
  const scoreWithFewerErrors = calculateScore(10, 5, 2, 100);
  const scoreWithMoreErrors = calculateScore(10, 5, 3, 100);
  expect(scoreWithFewerErrors).toBeGreaterThan(scoreWithMoreErrors);
});

test('More unique letters have a higher score', () => {
  const scoreWithFewerUniqueLetters = calculateScore(10, 4, 2, 100);
  const scoreWithMoreUniqueLetters = calculateScore(10, 5, 2, 100);
  expect(scoreWithMoreUniqueLetters).toBeGreaterThan(
    scoreWithFewerUniqueLetters
  );
});

test('Longer solutions result in a higher score', () => {
  const scoreWithShorterSolution = calculateScore(9, 5, 2, 100);
  const scoreWithLongerSolution = calculateScore(10, 5, 2, 100);
  expect(scoreWithLongerSolution).toBeGreaterThan(scoreWithShorterSolution);
});

test('Faster solutions have better score', () => {
  const scoreWithSlowerSolution = calculateScore(10, 5, 2, 200);
  const scoreWithFasterSolution = calculateScore(10, 5, 2, 100);
  expect(scoreWithFasterSolution).toBeGreaterThan(scoreWithSlowerSolution);
});
