// Try to find
// How to reverse a number using while loop


// let num = 123;
// let res = null;
// let temp1 = null;
// while(num>0){
//     temp1 = num%10;
//     res = (res*10)+temp1;
//     num = Math.floor(num/10);
// }
// console.log(res)


let num = 234;
let reverse = "";
while(num>0){
    let lastDigit = num%10;
    reverse += lastDigit;
    num = Math.floor(num/10);
}
console.log(reverse)