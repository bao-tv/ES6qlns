import {getEle,getStore, getStoreStudent, getStoreEmployee, getStoreCustomer, search,sortdUp,sortDown} from "./helpers.js";
import {renderStudent, renderEmployee,renderListPersons,renderCustomer} from "./render.js";
import {addStudent, deleteStudent, selectStudent, updateStudent, resetFormStudent} from './studentfunc.js';
import {addEmployee, deleteEmployee, selectEmployee, updateEmployee, resetFormEmployee} from './employeefunc';
import {addCustomer, deleteCustomer, selectCustomer, updateCustomer, resetFormCustomer} from './customerfunc';

export let studentList = getStoreStudent('studentList');
export let employeeList = getStoreEmployee('employeeList');
export let customerList = getStoreCustomer('customerList');
export let listPersons = getStore('listPersons');

renderStudent(studentList);
renderEmployee(employeeList);
renderCustomer(customerList);
renderListPersons(listPersons);

// =================== Student =========================
// DOM Created Student
getEle('#btnAddStudent').addEventListener('click', () => {
    getEle('#CodeStudent').disabled = false;
    let html = `
    <button class="btn btn-secondary" data-dismiss="modal" id="cancle" >Cancle</button>
    <button class="btn btn-success ml-2" >Created</button>
    `;
    getEle('.modal-footer-Student').innerHTML = html;
});

getEle('.modal-footer-Student').addEventListener('click', (evt) => {
    // Created Student
    if(evt.target.innerHTML === 'Created') {
        addStudent();
        renderStudent(studentList);
        renderListPersons(listPersons);
    } ;

    // Update Student
    if(evt.target.innerHTML === 'Update') {
        updateStudent();
        renderStudent(studentList);
        renderListPersons(listPersons);
    } ;

    if(evt.target.innerHTML === 'Cancle') resetFormStudent(); 
});

// delete or select Student
getEle('#tblStudentList').addEventListener('click', (evt) => {
    if(evt.target.innerHTML === 'Delete') {
        deleteStudent(evt.target.getAttribute("data-id"));
        renderStudent(studentList);
        renderListPersons(listPersons);
    } else if (evt.target.innerHTML === 'Update') {
        getEle('#CodeStudent').disabled = true;
        selectStudent(evt.target.getAttribute("data-id"));
    }
});

// search
getEle('#txtSearchStudent').addEventListener('keydown', (evt) => {
    setTimeout(() => {
        const searchValue = evt.target.value;
        renderStudent(search(searchValue,studentList));
      }, 1000);
})

// arrange A-Z or Z-A
getEle('#studentSort').addEventListener('change', (evt) => {
    if(evt.target.value == 1) {
        renderStudent(sortdUp(studentList));
    };
    if(evt.target.value == 2) {
        renderStudent(sortDown(studentList));
    };
});


// =================== Employee =========================
// DOM Created Employee
getEle('#btnAddEmployee').addEventListener('click', () => {
    let html = `
        <button class="btn btn-secondary" data-dismiss="modal" id="cancle" >Cancle</button>
        <button class="btn btn-success ml-2" >Created</button>
    `;
    getEle('.modal-footer-Employee').innerHTML = html;
    getEle('#CodeEmployee').disabled = false;
});

getEle('.modal-footer-Employee').addEventListener('click', (evt) => {
    // Created Employee
    if(evt.target.innerHTML === 'Created') {
        addEmployee();
        renderEmployee(employeeList);
        renderListPersons(listPersons);
    } ;

    // Update Student
    if(evt.target.innerHTML === 'Update') {
        updateEmployee();
        renderEmployee(employeeList);
        renderListPersons(listPersons);
    } ;

    if(evt.target.innerHTML === 'Cancle') resetFormEmployee(); 
});

// // delete Employee and select Employee
getEle('#tblEmployeeList').addEventListener('click', (evt) => {
    if(evt.target.innerHTML === 'Delete') {
        deleteEmployee(evt.target.getAttribute("data-id"));
        renderEmployee(employeeList);
        renderListPersons(listPersons);
    } else if (evt.target.innerHTML === 'Update') {
        getEle('#CodeEmployee').disabled = true;
        selectEmployee(evt.target.getAttribute("data-id"));
    }
});

// // search
getEle('#txtSearchEmployee').addEventListener('keydown', (evt) => {
    setTimeout(() => {
        const searchValue = evt.target.value;
        renderEmployee(search(searchValue,employeeList));
      }, 1000);
})

// // arrange A-Z or Z-A
getEle('#employeeSort').addEventListener('change', (evt) => {
    if(evt.target.value == 1) {
        renderEmployee(sortdUp(employeeList));
    };
    if(evt.target.value == 2) {
        renderEmployee(sortDown(employeeList));
    };
});

// =================== Customer =========================
// DOM Created Customer
getEle('#btnAddCustomer').addEventListener('click', () => {
    let html = `
        <button class="btn btn-secondary" data-dismiss="modal" id="cancle" >Cancle</button>
        <button class="btn btn-success ml-2" >Created</button>
    `;
    getEle('.modal-footer-Customer').innerHTML = html;
    getEle('#CodeCustomer').disabled = false;
});

getEle('.modal-footer-Customer').addEventListener('click', (evt) => {
    // Created Customer
    if(evt.target.innerHTML === 'Created') {
        addCustomer();
        renderCustomer(customerList);
        renderListPersons(listPersons);
    } ;
    // Update Student
    if(evt.target.innerHTML === 'Update') {
        updateCustomer();
        renderCustomer(customerList);
        renderListPersons(listPersons);
    } ;
    if(evt.target.innerHTML === 'Cancle') resetFormCustomer(); 
});

// // // delete Customer and select Customer
getEle('#tblCustomerList').addEventListener('click', (evt) => {
    if(evt.target.innerHTML === 'Delete') {
        deleteCustomer(evt.target.getAttribute("data-id"));
        renderCustomer(customerList);
        renderListPersons(listPersons);

    } else if (evt.target.innerHTML === 'Update') {
        getEle('#CodeCustomer').disabled = true;
        selectCustomer(evt.target.getAttribute("data-id"));
    }
});

// // // search
getEle('#txtSearchCustomer').addEventListener('keydown', (evt) => {
    setTimeout(() => {
        const searchValue = evt.target.value;
        renderCustomer(search(searchValue,customerList));
      }, 1000);
})

// // // arrange A-Z or Z-A
getEle('#customerSort').addEventListener('change', (evt) => {
    if(evt.target.value == 1) {
        renderCustomer(sortdUp(customerList));
    };
    if(evt.target.value == 2) {
        renderCustomer(sortDown(customerList));
    };
});

// =================== ListPeron =========================
// // search
getEle('#txtSearchListPerson').addEventListener('keydown', (evt) => {
    setTimeout(() => {
        const searchValue = evt.target.value;
        renderListPersons(search(searchValue,listPersons));
      }, 1000);
})

// // arrange A-Z or Z-A
getEle('#listPersonSort').addEventListener('change', (evt) => {
    if(evt.target.value == 1) {
        renderListPersons(sortdUp(listPersons));
    };
    if(evt.target.value == 2) {
        renderListPersons(sortDown(listPersons));
    };
});