let nums = [1, 23, 2, 53, 63, 8];
// sort = it modify existing array
// descending order
let sortedArray = nums.sort((a,b)=> b-a);
console.log(sortedArray);


// toSorted = does not modify existing array
let sortedArr = nums.toSorted((a,b)=>a-b);
console.log(sortedArr);