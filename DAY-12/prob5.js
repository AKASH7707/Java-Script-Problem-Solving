// w.a.f. that accepts a number n, which prints prime numbers form 1 to n

function printPrime(num){
    for(let i=2; i<=num; i++){
        let isPrime = true;
        for(let j=2; j<=i-1; j++){
            if(i%j==0){
            isPrime = false;
            break;
            }
        }
        if(isPrime){
        console.log(i);
        }
}}

printPrime(7)