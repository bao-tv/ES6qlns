import {getEle} from "./helpers.js";
import {listPersons} from "./main.js";

let arrCharCode = /^[A-Za-z0-9]+$/;
let arrNum = /^[0-9]/;
// check empty : empty -> 0
function checkEmpty(id) {
    let isValid = false;
    (getEle(id).value)? isValid = false : isValid = true ;
    return isValid;
};

// check Exist
function checkExist (id) {
    let isValid = false;
    let value = getEle(id).value;
    let isElement = listPersons.some((obj) => obj.code === value);
    (!isElement)? isValid = false : isValid = true;
    return isValid;
};

// check student ================================
export function valStu(evt) {
    let isValid = true;
    
    if(checkEmpty('#CodeStudent')) {
        isValid = false;
        getEle('#tbCodeStudent').style.display = 'block';
        getEle('#tbCodeStudent').innerHTML = 'not Empty!';
    } else if (checkExist('#CodeStudent') && evt !== 'Update') {
        isValid = false;
        getEle('#tbCodeStudent').style.display = 'block';
        getEle('#tbCodeStudent').innerHTML = 'already exists!';
    } else if (!(getEle('#CodeStudent').value).match(arrCharCode)||(getEle('#CodeStudent').value).length <4 ||(getEle('#CodeStudent').value).length >6) {
        isValid = false;
        getEle('#tbCodeStudent').style.display = 'block';
        getEle('#tbCodeStudent').innerHTML = 'from 4-6 characters and no special characters!';
    } else getEle('#tbCodeStudent').style.display = 'none';
    
    // check code

    // fullname
    if(checkEmpty('#FullNameStudent')) {
        isValid = false;
        getEle('#tbFullNameStudent').style.display = 'block';
        getEle('#tbFullNameStudent').innerHTML = 'not Empty!';
    } else getEle('#tbFullNameStudent').style.display = 'none';

    // address
    if(checkEmpty('#AddressStudent')) {
        isValid = false;
        getEle('#tbAddressStudent').style.display = 'block';
        getEle('#tbAddressStudent').innerHTML = 'not Empty!';
    } else getEle('#tbAddressStudent').style.display = 'none';

    // math
    if(checkEmpty('#Math')) {
        isValid = false;
        getEle('#tbMath').style.display = 'block';
        getEle('#tbMath').innerHTML = 'not Empty!';
    } else if (!(getEle('#Math').value).match(arrNum)||(getEle('#Math').value)<0 ||(getEle('#Math').value) >10) {
        isValid = false;
        getEle('#tbMath').style.display = 'block';
        getEle('#tbMath').innerHTML = 'score is Number from 0-10';
    } else getEle('#tbMath').style.display = 'none';
    // physical
    if(checkEmpty('#Physical')) {
        isValid = false;
        getEle('#tbPhysical').style.display = 'block';
        getEle('#tbPhysical').innerHTML = 'not Empty!';
    } else if (!(getEle('#Physical').value).match(arrNum)||(getEle('#Physical').value)<0 ||(getEle('#Physical').value) >10) {
        isValid = false;
        getEle('#tbPhysical').style.display = 'block';
        getEle('#tbPhysical').innerHTML = 'score is Number from 0-10';
    } else getEle('#tbPhysical').style.display = 'none';
    // chemistry
    if(checkEmpty('#Chemistry')) {
        isValid = false;
        getEle('#tbChemistry').style.display = 'block';
        getEle('#tbChemistry').innerHTML = 'not Empty!';
    } else if (!(getEle('#Chemistry').value).match(arrNum)||(getEle('#Chemistry').value)<0 ||(getEle('#Chemistry').value) >10) {
        isValid = false;
        getEle('#tbChemistry').style.display = 'block';
        getEle('#tbChemistry').innerHTML = 'score is Number from 0-10';
    } else getEle('#tbChemistry').style.display = 'none';

    return isValid;
}

// check Employee ================================

