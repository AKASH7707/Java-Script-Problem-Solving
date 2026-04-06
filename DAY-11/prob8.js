//      C1  C2  C3  C4  C5
// R1   *   *   *   *   #   
// R2   *   *   *   #       #
// R3   *   *   #       #       #   
// R4   *   #       #       #       #


for(let row=1; row<=4; row++){
    let rowStr="";
    for(let col=1; col<=5; col++){
        if(col<=5-row){
            rowStr+= "* ";
        }else{
            rowStr+= "#  ";
        }
    }
    console.log(rowStr);
}