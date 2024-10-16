import { simpleCalculator } from './index';
import { tableTestCases as testCases } from '../testCases';

describe('simpleCalculator', () => {
  test.each(testCases)('$name', ({ a, b, action, expected }) => {
    expect(simpleCalculator({ a, b, action })).toBe(expected);
  });
});
