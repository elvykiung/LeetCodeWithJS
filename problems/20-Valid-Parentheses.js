// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.
// Input: '()[]{}';
// Output: true;
// Input: "(]"
// Output: false
//pseudocode
//1. Declare stack array
//2. If str.length <=1 we know there's no matching
//3. if closing parentheses found, find matching
//   ==>if the stack == 0 or the last stack != matching
//   ==> return false,
//4. else if didn't find closing parentheses i.e found open
//   ==> push the found to stack
//5. return true if stack.lengths === 0

//solution #1 using pop, push, indexOf run time O(n) 72ms space O(n/2) 33.9MB

const findValidParenthese = function(str) {
  const openParentheses = ['(', '{', '['];
  const closeParentheses = [')', '}', ']'];
  let matchingParentheses;
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    const chr = str[i];
    if (closeParentheses.indexOf(chr) > -1) {
      matchingParentheses = openParentheses[closeParentheses.indexOf(chr)];
      if (stack.length == 0 || stack.pop() !== matchingParentheses) {
        return false;
      }
    } else {
      stack.push(chr);
    }
  }
  return stack.length == 0;
};

//solution #2 using map object matching
// Input: '()[]{}';
// Output: true;

const isValidParentheses = function(s) {
  let stack = [];
  let map = { '(': ')', '{': '}', '[': ']' };

  for (let i = 0; i < s.length; i++) {
    const chr = s[i];
    if (chr === '(' || chr === '{' || chr === '[') {
      stack.push(chr);
    } else {
      let last = stack.pop();
      if (chr !== map[last]) {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
};
