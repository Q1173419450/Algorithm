/**
 * 其实就是每次都和锚点对比，然后插入！
 * @param {*} arr 
 */
function quickSort (arr) {
  for (let i = 0;i < arr.length; i++) {
    // 定义一个锚点
    let temp = arr[i];
    let j = i - 1;
    // 起始位置为当前元素前一个元素，即i-1,终止位置为0
    for (j; j > -1; j--) {
      // 与锚点对比
      if (arr[j] > temp) {
        arr[j+1] = arr[j];
        // 想的是在这里换位置
      } else {
        break;
      }
    }
    // 其实就是 j
    arr[j+1] = temp
  }
  console.log(arr);
}

var arr = [1, 5, 2, 4, 9, 6, 7, 3];
quickSort(arr)