// C1	 	C2		C3		C4
// 2 		3		4		5	R1
// 2 		3		4		5	R2
// 2 		3		4		5	R3

for(let row=1; row<=3; row++){
    let rowStr = "";
    for(let col=1; col<=4; col++){
        rowStr += (col+1) + " ";
    }
    console.log(rowStr);
}