// C1	 	C2		C3		C4
// 2 		2		2		2	R1
// 3 		3		3		3	R2
// 4 		4		4		4	R3
// 5 		5		5		5	R4


for(let row=1; row<=4; row++){
    let rowStr = "";
    for(let col=1; col<=4; col++){
        rowStr += (row+1) + " ";
    }
    console.log(rowStr);
}