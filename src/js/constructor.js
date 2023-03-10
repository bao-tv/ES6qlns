
// class cha
class ListPerson {
    constructor(code,fullname, address, email) {
        this.code = code;
        this.fullname = fullname;
        this.address = address;
        this.email = email;
    }
};

export class Student extends ListPerson {
    constructor(code,fullname, address, email, math, physical, chemistry, type) {
        super(code,fullname, address, email);
        this.math = +math;
        this.physical = +physical;
        this.chemistry = +chemistry;
        this.type = type;
    }
    calcMedium () {
        return (this.math + this.physical + this.chemistry) / 3;
    };
};


export class Employee extends ListPerson {
    constructor(code,fullname, address, email, workingday, dailywage, type) {
        super(code,fullname, address, email);
        this.workingday = workingday;
        this.dailywage = dailywage;
        this.type = 'Employee';
    }

    calcSalary() {
        return this.workingday * this.dailywage;
    }
};

export class Customer extends ListPerson {
    constructor(code,fullname, address, email, companyname, totalinvoice, rank, type) {
        super(code,fullname, address, email);
        this.companyname = companyname;
        this.totalinvoice = totalinvoice;
        this.rank = rank;
        this.type = 'Customer';
    }
}

