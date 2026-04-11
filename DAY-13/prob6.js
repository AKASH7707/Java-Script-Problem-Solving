// Find the sum of all numbers up to n
const sumOfNum = (num) => {
    let total = 0;
    for(let i=0; i<=num; i++){
        total+= i;
    }
    return total;
}

let result = sumOfNum(5);
console.log(result);