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
let empHrs = 0;
const WORKING_DAYS_IN_A_MONTH = 20;
for (let days = 1; days <= WORKING_DAYS_IN_A_MONTH; days++) {
    let empCheck = Math.floor(Math.random() * 1000) % 3;
    empHrs += GetWorkingHours(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hours: " + empHrs + "\nTotal Wage: " + empWage);