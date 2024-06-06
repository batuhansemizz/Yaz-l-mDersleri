// Js de fonksyolar --


// JavaScript'te fonksiyonlar, belirli bir işlevi gerçekleştirmek için kullanılan kod bloklarıdır. 
// Fonksiyonlar, bir veya daha fazla işlevi gruplamak, tekrar kullanılabilirliği artırmak ve kodu düzenlemek için kullanılır.

// fonksyon isim parametre 
function merhaba() {
    console.log("merhaba")
}

merhaba(); // yazdığımız fonksyonu çağırıyoruz 

// parametreli fonks.

function selam(name, age) {
    console.log(`isim: ${name} Yaş : ${age}`);
}

selam("batuhan", "23") // parametreleri kullandık


function yasHesapla(doğumYılı) {

    return 2024 - doğumYılı;
}
// let ageBatu = yasHesapla(1990)
// let ageBegüm = yasHesapla(1990)
// console.log(ageBatu);
// console.log(ageBegüm);

function Ehliyet(dogumYılı,isim) {
    let yas = yasHesapla(dogumYılı);
    let ehliyet = 18-yas

    if (ehliyet>0) {
        console.log(`${isim} ehiliyet alabilmeniz için ${ehliyet} yıl gerekiyor`)
    }else {
        console.log("ehliyet alabilirsiniz")
    }
}

Ehliyet(2009,"batuhan");
Ehliyet(2001,"batuhan");