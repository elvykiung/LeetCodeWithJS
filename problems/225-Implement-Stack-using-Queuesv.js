// Implement the following operations of a stack using queues.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// empty() -- Return whether the stack is empty.
// Example:

// MyStack stack = new MyStack();

// stack.push(1);
// stack.push(2);
// stack.top();   // returns 2
// stack.pop();   // returns 2
// stack.empty(); // returns false

let queues1 = [];
let queues2 = [];

function push(element) {
  queues1.push(element);
}

function pop() {
  peek();
  return queues2.pop();
}

function peek() {
  if (queues2.isEmpty()) {
    while (!queues1.isEmpty()) {
      queues2.push(queues1.pop());
    }
  }
  return queues2.peek();
}

function empty() {
  return queues1.isEmpty() && queues2.isEmpty();
}
