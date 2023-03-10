import {getEle,store, getStore} from "./helpers.js";
import {Student, Employee, Customer} from "./constructor.js";
import {renderStudent} from "./render.js";

export let studentList = getStore('studentList');
export let employeeList = [];
export let customerList = [];

renderStudent(studentList);
console.log('getStore: ',getStore('studentList'), typeof getStore('studentList'));

getEle('#addStudent').addEventListener('click', addStudent);
function addStudent() {
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
    renderStudent(studentList);
    store('studentList',studentList);
    alert(`Successful created new Student :${fullname}`);

    console.log('add thành công');
};

getEle('#deteleStudent').addEventListener('click', (event) => {
    console.log(event.target.value);
    console.log('đã xóa');

});

function deleteStudent(code) {
    console.log('đã xóa');

    // studentList = studentList.filter((student) => {
    //     return student.code !== code;
    // });
    // renderStudent(studentList);
    // store('studentList',studentList);
    // renderStudent(studentList);
    // store('studentList',studentList);
}











