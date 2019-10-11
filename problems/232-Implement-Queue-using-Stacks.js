// Implement the following operations of a queue using stacks.

// push(x) -- Push element x to the back of queue.
// pop() -- Removes the element from in front of queue.
// peek() -- Get the front element.
// empty() -- Return whether the queue is empty.
// Example:

// MyQueue queue = new MyQueue();

// queue.push(1); [1]
// queue.push(2); [2,1]
// queue.peek();  // returns 1
// queue.pop();   // returns 1
// queue.empty(); // returns false

// The worst case running time for implementing these operations using stacks is O(n) because you need to transfer n elements from stack 1 to stack 2 when a dequeue method is called. Pushing to stack 1 is simply O(1).

// implement stacks using plain arrays with push and pop functions
let Stack1 = [];
let Stack2 = [];

// implement enqueue method by using only stacks
// and the push and pop functions
function Enqueue(element) {
  Stack1.push(element);
}

// implement dequeue method by pushing all elements
// from stack 1 into stack 2, which reverses the order
// and then popping from stack 2
function Dequeue() {
  if (Stack2.length === 0) {
    if (Stack1.length === 0) {
      return 'Cannot dequeue because queue is empty';
    }
    while (Stack1.length > 0) {
      var p = Stack1.pop();
      Stack2.push(p);
    }
  }
  return Stack2.pop();
}

Enqueue('a');
Enqueue('b');
Enqueue('c');
Dequeue();

console.log(Stack1);
console.log(Stack2);
