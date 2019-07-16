// function mergeSort (arr) {
//   mergeSortAll (arr, 0, arr.length-1);
// }

// function mergeSortAll (A, p, r) {
//   if (p >= q) {
//     return
//   }
//   let q = (p+r) / 2;
//   mergeSortAll(A, p, q);
//   mergeSortAll(A, q+1, r);
//   // 如何合并？
//   merge(A, arr1, arr2)
// }

// function merge (A, arr1, arr2) {
//   var sortArr = [];
//   var i = arr[0];
//   var j = arr[0];
//   var k = 0;
// }

/**
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(n)
 * 稳定排序
 * 从下到上排序
 * 归并排序，将列表从中间分割成单个的数，再进行比较，最后进行整合
 * @param {*} arr 
 */
function mergeSort (arr) {
  // 1、判断 arr 长度
  if (arr.length <= 1) return
  // 2、分割数组
  const middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  // 3、归并排序
  return merge(mergeSort(left), mergeSort(right));
}

function merge (left, right) {
  // 定义一个新数组，以及左右的索引
  let temp = [], leftIndex = 0, rightIndex = 0;

  // 判断数组长度不大于索引
  while (left.length > leftIndex && right.length > rightIndex) {
    // 对比排序
    if (left[leftIndex] > right[rightIndex]) {
      temp.push(left[leftIndex]);
      leftIndex++
    } else {
      temp.push(right[rightIndex]);
      rightIndex ++
    }
  }
  // 合成多余数组
  return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}