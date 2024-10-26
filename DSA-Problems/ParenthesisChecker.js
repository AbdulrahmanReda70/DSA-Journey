// https://www.geeksforgeeks.org/problems/parenthesis-checker2744/1?page=1&category=Stack&sortBy=submissions


// User function Template for javascript

/**
 * @param {string} x
 * @returns {boolean}
 */

class Solution {
    // Function to check if brackets are balanced or not.
    ispar(x) {
       let arr = [];
for (let i = 0; i < x.length; i++) {
    if (x[i] === "}" && arr[arr.length - 1] === "{") { arr.pop(); continue; }
    if (x[i] === "]" && arr[arr.length - 1] === "[") { arr.pop(); continue; }
    if (x[i] === ")" && arr[arr.length - 1] === "(") { arr.pop(); continue; }
    arr.push(x[i]);
}
if (arr.length === 0) return true
else return false

    }
}
