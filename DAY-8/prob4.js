// total count of a number

let num = 123;
let count = null;

while(num>0){
    num = Math.floor(num/10);
    count++;
}

console.log(count);