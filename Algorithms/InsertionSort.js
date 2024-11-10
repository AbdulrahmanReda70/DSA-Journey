function insertionSort(arr) {
    let n = arr.length;
    // Loop through each element starting from the second element
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        
        // Move elements of arr[0..i-1] that are greater than key one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        // Insert key into its correct position
        arr[j + 1] = key;
    }
}
