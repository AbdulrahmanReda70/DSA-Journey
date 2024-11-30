// Merge function to combine two sorted arrays
function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    // Compare elements from left and right arrays and merge them in sorted order
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Append remaining elements from the left array
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // Append remaining elements from the right array
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

// Merge Sort function
function mergeSort(arr) {
    // Base case: an array of 1 or no elements is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort the left and right halves and merge them
    return merge(mergeSort(left), mergeSort(right));
}

// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
console.log("Original array:", array);
const sortedArray = mergeSort(array);
console.log("Sorted array:", sortedArray);
