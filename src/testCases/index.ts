import { Action as SimpleTestAction } from '../01-simple-tests';
import { Action as TableTestAction } from '../02-table-tests';

type SimpleTestCase = {
  [key: string]: {
    a: number | string;
    b: number | string;
    action: SimpleTestAction | TableTestAction | null;
    expected: number | null;
  };
};

type TableTestCase = {
  name: string;
  a: number | string;
  b: number | string;
  action: SimpleTestAction | TableTestAction | null;
  expected: number | null;
};

export const simpleTestCases: SimpleTestCase = {
  shouldAddTwoNumbers: {
    a: 2,
    b: 1,
    action: SimpleTestAction.Add,
    expected: 3,
  },
  shouldSubtractTwoNumbers: {
    a: 2,
    b: 1,
    action: SimpleTestAction.Subtract,
    expected: 1,
  },
  shouldMultiplyTwoNumbers: {
    a: 2,
    b: 1,
    action: SimpleTestAction.Multiply,
    expected: 2,
  },
  shouldDivideTwoNumbers: {
    a: 2,
    b: 1,
    action: SimpleTestAction.Divide,
    expected: 2,
  },
  shouldExponentiateTwoNumbers: {
    a: 2,
    b: 1,
    action: SimpleTestAction.Exponentiate,
    expected: 2,
  },
  shouldReturnNullForInvalidAction: {
    a: 2,
    b: 1,
    action: null,
    expected: null,
  },
  shouldReturnNullForInvalidArguments: {
    a: '2',
    b: '1',
    action: SimpleTestAction.Exponentiate,
    expected: null,
  },
};

export const tableTestCases: TableTestCase[] = [
  {
    name: 'should add two numbers',
    a: 1,
    b: 2,
    action: TableTestAction.Add,
    expected: 3,
  },
  {
    name: 'should add two numbers',
    a: 2,
    b: 2,
    action: TableTestAction.Add,
    expected: 4,
  },
  {
    name: 'should add two numbers',
    a: 3,
    b: 2,
    action: TableTestAction.Add,
    expected: 5,
  },
  {
    name: 'should subtract two numbers',
    a: 2,
    b: 1,
    action: TableTestAction.Subtract,
    expected: 1,
  },
  {
    name: 'should multiply two numbers',
    a: 2,
    b: 1,
    action: TableTestAction.Multiply,
    expected: 2,
  },
  {
    name: 'should divide two numbers',
    a: 2,
    b: 1,
    action: TableTestAction.Divide,
    expected: 2,
  },
  {
    name: 'should exponentiate two numbers',
    a: 2,
    b: 1,
    action: TableTestAction.Exponentiate,
    expected: 2,
  },
  {
    name: 'should return null for invalid action',
    a: 3,
    b: 2,
    action: null,
    expected: null,
  },
  {
    name: 'should return null for invalid arguments',
    a: '3',
    b: '2',
    action: TableTestAction.Exponentiate,
    expected: null,
  },
];
