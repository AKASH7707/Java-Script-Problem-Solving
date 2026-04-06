//         *         
//       * * *       
//     * * * * *     
//   * * * * * * *   
// * * * * * * * * * 
//   * * * * * * *   
//     * * * * *     
//       * * *       
//         *         

for(let row=1; row<=9; row++){
    let rowStr = "";
    for(let col=1; col<=9; col++){
        if(row<6 && col<=5-row && col>=5+row ){
            rowStr+= "  ";
        }else if(row>=6 && col<=7-row && col<=row+3){
                rowStr+= "  ";
        }else{
            rowStr+= "*";
        }
    }
    console.log(rowStr);
}
