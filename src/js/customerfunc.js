import {getEle,store, findI} from "./helpers.js";
import {Person, Customer} from "./constructor.js";
import {customerList,listPersons} from './main.js';
import {valCus} from "./validate.js";

export function addCustomer() {
    // DOM
    console.log('đã add cus');
    let code = getEle('#CodeCustomer').value;
    let fullname = getEle('#FullNameCustomer').value;
    let address = getEle('#AddressCustomer').value;
    let email = getEle('#EmailCustomer').value;
    let companyName = getEle('#Companyname').value;
    let totalInvoice = getEle('#Totalinvoice').value;
    let rank = getEle('#Rank').value;
    let type = 'Customer';
    // check validate
    if(!valCus()) return;
    console.log('đã chcek vali');
    const customerAdd =  new Customer (code,fullname,address,email,companyName,totalInvoice,rank, type);
    const personAdd = new Person (code,fullname,address,email, type)
    listPersons.push(personAdd);
    customerList.push(customerAdd);
    store('listPersons',listPersons);
    store('customerList',customerList);
    alert(`Successful created new Customer :${fullname}`);
    resetFormCustomer();
};

// delete 
export function deleteCustomer(code) {
    let eS = findI(code,customerList);
    customerList.splice(eS,1);
    listPersons.splice(findI(code,listPersons),1);
    store('listPersons',listPersons);
    store('customerList',customerList);
    alert(`Successful delete Customer :${customerList[eS].fullname}`);
};

 // select
export function selectCustomer(code) {
    const id = findI(code,customerList);
    getEle('#CodeCustomer').value = customerList[id].code;
    getEle('#FullNameCustomer').value = customerList[id].fullname;
    getEle('#AddressCustomer').value = customerList[id].address;
    getEle('#EmailCustomer').value = customerList[id].email;
    getEle('#Companyname').value = customerList[id].companyname;
    getEle('#Totalinvoice').value = customerList[id].totalinvoice;
    getEle('#Rank').value = customerList[id].rank;
    
    let html = `
        <button class="btn btn-secondary" data-dismiss="modal" id="cancle" >Cancle</button>
        <button class="btn btn-success ml-2" id="updateCustomer" >Update</button>
    `;
    getEle('.modal-footer-Customer').innerHTML = html;
};

// update 
export function updateCustomer() {
    let code = getEle('#CodeCustomer').value;
    let fullname = getEle('#FullNameCustomer').value;
    let address = getEle('#AddressCustomer').value;
    let email = getEle('#EmailCustomer').value;
    let companyName = getEle('#Companyname').value;
    let totalInvoice = getEle('#Totalinvoice').value;
    let rank = getEle('#Rank').value;
    let type = 'Customer';
    // check validate
    getEle('#CodeStudent').disabled = true;
    if(!valCus('Update')) return;
    const CustomerUpdate =  new Customer (code,fullname,address,email,companyName,totalInvoice,rank,type);
    const personUpdate = new Person (code,fullname,address,email,type);
    customerList[findI(code,customerList)] = CustomerUpdate;
    listPersons[findI(code,listPersons)] = personUpdate;
    store('customerList',customerList);
    store('listPersons',listPersons);
    alert(`Successful update Customer :${fullname}`);
    resetFormCustomer();
};

export function resetFormCustomer() {
    getEle('#CodeCustomer').value = '';
    getEle('#FullNameCustomer').value = '';
    getEle('#AddressCustomer').value = '';
    getEle('#EmailCustomer').value = '';
    getEle('#Companyname').value = '';
    getEle('#Totalinvoice').value = '';
    getEle('#Rank').value = '';
};