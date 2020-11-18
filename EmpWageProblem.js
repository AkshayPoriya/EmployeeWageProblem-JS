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

const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;

while (totalEmpHrs <= MAX_WORKING_HOURS && totalWorkingDays <= MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 1000) % 3;
    let dailyEmpHrs = GetWorkingHours(empCheck);
    if (totalEmpHrs + dailyEmpHrs <= MAX_WORKING_HOURS) {
        totalEmpHrs += dailyEmpHrs;
    } else {
        break;
    }
}

let totalEmpWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Hours: " + totalEmpHrs + "\nTotal Wage: " + totalEmpWage);