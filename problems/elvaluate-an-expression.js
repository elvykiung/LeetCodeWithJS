// Evaluate an expression given only single digits and only 2 operators * and +.

// e.g 1+2+3*4*5+4 =>

//psuedocode
// convert the str to array
// 1. create two stack one for number one for the operator
// 2. push the number and the operator in the stack
// 3. if the operator = * then pop out the last in the num stack, calculate the result, push back to the number stack
// 4. at the end return the sum of all the puls in the number stack

const evaluatePushMultiply = function(s) {
  s = s.split('');

  let numStack = [];
  let operStack = [];

  for (let i = 0; i < s.length; i++) {
    const chr = s[i];
    if (parseInt(chr)) {
      if (operStack.pop() === '*') {
        let calulateMultiply = numStack.pop() * chr;
        numStack.push(calulateMultiply);
      } else {
        numStack.push(parseInt(chr));
      }
    } else {
      operStack.push(chr);
    }
  }

  return console.log(numStack.reduce((currentTotal, item) => +currentTotal + +item));
};

evaluatePushMultiply('2+3*4+5*6');
