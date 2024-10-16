import { simpleCalculator } from './index';
import { simpleTestCases } from '../testCases';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const { shouldAddTwoNumbers } = simpleTestCases;

    shouldAddTwoNumbers &&
      expect(simpleCalculator(shouldAddTwoNumbers)).toBe(
        shouldAddTwoNumbers.expected,
      );
  });

  test('should subtract two numbers', () => {
    const { shouldSubtractTwoNumbers } = simpleTestCases;

    shouldSubtractTwoNumbers &&
      expect(simpleCalculator(shouldSubtractTwoNumbers)).toBe(
        shouldSubtractTwoNumbers.expected,
      );
  });

  test('should multiply two numbers', () => {
    const { shouldMultiplyTwoNumbers } = simpleTestCases;

    shouldMultiplyTwoNumbers &&
      expect(simpleCalculator(shouldMultiplyTwoNumbers)).toBe(
        shouldMultiplyTwoNumbers.expected,
      );
  });

  test('should divide two numbers', () => {
    const { shouldDivideTwoNumbers } = simpleTestCases;
    shouldDivideTwoNumbers &&
      expect(simpleCalculator(shouldDivideTwoNumbers)).toBe(
        shouldDivideTwoNumbers.expected,
      );
  });

  test('should exponentiate two numbers', () => {
    const { shouldExponentiateTwoNumbers } = simpleTestCases;
    shouldExponentiateTwoNumbers &&
      expect(simpleCalculator(shouldExponentiateTwoNumbers)).toBe(
        shouldExponentiateTwoNumbers.expected,
      );
  });

  test('should return null for invalid action', () => {
    const { shouldReturnNullForInvalidAction } = simpleTestCases;

    shouldReturnNullForInvalidAction &&
      expect(simpleCalculator(shouldReturnNullForInvalidAction)).toBe(
        shouldReturnNullForInvalidAction.expected,
      );
  });

  test('should return null for invalid arguments', () => {
    const { shouldReturnNullForInvalidArguments } = simpleTestCases;

    shouldReturnNullForInvalidArguments &&
      expect(simpleCalculator(shouldReturnNullForInvalidArguments)).toBe(
        shouldReturnNullForInvalidArguments.expected,
      );
  });
});
