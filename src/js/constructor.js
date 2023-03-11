
// class cha
export class Person { 
    constructor(code,fullname, address, email, type) {
        this.code = code;
        this.fullname = fullname;
        this.address = address;
        this.email = email;
        this.type = type;
    }
};

export class Student extends Person {
    constructor(code,fullname, address, email, math, physical, chemistry, type) {
        super(code,fullname, address, email, type);
        this.math = +math;
        this.physical = +physical;
        this.chemistry = +chemistry;
    }
    calcMedium () {
        return (this.math + this.physical + this.chemistry) / 3;
    };
};


export class Employee extends Person {
    constructor(code,fullname, address, email, workingday, dailywage, type) {
        super(code,fullname, address, email, type);
        this.workingday = +workingday;
        this.dailywage = +dailywage;
    }

    calcSalary() {
        return this.workingday * this.dailywage;
    }
};

export class Customer extends Person {
    constructor(code,fullname, address, email, companyname, totalinvoice, rank, type) {
        super(code,fullname, address, email, type);
        this.companyname = companyname;
        this.totalinvoice = +totalinvoice;
        this.rank = rank;
    }
}

