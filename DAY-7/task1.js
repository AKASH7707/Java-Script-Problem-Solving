// age group checker
// 0-12 :- Children
// 13-19 :- Teenager
// 20-59 :- Adult
// 60+ :- senior citizen


let age = 23;

if(age>=0 && age<=12){
    console.log("children");
}else if(age>=13 && age<=19){
    console.log("Teenager");
}else if(age>=20 && age<=59){
    console.log("Teenager");
}else if(age>=69){
    console.log("Senior citizen");
}else{
    console.log("invalid age")
}