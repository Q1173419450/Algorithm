function bubbleSort (arr) {
  for (let i=0; i<arr.length; i++) {
    let hasChange = false
    for (let j=0; j< arr.length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        hasChange = true
      }
      // 如果 false 则为全部排序完成
    }
    if (!hasChange) break
  }
  console.log(arr);
}

var arr = [1, 5, 2, 4, 9, 6, 7, 3];
bubbleSort(arr);
