import {getEle,store} from "./helpers.js";
import {Student} from "./constructor.js";
import {studentList} from './main.js';
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
    const studentAdd =  new Student (code,fullname,address,email,math,physical,chemistry,type);
    studentList.push(studentAdd);
    alert(`Successful created new Student :${fullname}`);
    return studentList;
};

// delete student
export function deleteStudent(code) {
    studentListAfter = studentList.filter((student) => {
        if(student.code == code) alert(`Successful delete Student :${student.fullname}`);
        return student.code !== code;
    });
    return studentListAfter;
};

// select student
export function selectStudent(code) {
    let studentSelect = studentList.find((student) => {
        return student.code === code;
    });
    getEle('#CodeStudent').value = studentSelect.code;
    getEle('#FullNameStudent').value = studentSelect.fullname;
    getEle('#AddressStudent').value = studentSelect.address;
    getEle('#EmailStudent').value = studentSelect.email;
    getEle('#Math').value = studentSelect.math;
    getEle('#Physical').value = studentSelect.physical;
    getEle('#Chemistry').value = studentSelect.chemistry;
    
    let html = `
        <button class="btn btn-secondary" data-dismiss="modal" id="cancle" >Cancle</button>
        <button class="btn btn-success ml-2" id="updateStudent" >Update</button>
    `;
    getEle('.modal-footer-Student').innerHTML = html;
};

// update student
export function updateStudent(studentList) {
    let code = getEle('#CodeStudent').value;
    let fullname = getEle('#FullNameStudent').value;
    let address = getEle('#AddressStudent').value;
    let email = getEle('#EmailStudent').value;
    let math = getEle('#Math').value;
    let physical = getEle('#Physical').value;
    let chemistry = getEle('#Chemistry').value;
    let type = 'Student';
    const studentUpdate =  new Student (code,fullname,address,email,math,physical,chemistry,type);
    
    let index = studentList.findIndex((studentUpdate) => {
        return studentUpdate.code === code;
    });

    studentList[index] = studentUpdate;
    return studentList;
};

export function searchStudent(searchName) {
    let newStudent = studentList.filter((student) => {
        let typeStudent = student.fullname.toLowerCase();
        searchName = searchName.toLowerCase();
        return typeStudent.indexOf(searchName) !== -1;
    })
    return newStudent;
}

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


let sortArray;
function sortedUp() {
    function compare(a, b) {
          return a.price - b.price;
        };
    sortArray = productsList.sort(compare);
    renderProducts(sortArray);
};

function sorteDown() {
    function compare(a, b) {
          return b.price - a.price;
        };
    sortArray = productsList.sort(compare);
    renderProducts(sortArray);
};
