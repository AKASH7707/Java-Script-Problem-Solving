// * * * * * 
// * *   * * 
// *   *   * 
// * *   * * 
// * * * * * 

for(let row=1; row<=5; row++){
    let rowStr = "";
    for(let col=1; col<=5; col++){
        if(col===row || col===6-row || col===1 || col===5 || row===1 || row===5){
            rowStr+= "* ";
        }else{
            rowStr+= "  ";
        }
    }
    console.log(rowStr);
}