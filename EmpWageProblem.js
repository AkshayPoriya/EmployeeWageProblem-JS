const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function GetWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_ABSENT:
            return 0;
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return null;
    }
}

function CalculateWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let dailyWageArr = new Array();
let dailyWageMap = new Map();
let dailyHoursMap = new Map();

while (totalEmpHrs <= MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 1000) % 3;
    let dailyEmpHrs = GetWorkingHours(empCheck);
    if (totalEmpHrs + dailyEmpHrs <= MAX_WORKING_HOURS) {
        totalEmpHrs += dailyEmpHrs;
        dailyWageArr.push(CalculateWage(dailyEmpHrs));
        dailyWageMap.set(totalWorkingDays, CalculateWage(dailyEmpHrs));
        dailyHoursMap.set(totalWorkingDays,dailyEmpHrs);
    } else {
        break;
    }
}
console.log("\nUC6")
let totalEmpWage = CalculateWage(totalEmpHrs);
console.log("Total Hours: " + totalEmpHrs + "\nTotal Wage: " + totalEmpWage);

//UC 7.a (i) Use Array.foreach to calculate total emp wage
let totalEmpWage1 = 0;
dailyWageArr.forEach(function (dailyWage) {
    totalEmpWage1 += dailyWage;
});
console.log("\nUC 7.a(i) Total Wage: " + totalEmpWage1);

//UC 7.a (ii) Use Array.reduce method to calculate total emp wage
function sum(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
let totalEmpWage2 = dailyWageArr.reduce(sum, 0);
console.log("UC 7.a(ii) Total Wage: " + totalEmpWage2);

//UC 7.b show the day along with daily wage using Array.map function
let dayCounter = 0;
function MapDayWithWage(dailyWage) {
    ++dayCounter;
    return dayCounter + " - " + dailyWage;
}
let mapDayWithWageArr = dailyWageArr.map(MapDayWithWage);
console.log("UC 7.b Day with wage");
console.log(mapDayWithWageArr);

//UC 7.c show days when full time wage was earned
function CheckIfFullTimeWage(dayAndWage) {
    return dayAndWage.includes("160");
}
let fullTimeWageArr = mapDayWithWageArr.filter(CheckIfFullTimeWage);
console.log("UC 7.c Days when full time wage was earned")
console.log(fullTimeWageArr);

//UC 7.d find the first occurence when full time wage was used
console.log("UC 7.d First day when when full time wage was earned");
console.log(mapDayWithWageArr.find(CheckIfFullTimeWage));

//UC 7.e Check if every element of full time wage is truly holding full time wage
console.log("UC 7.e Check if fullTimeWageArr is truly holding full time wage");
console.log(fullTimeWageArr.every(CheckIfFullTimeWage));

//UC 7.f Check if there is any part time wage
function CheckIfPartTimeWage(dayAndWage) {
    return dayAndWage.includes("80");
}
console.log("UC 7.f Check of any part time wage was earned or not");
console.log(mapDayWithWageArr.some(CheckIfPartTimeWage));

// UC 7.g Find the number of days employee worked
function WorkingDays(countOfWorkingDays, dailyWage) {
    if (dailyWage > 0) {
        countOfWorkingDays++;
    }
    return countOfWorkingDays;
}
let daysEmpWorked = dailyWageArr.reduce(WorkingDays, 0);
console.log("UC 7.g Number of days employee worked: " + daysEmpWorked);

//UC 8
let totalEmpWage3 = Array.from(dailyWageMap.values()).reduce(sum, 0);
console.log("\nUC8 Store daily wage in map");
console.log(dailyWageMap);
console.log("Total emp wage: " + totalEmpWage3);

//UC 9.a Calculate total wages and total hours worked using arrow functions
let totalEmpHours = Array.from(dailyHoursMap.values()).reduce(sum,0);
let totalEmpWage4 = dailyWageArr.filter(dailyWage=>dailyWage>0).reduce(sum,0);
console.log("\nUC 9.a Get total hours and wage using arrow functions");
console.log("Total emp wage: "+totalEmpWage4+"\nTotal Working Hours: "+totalEmpHours);

//UC 9.b Show the full working days, part working days, no working days
let mapTypeOfWorkingDay = new Map();
mapTypeOfWorkingDay.set("full_work",new Array());
mapTypeOfWorkingDay.set("part_time",new Array());
mapTypeOfWorkingDay.set("no_work",new Array());
dailyHoursMap.forEach((value,key,map)=>{
    if(value==8){
        let arr = mapTypeOfWorkingDay.get("full_work");
        arr.push(key);
        mapTypeOfWorkingDay.set("full_work",arr);
    }else if(value==4){
        let arr = mapTypeOfWorkingDay.get("part_time");
        arr.push(key);
        mapTypeOfWorkingDay.set("part_time",arr);
    }else{
        let arr = mapTypeOfWorkingDay.get("no_work");
        arr.push(key);
        mapTypeOfWorkingDay.set("no_work",arr);
    }
});
console.log("UC 9.b Show the full working, part time working and no working days");
console.log(mapTypeOfWorkingDay);