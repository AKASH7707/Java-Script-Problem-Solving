// 15. Find the average of all numbers.

let nums = [1, 2, 3, 4];

let sum = nums.reduce((acc, curr) => acc+curr, 0);
let average = sum/nums.length;
console.log(average);