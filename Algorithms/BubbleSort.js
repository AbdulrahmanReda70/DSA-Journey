function bubbleSort(arr) {
    let n = arr.length;
    // Loop through each element in the array
    for (let i = 0; i < n - 1; i++) {
        // Track if any swap is made during this pass
        let swapped = false;
        // Inner loop for comparing adjacent elements
        for (let j = 0; j < n - i - 1; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap if elements are in the wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true; // Mark that a swap was made
            }
        }
        // If no swaps were made, the array is already sorted
        if (!swapped) break;
    }
}
