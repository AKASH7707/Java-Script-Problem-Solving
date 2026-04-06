
//      C1  C2  C3  C4  C5  C6  C7 
// R1   X                       X
// R2       X               X
// R3           X       X
// R4               X     
// R5           X       X
// R6       X               X
// R7   X                       X                 


for(let row=1; row<=7; row++){
    let rowStr="";
    for(let col=1; col<=7; col++){
        if((row===col) || (col===8 - row)){
            rowStr+= "X ";
        }else{
            rowStr+= "  ";
        }
    }
    console.log(rowStr);
}