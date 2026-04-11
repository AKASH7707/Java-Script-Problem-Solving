// Write a recursive function that takes a number n and returns the sum of all numbers from 1 to n( Example: sum(5) → 15)


const recurSum = (num) => {
    if(num == 1){
        return 1;
    }
    return num + recurSum(num-1);
}

let result = recurSum(5);
console.log(result);
