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
        if(row<=5 && col>=6-row && col<=4+row ){
            rowStr+= "* ";
        }else if(row>=6 && col>=row-4 && col<=14-row){
                rowStr+= "* ";
        }else{
            rowStr+= "  ";
        }
    }
    console.log(rowStr);
}



