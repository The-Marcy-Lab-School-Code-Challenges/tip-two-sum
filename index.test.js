/**
 * Test suite for the findMax problem
 *
 * Problem: Write a function named `findMax` that takes an array of numbers
 * and returns the largest number in the array.
 */

const { findMax } = require('./index.js');

describe('findMax', () => {
  // Test cases from the README examples
  describe('Example test cases', () => {
    test('returns 9 for [3, 7, 2, 9, 1]', () => {
      expect(findMax([3, 7, 2, 9, 1])).toBe(9);
    });

    test('returns 22 for [15, 4, 22, 8]', () => {
      expect(findMax([15, 4, 22, 8])).toBe(22);
    });

    test('returns -1 for [-5, -2, -10, -1]', () => {
      expect(findMax([-5, -2, -10, -1])).toBe(-1);
    });
  });

  // Additional edge cases
  describe('Edge cases', () => {
    test('returns the element itself for single element array', () => {
      expect(findMax([42])).toBe(42);
    });

    test('returns that number for array with all same elements', () => {
      expect(findMax([7, 7, 7, 7])).toBe(7);
    });

    test('handles mixture of negative, zero, and positive numbers', () => {
      expect(findMax([-10, 0, 5, 3])).toBe(5);
    });

    test('handles zeros', () => {
      expect(findMax([0, 0, 0])).toBe(0);
    });
  });

  describe('Ordering scenarios', () => {
    test('works for already ascending array', () => {
      expect(findMax([1, 2, 3, 4, 5])).toBe(5);
    });

    test('works for descending array', () => {
      expect(findMax([9, 7, 5, 3, 1])).toBe(9);
    });
  });

  describe('Large values', () => {
    test('handles large numbers', () => {
      expect(findMax([1, 1000000, 999999])).toBe(1000000);
    });
  });
});