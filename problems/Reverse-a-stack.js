// Reverse a stack and put the reversed value back in the same stack. You can use only one other stack and a temp variable.

// e.g [ 1, 2, 3 ] => [ 3, 2, 1 ]

//Pseudocode
//1. pop the stack to temp variable, then push to secStack
//2.

const reversedStack = function(arr) {
  let stack = arr;
  let secStack = [];

  while (stack.length > 0) {
    let temp = stack.pop();
    secStack.push(temp);
  }

  for (let num of secStack) {
    stack.push(num);
  }

  return stack;
};

console.log(reversedStack([1, 2, 3]));
