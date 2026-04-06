// C1	C2	C3	C4   C5
// T	T	T	T    T   R1
//  	 	T            R2
// 	        T            R3
//          T            R4
//          T            R5


for(let row=1; row<=5; row++){
    let rowStr = "";
    for(let col=1; col<=5; col++){
        if(row===1 || col==3){
            rowStr+= "T ";
        }else{
            rowStr+= "  ";
        }
    }
    console.log(rowStr);
}