// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:

// Input: "hello"
// Output: "holle"
// Example 2:

// Input: "leetcode"
// Output: "leotcede"
// Note:
// The vowels does not include the letter "y".

//pseudocode

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const VOWELS = { a: true, e: true, i: true, o: true, u: true, A: true, E: true, I: true, O: true, U: true };
  const stack = [];
  for (let c of s) if (VOWELS[c]) stack.push(c);

  let result = '';
  for (let c of s) result += VOWELS[c] ? stack.pop() : c;
  return result;
};
