// Given a string, remove the vowels from the string and print the string without vowels.

// Examples:

// Input : welcome to geeksforgeeks
// Output : wlcm t gksfrgks

// Input : what is your name ?
// Output : wht s yr nm ?

const removeVowels = function(str) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
    A: true,
    E: true,
    I: true,
    O: true,
    U: true
  };

  let result = [];

  for (let value of str) {
    if (!vowels[value]) {
      result.push(value);
    }
  }
  return result.join('');
};
console.log(removeVowels('aBc'));

// push() to add element at the end of array
//join()  default join array as string with ","
