/**
 * 时间复杂度 O(nlogn)
 * 空间复杂度 O(1)
 * 不稳定排序
 * 从上到下的进行分治排序
 * @param {*} arr 数组
 * @param {*} left 左边第一个索引
 * @param {*} right 最后一个
 */
function quickSort (arr, left, right) {
  // 判断第一个索引小于最后一个
  if (left < right) {
    // 设置最后一个值为中间值
    let pivot = right;
    // 拿到中间值
    const partitionIndex = partition(arr, pivot, left, right);
    // 拿一边的数组继续递归
    quickSort(arr, left, partitionIndex - 1 < left ? left : partitionIndex -1);
    quickSort(arr, partitionIndex + 1 > right ? right : partitionIndex + 1, right);
  }
}

const partition = (arr, pivot, left, right) => {
  // 获取到 pivot 索引对应的值
  let pivotVal = arr[poivot];
  // 获取开始的索引
  let startIndex = left
  for (let i = left; i< right; i++) {
    if (arr[i] < pivotVal) {
      // pivot 前半部分排序
      swap(arr, i, startIndex);
      startIndex ++
    }
  }
  // 后半部分排序
  swap(arr, startIndex, pivot)
  // 返回中间数索引值
  return startIndex
}

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}