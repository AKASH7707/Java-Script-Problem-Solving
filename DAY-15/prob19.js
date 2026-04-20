// 19. Print the sum of each number with its index.

let nums = [1, 2, 3, 4, 5];
let sum = 0
nums.forEach((eachNum, index)=>{
    sum+=eachNum;
    console.log(index, sum);
})

