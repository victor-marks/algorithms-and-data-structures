// Time Complexity: O(n^2)
// Space Complexity: O(1)

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) [[arr[i], arr[lowest]]] = [[arr[lowest], arr[i]]];
  }
  return arr;
}

selectionSort([2, 19, 44, 38, 5, 47, 15]);
