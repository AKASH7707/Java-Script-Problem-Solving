// 5. Count how many numbers between 1 and 100 are divisible by both 3 and 5.
let total=0;

for(let i=1; i<=100; i++){
    if(i%3==0 && i%5==0){
        total+=i;
    }
}
console.log(total)