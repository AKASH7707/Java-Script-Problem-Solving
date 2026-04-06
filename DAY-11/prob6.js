
//      C1  C2  C3  C4
// R1   H           H    
// R2   H           H
// R3   H   H   H   H
// R4   H           H 
// R5   H           H 


for(let row=1; row<=5; row++){
    let rowStr = "";
    for(let col=1; col<=5; col++){
        if(col===1 || col===5 || row===3){
            rowStr+= "H ";
        }else{
            rowStr+= "  ";
        }
    }
    console.log(rowStr);
}