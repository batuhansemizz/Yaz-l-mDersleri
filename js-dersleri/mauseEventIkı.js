// Mouse Events (Fare Olayları)

const btn = document.querySelector("#btnAddNewTask"); // "btnAddNewTask" ID'sine sahip öğeyi seçiyoruz.
const ul = document.querySelector("#task-list"); // "task-list" ID'sine sahip öğeyi seçiyoruz.

// click event (Tıklama Olayı): Bir öğeye tıklandığında tetiklenir.
btn.addEventListener("click", run); // "btnAddNewTask" öğesine tıklandığında çalışır.
ul.addEventListener("click", run); // "task-list" öğesine tıklandığında çalışır.

// double click (Çift Tıklama Olayı): Bir öğeye çift tıklandığında tetiklenir.
btn.addEventListener("dblclick", run); // "btnAddNewTask" öğesine çift tıklandığında çalışır.

// Mouse Down (Fare Tuşuna Basma Olayı): Fare butonuna basıldığında tetiklenir.
btn.addEventListener("mousedown", run); // "btnAddNewTask" öğesine fare butonu basıldığında çalışır.

// Mouse Up (Fare Tuşunu Bırakma Olayı): Fare butonu bırakıldığında tetiklenir.
btn.addEventListener("mouseup", run); // "btnAddNewTask" öğesinden fare butonu bırakıldığında çalışır.

// Mouse Enter (Fare Giriş Olayı): Fare bir öğenin içine girdiğinde tetiklenir.
btn.addEventListener("mouseenter", run); // "btnAddNewTask" öğesine fare girildiğinde çalışır.

// Mouse Leave (Fare Çıkış Olayı): Fare bir öğenin dışına çıktığında tetiklenir.
btn.addEventListener("mouseleave", run); // "btnAddNewTask" öğesinden fare çıkıldığında çalışır.

// Mouse Over (Fare Üzerine Gelme Olayı): Fare bir öğenin üzerine geldiğinde tetiklenir.
ul.addEventListener("mouseover", run); // "task-list" öğesine fare geldiğinde çalışır.

// Mouse Out (Fare Üzerinden Çıkma Olayı): Fare bir öğenin üzerinden çıktığında tetiklenir.
ul.addEventListener("mouseout", run); // "task-list" öğesinden fare çıkıldığında çalışır.

function run(event) {
    console.log(`event type: ${event.type}`); // Tetiklenen olayın türünü konsola yazdırır.
}
