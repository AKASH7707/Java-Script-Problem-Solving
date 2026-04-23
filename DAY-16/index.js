let nums = [1, 2, 38, 4, 23,];

// some
let result1 = nums.some((eachNum)=>eachNum%2==0);
console.log(result1);


// every 
let result2 = nums.every((eachNum) => eachNum%2==0);
console.log(result2);

// reduce(sum)
let sum = nums.reduce((acc, curr) => acc+curr, 0);
console.log(sum);

// reduce(max)
let max = nums.reduce((acc, curr) => acc>curr?acc:curr);
console.log(max);

// reduce(min)
let min = nums.reduce((acc, curr) => acc<curr?acc:curr);
console.log(min);