let arr = [5, 9, 16, 23, 34, 42, 45, 78, 87, 90];

let low = 0;
let high = arr.length - 1;

let n = 42;
let mid;
while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] === n) {
        break;
    }

    if (arr[mid] < n) {
        low = mid + 1;
    }

    if (arr[mid] > n) {
        high = mid - 1;
    }
}

console.log(mid);
