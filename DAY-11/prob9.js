//      C1  C2  C3  C4  C5
// R1   * 
// R2   *   * 
// R3   *       * 
// R4   *           * 
// R5   *   *   *   *   *

for(let row=1; row<=5; row++){
    let rowStr="";
    for(let col=1; col<=row; col++){
        if((row===5)||(col===1)||(row===col)){
            rowStr+= "* ";
        }else{
            rowStr+= "  ";
        }
    }
    console.log(rowStr);
}