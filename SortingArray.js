function sortDescendingBasic(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
let inputArray = [5, 2, 9, 1, 5, 6];
let sortedArray = sortDescendingBasic(inputArray);
console.log("Sorted Array Descending Order:", sortedArray);