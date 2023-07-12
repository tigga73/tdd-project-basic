class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop() {
    if (this.top === -1) {
      return null;
    }

    delete this.items[this.top];

    this.top -= 1;
  }
}

describe('My Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toStrictEqual({});
  });

  it('can push to the top', () => {
    stack.push('TDD Basics');

    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('TDD Basics');
  });

  it('can pop off', () => {
    stack.push('TDD Basics');

    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('TDD Basics');

    stack.pop();

    expect(stack.top).toBe(-1);
    expect(stack.items).toStrictEqual({});
  });
});
