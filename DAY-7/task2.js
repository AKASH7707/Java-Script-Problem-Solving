//  print the product of all odd numbers b/w 10 and 40

let total = 1;

for(let num=11; num<40; num++){
    if(num%2!=0){
        total*=num;
    }
}
console.log(total)