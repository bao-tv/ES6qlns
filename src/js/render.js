
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
                <td>${student.calcMedium()}</td>
                <td>
                    <button class="btn btn-primary">Sửa
                    </button>
                    <button class="btn btn-danger" id='deteleStudent' value="${student.code}">Xoá
                    </button>
                </td>
            </tr>
            `
        );
    },"");

    getEle("#tblStudentList").innerHTML = html;
};