export function valEmp(evt) {
    let isValid = true;

    // check code
    if(checkEmpty('#CodeEmployee')) {
        isValid = false;
        getEle('#tbCodeEmployee').style.display = 'block';
        getEle('#tbCodeEmployee').innerHTML = 'not Empty!';
    } else if (checkExist('#CodeEmployee') && evt !== 'Update') {
        isValid = false;
        getEle('#tbCodeEmployee').style.display = 'block';
        getEle('#tbCodeEmployee').innerHTML = 'already exists!';
    } else if (!(getEle('#CodeEmployee').value).match(arrCharCode)||(getEle('#CodeEmployee').value).length <4 ||(getEle('#CodeEmployee').value).length >6) {
        isValid = false;
        getEle('#tbCodeEmployee').style.display = 'block';
        getEle('#tbCodeEmployee').innerHTML = 'from 4-6 characters and no special characters!';
    } else getEle('#tbCodeEmployee').style.display = 'none';

    // fullname
    if(checkEmpty('#FullNameEmployee')) {
        isValid = false;
        getEle('#tbFullNameEmployee').style.display = 'block';
        getEle('#tbFullNameEmployee').innerHTML = 'not Empty!';
    } else getEle('#tbFullNameEmployee').style.display = 'none';

    // address
    if(checkEmpty('#AddressEmployee')) {
        isValid = false;
        getEle('#tbAddressEmployee').style.display = 'block';
        getEle('#tbAddressEmployee').innerHTML = 'not Empty!';
    } else getEle('#tbAddressEmployee').style.display = 'none';

    // Workingday
    if(checkEmpty('#Workingday')) {
        isValid = false;
        getEle('#tbWorkingday').style.display = 'block';
        getEle('#tbWorkingday').innerHTML = 'not Empty!';
    } else if (!(getEle('#Workingday').value).match(arrNum)||(getEle('#Workingday').value)<0) {
        isValid = false;
        getEle('#tbWorkingday').style.display = 'block';
        getEle('#tbWorkingday').innerHTML = 'is Number';
    } else getEle('#tbWorkingday').style.display = 'none';

    // Workingday
    if(checkEmpty('#Dailywage')) {
        isValid = false;
        getEle('#tbDailywage').style.display = 'block';
        getEle('#tbDailywage').innerHTML = 'not Empty!';
    } else if (!(getEle('#Dailywage').value).match(arrNum)||(getEle('#Dailywage').value)<0) {
        isValid = false;
        getEle('#tbDailywage').style.display = 'block';
        getEle('#tbDailywage').innerHTML = 'is Number';
    } else getEle('#tbDailywage').style.display = 'none';

    return isValid;
}

// check Customer ================================

export function valCus(evt) {
    let isValid = true;
    // check code
    if(checkEmpty('#CodeCustomer')) {
        isValid = false;
        getEle('#tbCodeCustomer').style.display = 'block';
        getEle('#tbCodeCustomer').innerHTML = 'not Empty!';
    } else if (checkExist('#CodeCustomer') && evt !== 'Update') {
        isValid = false;
        getEle('#tbCodeCustomer').style.display = 'block';
        getEle('#tbCodeCustomer').innerHTML = 'already exists!';
        console.log();
    } else if (!(getEle('#CodeCustomer').value).match(arrCharCode)||(getEle('#CodeCustomer').value).length <4 ||(getEle('#CodeCustomer').value).length >6) {
        isValid = false;
        getEle('#tbCodeCustomer').style.display = 'block';
        getEle('#tbCodeCustomer').innerHTML = 'from 4-6 characters and no special characters!';
    } else getEle('#tbCodeCustomer').style.display = 'none';

    // fullname
    if(checkEmpty('#FullNameCustomer')) {
        isValid = false;
        getEle('#tbFullNameCustomer').style.display = 'block';
        getEle('#tbFullNameCustomer').innerHTML = 'not Empty!';
    } else getEle('#tbFullNameCustomer').style.display = 'none';

    // address
    if(checkEmpty('#AddressCustomer')) {
        isValid = false;
        getEle('#tbAddressCustomer').style.display = 'block';
        getEle('#tbAddressCustomer').innerHTML = 'not Empty!';
    } else getEle('#tbAddressCustomer').style.display = 'none';

    // Companyname
    if(checkEmpty('#Companyname')) {
        isValid = false;
        getEle('#tbCompanyname').style.display = 'block';
        getEle('#tbCompanyname').innerHTML = 'not Empty!';
    } else getEle('#tbCompanyname').style.display = 'none';

    return isValid;
}
