// 5. Check if any number ends with digit 5.

let nums = [1, 2, 35, 4, 23];

let result = nums.some((eachNum) => {
    let lastDigit = eachNum%10;
    return lastDigit == 5;
});
console.log(result);