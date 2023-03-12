import {getEle,store, findI} from "./helpers.js";
import {Employee,Person} from "./constructor.js";
import {employeeList,listPersons} from './main.js';
import {valEmp} from "./validate.js";

export function addEmployee() {
    // DOM
    let code = getEle('#CodeEmployee').value;
    let fullname = getEle('#FullNameEmployee').value;
    let address = getEle('#AddressEmployee').value;
    let email = getEle('#EmailEmployee').value;
    let workingday = getEle('#Workingday').value;
    let dailywage = getEle('#Dailywage').value;
    let type = 'Employee';
    // check validate
    if(!valEmp()) return;
    const EmployeeAdd =  new Employee (code,fullname,address,email,workingday,dailywage,type);
    const personAdd = new Person (code,fullname,address,email, type)
    listPersons.push(personAdd);
    employeeList.push(EmployeeAdd);
    store('employeeList',employeeList);
    store('listPersons',listPersons);
    alert(`Successful created new Employee :${fullname}`);
    resetFormEmployee();
};

export function resetFormEmployee() {
    getEle('#CodeEmployee').value = '';
    getEle('#FullNameEmployee').value = '';
    getEle('#AddressEmployee').value = '';
    getEle('#EmailEmployee').value = '';
    getEle('#Workingday').value = '';
    getEle('#Dailywage').value = '';
};

// delete 
export function deleteEmployee(code) {
    let eS = findI(code,employeeList);
    employeeList.splice(eS,1);
    listPersons.splice(findI(code,listPersons),1);
    store('employeeList',employeeList);
    store('listPersons',listPersons);
    alert(`Successful delete Employee :${employeeList[eS].fullname}`);
}

// select
export function selectEmployee(code) {
    const id = findI(code,employeeList);
    getEle('#CodeEmployee').value = employeeList[id].code;
    getEle('#FullNameEmployee').value = employeeList[id].fullname;
    getEle('#AddressEmployee').value = employeeList[id].address;
    getEle('#EmailEmployee').value = employeeList[id].email;
    getEle('#Workingday').value = employeeList[id].workingday;
    getEle('#Dailywage').value = employeeList[id].dailywage;
    
    let html = `
        <button class="btn btn-secondary" data-dismiss="modal" id="cancle" >Cancle</button>
        <button class="btn btn-success ml-2" id="updateEmployee" >Update</button>
    `;
    getEle('.modal-footer-Employee').innerHTML = html;
};

// update 
export function updateEmployee() {
    let code = getEle('#CodeEmployee').value;
    let fullname = getEle('#FullNameEmployee').value;
    let address = getEle('#AddressEmployee').value;
    let email = getEle('#EmailEmployee').value;
    let workingday = getEle('#Workingday').value;
    let dailywage = getEle('#Dailywage').value;
    let type = 'Employee';
    // check validate
    if(!valEmp('Update')) return;
    const employeeUpdate =  new Employee (code,fullname,address,email,workingday,dailywage,type);
    const personUpdate = new Person (code,fullname,address,email,type);
    employeeList[findI(code,employeeList)] = employeeUpdate;
    listPersons[findI(code,listPersons)] = personUpdate;
    store('employeeList',employeeList);
    store('listPersons',listPersons);
    alert(`Successful update Employee :${fullname}`);
    resetFormEmployee();
};