function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        // let temp = arr[i];
        // arr[i] = arr[j];
        // arr[j] = temp;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

bubbleSort([1, 3, 2, 4, 9, 5]);
bubbleSort([3, -3, 0, 2, 1, -12, 9, 5, 7]);
