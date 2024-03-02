// 闭包: 任务1
function merge(arr1) {
  // your code here
  return function(x) {
    return arr1.concat(x).sort();
  }
}
// 好像有点问题
// 测试用例
// console.log(merge([1, 5, 8])([2, 4])); // =>[1,2,4,5,8]
// console.log(merge([6, 9])([1, 2])); // =>[1,2,6,9]

// 闭包: 任务2
function countNum() {
  // init the count to 0
  let count = 0;
  return function() {
    count+=1;
    if (count>=5) {
      count = 0;
      console.log("已使用5次！");
    };
    console.log(count);
  }
}
let counter = countNum();
counter();
counter();
counter();
counter();
counter();
counter();
counter();

