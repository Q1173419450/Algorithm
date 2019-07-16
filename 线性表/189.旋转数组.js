 /**
  * 双重循环
  * 时间复杂度：O(kn)
  * 空间复杂度：O(1)
  */
var rotate = function(nums, k) {
  // 1、获取数组长度
  let len = nums.length;
  // 3、循环 k 值
  for (let i=0;i<k;i++) {
    // 4、拿到最后一个数据
    let temp = nums[len-1];
    // 5、反向循环数据
    for (let j=len-1;j>0;j--) {
      // 6、全体向后移动位置
      nums[j] = nums[j-1];
    }
    // 7、最后一个参数放入第一个位置
    nums[0] = temp;
  }
  console.log(nums);
  return nums
};
var arr = [1,2,3,4,5,6,7];
rotate(arr, 3)

/* 快排 */
var rotate = function(nums, k) {
  
};

/* js 方法 */
var rotate = function(nums, k) {
  for(var i = 0; i < k; i++)
      nums.unshift(nums.pop());
};