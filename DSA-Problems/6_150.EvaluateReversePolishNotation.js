//https://leetcode.com/problems/evaluate-reverse-polish-notation


/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let arr = [];
let sum = 0;
if (tokens.length === 1) return +tokens[0];
for (let i = 0; i < tokens.length; i++) {
    if (!isNaN(tokens[i])) { // if number
        arr.push(tokens[i]);
    } else {

        switch (tokens[i]) {
            case '+':
                sum = +arr[arr.length - 2] + +arr[arr.length - 1];
                break;
            case '-':
                sum = +arr[arr.length - 2] - +arr[arr.length - 1];
                break;
            case '*':
                sum = +arr[arr.length - 2] * +arr[arr.length - 1];
                break;
            case '/':
                sum = Math.trunc(+arr[arr.length - 2] / +arr[arr.length - 1]); // Truncate toward zero
                break;
        }

        arr.pop();
        arr.pop();
        arr.push(`${sum}`);
    }
}
return sum;
};

