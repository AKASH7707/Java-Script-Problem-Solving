// C1	 	C2		C3		C4
// 10 		11		12		13		R1
// 14 		15		16		17		R2
// 18 		19		20		21		R3
// 22 	    23		24		25		R4

let num = 10;
for(let row=1; row<=4; row++){
    let rowStr = "";
    for(let col=1; col<=4; col++){
        rowStr += num + " ";
        num++
    }
    console.log(rowStr);
} 