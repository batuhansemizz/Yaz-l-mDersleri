// Event Listener ve Event Object

// #btnDeleteAll id'li buton öğesini seçer ve 'btn' değişkenine atar.
const btn = document.querySelector("#btnDeleteAll");

// #btnAddNewTask id'li buton öğesini seçer ve 'plus' değişkenine atar.
const plus = document.querySelector("#btnAddNewTask");

// 1. yol 

// 'btn' butonuna bir 'click' olayı için bir event listener ekler.
// Butona tıklandığında anonim fonksiyon çalışır ve "butona tıklandı" mesajını konsola yazdırır.
btn.addEventListener("click", function() {
    console.log("butona tıklandı");
});

// 2. yol

// 'plus' butonuna 'click' olayı için 'btnClick' fonksiyonunu event listener olarak ekler.
plus.addEventListener("click", btnClick);

// 'btn' butonuna 'click' olayı için 'btnClick' fonksiyonunu event listener olarak ekler.
btn.addEventListener("click", btnClick);

// 'btnClick' fonksiyonu bir alert kutusu ile "işlem gerçekleştirildi" mesajını gösterir.
function btnClick() {
    alert("işlem gerçekleştirildi");
}

// 'btn' butonuna 'click' olayı için bir event listener ekler.
// Butona tıklandığında anonim fonksiyon çalışır.
btn.addEventListener("click", function(a) {
    let value;

    // 'a' (event) nesnesini 'value' değişkenine atar.
    value = a;

    // Olayın gerçekleştiği hedef öğeyi (butonu) 'value' değişkenine atar.
    value = a.target;

    // Olayın gerçekleştiği hedef öğenin (butonun) id'sini 'value' değişkenine atar.
    value = a.target.id;

    // Olayın gerçekleştiği hedef öğenin (butonun) sınıf listesini 'value' değişkenine atar.
    value = a.target.classList;

    // Olayın varsayılan davranışını (örneğin, form gönderme) engeller.
    a.preventDefault();

    // 'value' değişkenini konsola yazdırır.
    console.log(value);
});
