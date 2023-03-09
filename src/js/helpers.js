import {Student, Employee, Customer} from "./constructor.js";

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
    const studentList = JSON.parse(json);
    for(let i =0;i<studentList.length; i++) {
        const student = studentList[i];
        studentList[i] = new Student (
            studentList[i].code, 
            studentList[i].fullname, 
            studentList[i].address, 
            studentList[i].email, 
            +studentList[i].math,
            +studentList[i].physical, 
            +studentList[i].chemistry, 
            studentList[i].type);
    }
    return studentList;
};