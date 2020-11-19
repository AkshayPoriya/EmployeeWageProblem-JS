class EmployeePayrollData {
    // Property
    salary;

    // constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
        this.zip = params[5];
    }

    // getter and setter method
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name)) {
            this._name = name;
        } else {
            throw 'Name is Incorrect!';
        }
    }

    get id() { return this._id; }
    set id(id) {
        let idRegex = RegExp('^[1-9]{1}[0-9]*$');
        if (idRegex.test(id)) {
            this._id = id;
        } else {
            throw 'Incorrect Id';
        }
    }

    get gender() { return this._gender; }
    set gender(gender) {
        let genderRegex = RegExp('^[MFmf]{1}$');
        if (genderRegex.test(gender)) {
            this._gender = gender;
        } else {
            throw 'Invalid input for gender';
        }
    }

    get startDate() { return this._startDate; }
    set startDate(startDate) {
        let currentDAte = new Date();
        if (currentDAte - startDate >= 0) {
            this._startDate = startDate;
        } else {
            throw 'Invalid Date';
        }
    }

    get zip() { return this._zip; }
    set zip(zip) {
        let zipRegex = RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
        if (zipRegex.test(zip)) {
            this._zip = zip;
        }
        else {
            throw 'Invalid Pin Code';
        }
    }

    // method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary + ", gender = " + this.gender + ", startDate = " + empDate;
    }
}

try {
    let employeePayrollData = new EmployeePayrollData(1, "Virat", 3000, 'M', new Date(), 'A122585');
    console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e);
}
try {
    let employeePayrollData = new EmployeePayrollData(1, "Rohit", 3000, 'M', new Date(), '122585');
    console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e);
}
try {
    let newEmployeePayrollData = new EmployeePayrollData(1, "Smith", 3000, 'M', new Date(), '166658');
    console.log(newEmployeePayrollData.toString());
} catch (e) {
    console.error(e);
}