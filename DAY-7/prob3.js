// print sum of all numbers that are divisible by 6 from 200 to 400

let sum = 0;

let num = 200;
let limit = 400;

while(num<=limit){
    if(num%6==0){
        sum += num;
    }
    num++
}
console.log(sum)

