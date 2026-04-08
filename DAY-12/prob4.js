// w.a.f to calcualte bill, that if the amount is greateer than 1000 provide 12% discount


function calculateBill(total){
    if(total>1000){
        let discoutAmount = total*0.12;
        console.log("your final amount after 12% discount is", total-discoutAmount);
    }else{
        console.log("not eligible for discount");
    }
}

calculateBill(1001)