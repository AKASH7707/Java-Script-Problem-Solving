// print 300-400 skip numbers divisible by 9

for(let i=300; i<=400; i++){
    if(i%9==0){
        continue;
    }else{
        console.log(i);
    }
}