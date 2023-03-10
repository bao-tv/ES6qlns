import {getEle,store, getStore} from "./helpers.js";
import {renderStudent} from "./render.js";
import {addStudent, deleteStudent, searchStudent, selectStudent, updateStudent, resetFormStudent} from './studentfunc.js';

export let studentList = getStore('studentList');
export let employeeList = [];
export let customerList = [];

renderStudent(studentList);

// DOM add Student
getEle('#btnAddStudent').addEventListener('click', () => {
    let html = `
        <button class="btn btn-secondary" data-dismiss="modal" id="cancle" >Cancle</button>
        <button class="btn btn-success ml-2" id="addStudent" >Created</button>
    `;
    getEle('.modal-footer-Student').innerHTML = html;
});


// delete Student

getEle('#tblStudentList').addEventListener('click', (evt) => {
    if(evt.target.innerHTML === 'Delete') {
        studentList = deleteStudent(evt.target.getAttribute("data-id"));
        store('studentList',studentList);
        renderStudent(studentList);
    } else if (evt.target.innerHTML === 'Update') {
        selectStudent(evt.target.getAttribute("data-id"));
    }
});

// search
getEle('#txtSearchStudent').addEventListener('keydown', (evt) => {
    setTimeout(() => {
        const searchValue = evt.target.value;
        renderStudent(searchStudent(searchValue));
      }, 1000);
})

getEle('.modal-footer-Student').addEventListener('click', (evt) => {
    // Created Student
    if(evt.target.innerHTML === 'Created') {
        console.log('Created');
        studentList = addStudent();
        renderStudent(studentList);
        store('studentList',studentList);
    } ;

    // Update Student
    if(evt.target.innerHTML === 'Update') {
        studentList = updateStudent(studentList);
        renderStudent(studentList);
        store('studentList',studentList);
    } ;
});
