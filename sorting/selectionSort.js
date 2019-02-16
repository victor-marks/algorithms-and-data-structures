function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    [[arr[i], arr[lowest]]] = [[arr[lowest], arr[i]]];
  }
  return arr;
}

selectionSort([19, 44, 38, 5, 47, 15]);
