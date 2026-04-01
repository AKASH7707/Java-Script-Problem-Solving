// sum of digits


let num = 123;
let total = null;

while(num>0){
    total += num%10;
    num = Math.floor(num/10);
}

console.log(total)