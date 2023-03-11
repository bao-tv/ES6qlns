import {Student, Employee, Customer, Person} from "./constructor.js";

// ================ Helpers ===================
export function getEle(selector) {
    return document.querySelector(selector)
};

// lưu localstory
export function store(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
};

// lấy thông tin giỏ hàng từ local
export function getStore(key) {
    const json = localStorage.getItem(key);
    if(!json) return []; 
    
    // chuyển Json -> Array
    const personList = JSON.parse(json);
    for(let i =0;i<personList.length; i++) {
        const person = personList[i];
        personList[i] = new Person (
            person.code, 
            person.fullname, 
            person.address, 
            person.email,
            person.type);
    }
    return personList;
};

export function getStoreStudent(key) {
    const json = localStorage.getItem(key);
    if(!json) return []; 
    
    // chuyển Json -> Array
    const studentList = JSON.parse(json);
    for(let i =0;i<studentList.length; i++) {
        const student = studentList[i];
        studentList[i] = new Student (
            student.code, 
            student.fullname, 
            student.address, 
            student.email, 
            +student.math,
            +student.physical, 
            +student.chemistry, 
            student.type);
    }
    return studentList;
};

export function getStoreEmployee(key) {
    const json = localStorage.getItem(key);
    if(!json) return []; 
    
    // chuyển Json -> Array
    const employeeList = JSON.parse(json);
    for(let i =0;i<employeeList.length; i++) {
        const employee = employeeList[i];
        employeeList[i] = new Employee (
            employee.code, 
            employee.fullname, 
            employee.address, 
            employee.email, 
            +employee.workingday,
            +employee.dailywage,
            employee.type);
    }
    return employeeList;
};

export function getStoreCustomer(key) {
    const json = localStorage.getItem(key);
    if(!json) return []; 
    
    // chuyển Json -> Array
    const customerList = JSON.parse(json);
    for(let i =0;i<customerList.length; i++) {
        const customer = customerList[i];
        customerList[i] = new Customer (
            customer.code, 
            customer.fullname, 
            customer.address, 
            customer.email,
            customer.companyname, 
            +customer.totalinvoice,
            +customer.rank,
            customer.type);
    }
    return customerList;
};

export function findI(code, List) {
    let index = List.findIndex((student) => {
        return student.code === code;
    });
    return index;
};

export function searchStudent(searchName) {
    let newStudent = studentList.filter((student) => {
        let nameStudent = student.fullname.toLowerCase();
        searchName = searchName.toLowerCase();
        return nameStudent.indexOf(searchName) !== -1;
    })
    return newStudent;
}

export function search(name, list) {
    let newList = list.filter((li) => {
        let nameli = li.fullname.toLowerCase();
        name = name.toLowerCase();
        return nameli.indexOf(name) !== -1;
    })
    return newList;
}
let sortArray;
export function sortdUp(list) {
    sortArray = list.sort((a,b) => {
        const nameA = a.fullname.toLowerCase();
        const nameB = b.fullname.toLowerCase();
        if(nameA < nameB) {
            return -1;
        } else if(nameA > nameB) {
            return 1;
        } else {
            return 0;
        }
    });
    return sortArray;
};

export function sortDown(list) {
    sortArray = list.sort((a,b) => {
        const nameA = a.fullname.toLowerCase();
        const nameB = b.fullname.toLowerCase();
        if(nameA > nameB) {
            return -1;
        } else if(nameA < nameB) {
            return 1;
        } else {
            return 0;
        }
    });
    return sortArray;
};
