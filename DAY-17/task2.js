// [ no,district,+ve cases, death rate, curred rate ,1st dose vaccine , 2nd dose vaccine ]

covid_data = [
  [1, "Ernakulam", 34000, 2000, 23000, 20000, 2000],
  [2, "Thiruvananthapuram", 25000, 1500, 18000, 15000, 1800],
  [3, "Kozhikode", 27000, 1800, 20000, 19000, 1700],
  [4, "Thrissur", 30000, 1900, 22000, 21000, 2000],
  [5, "Kottayam", 20000, 1200, 15000, 14000, 1200],
  [6, "Kannur", 22000, 1300, 17000, 16000, 1300],
  [7, "Alappuzha", 24000, 1400, 19000, 18000, 1500],
  [8, "Pathanamthitta", 18000, 1000, 14000, 13000, 1100],
];

// Is there any district with +ve cases > 25000 
let anyPositiveGreater25000 = covid_data.some((eachDistrict) => eachDistrict[2]>25000);
anyPositiveGreater25000?console.log("Yes"):console.log("No");

// Check every district with +ve cases > 25000 or not 
let allPositiveGreater25000 = covid_data.every((eachDistrict) => eachDistrict[2]>25000);
allPositiveGreater25000?console.log("Yes"):console.log("No");

// // Print total number of positive cases
let totalPositive = covid_data.reduce((acc, curr) => acc+curr[2], 0);
console.log(totalPositive);

// District having Highest +ve case :
let highestPositive = covid_data.reduce((acc, curr) => acc[2]>curr[2]?acc: curr);
console.log(highestPositive[1]);

// District having Highest 1st dose vaccine  :
let highestFirstDose = covid_data.reduce((acc, curr) => acc[5]>curr[5]?acc: curr);
console.log(highestFirstDose[1]);

// District having lowest death :
let lowestDeathDistrict = covid_data.reduce((acc, curr) => acc[3]<curr[3]?acc: curr);
console.log(lowestDeathDistrict[1]);

// Sort data with +ve case in descending order :
let sortedPositive = covid_data.toSorted((a,b) => b[2]-a[2]);
console.log(sortedPositive);
// -----------------------------------------------

// Sort data with 1st dose vaccine
let sortFirstVaccine = covid_data.toSorted((a,b)=> a[5]-b[5]);
console.log(sortFirstVaccine);

// Print thrissur details
let thrissurData = covid_data.find((eachDistrict)=>eachDistrict=="Thrissur");

// Print total number of curred cases
let totalCurred = covid_data.reduce((acc, curr) => acc+curr[4], 0);
console.log(totalCurred);
