var checkPossibility = function(nums) {
    let len = nums.length;
    let count = 0;
    if (len === 0) return
    for (var i=0;i<len; i++) {
      if (nums[i] > nums[i+1]) {
        if (i > 0) {
          // 贪心算法
          if (nums[i-1] <= nums[i+1]) {
            nums[i] = nums[i-1]
          } else {
            nums[i+1] = nums[i]
          }
        }
        count++
        if (count > 1) {
          return false
        }
      }
    }
    return true
};

var arr = [4,3,1,5];
var result = checkPossibility(arr);
console.log(result);