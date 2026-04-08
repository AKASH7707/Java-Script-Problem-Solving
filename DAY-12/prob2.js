// w.a.f to find the smallest among 5 numbers

function findSmallest(num1, num2, num3, num4, num5){
    let smallest = num1;
    if(num2<smallest){
        smallest = num2;
    }
    if(num3<smallest){
        smallest = num3;
    }
    if(num4<smallest){
        smallest = num4;
    }
    if(num5<smallest){
        smallest = num5;
    }
    console.log(smallest);
}


findSmallest(2,5,6,1,55)