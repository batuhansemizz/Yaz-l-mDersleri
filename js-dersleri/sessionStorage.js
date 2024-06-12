// Tarayıcıların depolama alanı 


// Session StorAge


const add = document.querySelector("#add");
const dlt = document.querySelector("#delete");
const clr = document.querySelector("#clear");

const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

add.addEventListener("click", addItem);
dlt.addEventListener("click", dltItem);
clr.addEventListener("click", clrItem);

function addItem(e) {
    sessionStorage.setItem(addkey.value, addvalue.value);
}
// silinmesi için anahtarı silmek yeterlidir 
function dltItem(e) {
    sessionStorage.removeItem(deletekey.value);
}

function clrItem(e) {
    sessionStorage.clear();
}