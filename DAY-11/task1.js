//         *         
//       *   *       
//     *       *     
//   *           *   
// * * * * * * * * * 

for(let row=1; row<=5; row++){
    let rowStr = "";
    for(let col=1; col<=9; col++){
        if(col===6-row || col===4+row || row===5){
            rowStr+= "* ";
        }else{
            rowStr+= "  ";
        }
    }
    console.log(rowStr);
}