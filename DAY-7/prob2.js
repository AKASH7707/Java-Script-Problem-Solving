// print all the odd numbers form 500 to 700 and skip all the numbers that are divisible by  5. using while loop 


let i=500;
while(i<=700){
    if(i%2!=0 && i%5!=0){
        console.log(i); 
    }
    i++;
}
