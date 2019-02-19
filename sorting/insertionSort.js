function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }

  return arr;
}

insertionSort([2, 1, 9, 76, 4]);
insertionSort([2, 1, -9, 0, 4]);
insertionSort([12, 81, 9, 76, 4]);
