import { expect, test } from '@jest/globals';
import { generateRandomNumber } from '../../src/helpers/index';

test('generates a random number between 1 & 9999999', () => {
  const randomNumber = generateRandomNumber();

  expect(randomNumber).toBeGreaterThanOrEqual(1);
  expect(randomNumber).toBeLessThanOrEqual(9999999);
});

test('repeatedly generates a random number between 1 & 9999999', () => {
  for (let i = 0; i < 9999; i++) {
    const randomNumber = generateRandomNumber();
    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThanOrEqual(9999999);
  }
});
