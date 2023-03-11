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
    alert(`Successful created new Student :${fullname}`);
    store('studentList',studentList);
    store('listPersons',listPersons);
    resetFormStudent();
};

// delete student
export function deleteStudent(code) {
    let iS = findI(code,studentList);
    alert(`Successful delete Student :${studentList[iS].fullname}`);
    studentList.splice(iS,1);
    listPersons.splice(findI(code,listPersons),1);
    store('studentList',studentList);
    store('listPersons',listPersons);
}
// select student
export function selectStudent(code) {
    getEle('#CodeStudent').value = studentList[findI(code,studentList)].code;
    getEle('#FullNameStudent').value = studentList[findI(code,studentList)].fullname;
    getEle('#AddressStudent').value = studentList[findI(code,studentList)].address;
    getEle('#EmailStudent').value = studentList[findI(code,studentList)].email;
    getEle('#Math').value = studentList[findI(code,studentList)].math;
    getEle('#Physical').value = studentList[findI(code,studentList)].physical;
    getEle('#Chemistry').value = studentList[findI(code,studentList)].chemistry;
    
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
    if(!valStu()) return;
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

