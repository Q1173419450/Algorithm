/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let arr = Array.from(new Set(nums1))
    return arr.filter((item) => {
      return nums2.includes(item);
    })
};
let arr1 = [4,9,5,5];
let arr2 = [9,4,9,8,4];
let result = intersection(arr1, arr2);
console.log(result);

var intersection = function(nums1, nums2) {
  const map = {}, ret = [];
  
  for (let i=0;i<nums1.length;i++) {
    map[nums1[i]] = 1;
  }
  console.log('nums1', map);

  for (let i=0;i<nums2.length;i++) {
    if (map[nums2[i]] === 1) {
      ++map[nums2[i]]
    }
  }
  console.log('nums2', map);
  for (let prop in map) {
    if (map.hasOwnProperty(prop) && map[prop] === 2) {
      ret.push(parseInt(prop));
    }
  }
  return ret;
}

let arr1 = [4,9,5,5];
let arr2 = [9,4,9,8,4];
let result = intersection(arr1, arr2);
console.log(result);