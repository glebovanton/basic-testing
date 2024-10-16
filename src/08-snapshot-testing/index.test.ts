import { generateLinkedList, LinkedListNode } from './index';

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    const values = [1, 2, 3, 4, 5];
    const expectedLinkedList = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: {
              value: 5,
              next: {
                value: null,
                next: null,
              },
            },
          },
        },
      },
    };
    const generatedLinkedList: LinkedListNode<number> =
      generateLinkedList(values);

    expect(generatedLinkedList).toStrictEqual(expectedLinkedList);
  });

  test('should generate linked list from values 2', () => {
    const values: number[] = [5, 4, 3, 2, 1];
    const generatedLinkedList: LinkedListNode<number> =
      generateLinkedList(values);

    expect(generatedLinkedList).toMatchSnapshot();
  });
});
