// https://www.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1?page=1&category=Queue&sortBy=submissions

class Solution {
    
    minCost(arr) {
   if (arr.length === 1) return 0;

    let sum = 0;

    arr.sort((a, b) => a - b);

    while (arr.length > 1) {
        const n1 = arr.shift();
        const n2 = arr.shift();
        const merged = n1 + n2;

        sum += merged;

        let insertIndex = arr.findIndex(x => x > merged);
        if (insertIndex === -1) insertIndex = arr.length;
        
        arr.splice(insertIndex, 0, merged);
    }

    return sum;
    }
}
