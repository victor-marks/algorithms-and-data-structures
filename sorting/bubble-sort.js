// Time Complexity: O(n^2)
// Space Complexity: O(1)

function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([1, 3, 2, 4, 9, 5]);
bubbleSort([3, -3, 0, 2, 1, -12, 9, 5, 7]);
bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
