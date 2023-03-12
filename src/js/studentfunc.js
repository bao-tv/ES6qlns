import {getEle,store, findI} from "./helpers.js";
import {Student,Person} from "./constructor.js";
import {studentList,listPersons} from './main.js';
import {valStu} from "./validate.js";
// add student
export function addStudent() {
    // DOM
    let code = getEle('#CodeStudent').value;
    let fullname = getEle('#FullNameStudent').value;
    let address = getEle('#AddressStudent').value;
    let email = getEle('#EmailStudent').value;
    let math = getEle('#Math').value;
    let physical = getEle('#Physical').value;
    let chemistry = getEle('#Chemistry').value;
    let type = 'Student';
    // check validate
    if(!valStu()) return;

    const studentAdd =  new Student (code,fullname,address,email,math,physical,chemistry,type);
    const personAdd = new Person (code,fullname,address,email, type);
    listPersons.push(personAdd);
    studentList.push(studentAdd);
    store('studentList',studentList);
    store('listPersons',listPersons);
    alert(`Successful created new Student :${fullname}`);
    resetFormStudent();
};

// delete student
export function deleteStudent(code) {
    let iS = findI(code,studentList);
    studentList.splice(iS,1);
    listPersons.splice(findI(code,listPersons),1);
    store('studentList',studentList);
    store('listPersons',listPersons);
    alert(`Successful delete Student :${studentList[iS].fullname}`);
}
// select student
export function selectStudent(code) {
    const id = findI(code,studentList);
    getEle('#CodeStudent').value = studentList[id].code;
    getEle('#FullNameStudent').value = studentList[id].fullname;
    getEle('#AddressStudent').value = studentList[id].address;
    getEle('#EmailStudent').value = studentList[id].email;
    getEle('#Math').value = studentList[id].math;
    getEle('#Physical').value = studentList[id].physical;
    getEle('#Chemistry').value = studentList[id].chemistry;
    
    let html = `
        <button class="btn btn-secondary" data-dismiss="modal" id="cancle" >Cancle</button>
        <button class="btn btn-success ml-2" id="updateStudent" >Update</button>
    `;
    getEle('.modal-footer-Student').innerHTML = html;
};

// update student
export function updateStudent() {
    let code = getEle('#CodeStudent').value;
    let fullname = getEle('#FullNameStudent').value;
    let address = getEle('#AddressStudent').value;
    let email = getEle('#EmailStudent').value;
    let math = getEle('#Math').value;
    let physical = getEle('#Physical').value;
    let chemistry = getEle('#Chemistry').value;
    let type = 'Student';
    // check validate

    if(!valStu('Update')) return;
    const studentUpdate =  new Student (code,fullname,address,email,math,physical,chemistry,type);
    const personAdd = new Person (code,fullname,address,email,type);
    
    studentList[findI(code,studentList)] = studentUpdate;
    listPersons[findI(code,listPersons)] = personAdd;

    store('studentList',studentList);
    store('listPersons',listPersons);
    alert(`Successful update Student :${fullname}`);
    resetFormStudent();
};

// reset form student
export function resetFormStudent() {
    getEle('#CodeStudent').value = '';
    getEle('#FullNameStudent').value = '';
    getEle('#AddressStudent').value = '';
    getEle('#EmailStudent').value = '';
    getEle('#Math').value = '';
    getEle('#Physical').value = '';
    getEle('#Chemistry').value = '';
};

