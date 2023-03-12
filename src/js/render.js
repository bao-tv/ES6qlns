// SpeechSynthesisUtterance
import {getEle} from "./helpers.js";
// Student
export function renderStudent(studentList) {
    let html = studentList.reduce((output, student, index) => {
        return (
            output +`
            <tr>
                <td>${index + 1}</td>
                <td>${student.fullname}</td>
                <td>${student.address}</td>
                <td>${student.code}</td>
                <td>${student.email}</td>
                <td>${student.math}</td>
                <td>${student.physical}</td>
                <td>${student.chemistry}</td>
                <td>${student.calcMedium().toFixed(2)}</td>
                <td>
                    <button class="btn btn-primary" data-toggle="modal"
                    data-target="#StudentModal" data-id="${student.code}">Update</button>
                    <button class="btn btn-danger" data-id="${student.code}">Delete</button>
                </td>
            </tr>
            `
        );
    },"");

    getEle("#tblStudentList").innerHTML = html;
};

// Employee
export function renderEmployee(employeeList) {
    let html = employeeList.reduce((output, employee, index) => {
        return (
            output +`
            <tr>
                <td>${index + 1}</td>
                <td>${employee.fullname}</td>
                <td>${employee.address}</td>
                <td>${employee.code}</td>
                <td>${employee.email}</td>
                <td>${employee.workingday.toLocaleString()}</td>
                <td>${employee.dailywage.toLocaleString()}</td>
                <td>${employee.calcSalary().toLocaleString()}</td>
                <td>
                    <button class="btn btn-primary" data-toggle="modal"
                    data-target="#EmployeeModal" data-id="${employee.code}">Update</button>
                    <button class="btn btn-danger" data-id="${employee.code}">Delete</button>
                </td>
            </tr>
            `
        );
    },"");

    getEle("#tblEmployeeList").innerHTML = html;
};

// Customer
export function renderCustomer(CustomerList) {
    let html = CustomerList.reduce((output, Customer, index) => {
        return (
            output +`
            <tr>
                <td>${index + 1}</td>
                <td>${Customer.fullname}</td>
                <td>${Customer.address}</td>
                <td>${Customer.code}</td>
                <td>${Customer.email}</td>
                <td>${Customer.companyname}</td>
                <td>${Customer.totalinvoice.toLocaleString()}</td>
                <td>${Customer.rank}</td>
                <td>
                    <button class="btn btn-primary" data-toggle="modal"
                    data-target="#CustomerModal" data-id="${Customer.code}">Update</button>
                    <button class="btn btn-danger" data-id="${Customer.code}">Delete</button>
                </td>
            </tr>
            `
        );
    },"");

    getEle("#tblCustomerList").innerHTML = html;
};

// ListPerson
export function renderListPersons(listPersons) {
    let html = listPersons.reduce((output, person, index) => {
        return (
            output +`
            <tr>
                <td>${index + 1}</td>
                <td>${person.fullname}</td>
                <td>${person.address}</td>
                <td>${person.code}</td>
                <td>${person.email}</td>
                <td>${person.type}</td>
            </tr>
            `
        );
    },"");

    getEle("#tblListPersons").innerHTML = html;
};