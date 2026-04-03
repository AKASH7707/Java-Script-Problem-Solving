// for(let row=1; row<=4; row++){
//     let rowStr = "";
//     for(let col=1; col<=4; col++){
//         if(col===1 || col===4 || row===1 || row===4){
//             rowStr+= "* ";
//         }else{
//             rowStr+= "# ";
//         }
//     }
//     console.log(rowStr);
// }


for(let row=1; row<=4; row++){
    let rowStr = "";
    for(let col=1; col<=4; col++){
        if((row>1 && row<=3) && (col>1 && col<=3)){
            rowStr+= "# ";
        }else{
            rowStr+= "* ";
        }
    }
    console.log(rowStr);
}
