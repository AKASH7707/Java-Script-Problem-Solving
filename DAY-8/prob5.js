// largest digit among the given number

let num = 1203893;
let largest = null;

while(num>0){
    let lastDigit = num%10;
    lastDigit>largest && (largest=lastDigit);
    num = Math.floor(num/10);
}

console.log(largest, "is the largest number")