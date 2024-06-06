
// KOŞULLU İFADELER İF-ELSE


const firstName = "batuhan";
const userName = "ba2pacc"
const lastName = "semiz";
const age = 23
const isStudent = true;
const School = "akdeniz üni";


if (userName == "ba2pacc") {
    console.log("hoş geldin batuhan")
} else {
    console.log("üzgünüm kayıt bulunamadı")
}

if (age === 23) {
    console.log("yaşı", age)
} else {
    console.log("böyle bir yaş bulunamadı")
}


if (isStudent === true) {
    console.log("siz öğrencisiniz");
} else {
    console.log("siz öğrenci değilsiniz");
}

if (age => 18) {
    console.log("ehliyet alabilir siniz")
} else {
    console.log("reşit değilsiniz ehliyet alamzsınız")
}


// SWİTCH KOŞUL YAPISI  

let islem = 1;


switch (islem) {
    case 1:
        console.log("bir nolu işlem tamamlandı")
        break;
    case 2:
        console.log("2 nolu işlem tamamlandı")
        break;
    case 3:
        console.log("3 nolu işlem tamamlandı")
        break;

    default:
        console.log("işlem yapılamadı")
}



let day;
switch (new Date().getDay()) {
    case 0:
        day = "pazar";
        break;
    case 1:
        day = "pazartesi";
        break;
    case 2:
        day = "salı";
        break;
    case 3:
        day = "çarşamba";
        break;
    case 4:
        day = "perşembe";
        break;
    case 5:
        day = "cuma";
        break;
    case 6:
        day = "cumartesi";
        break;
    default:
        break;
}
console.log(day);


let hour = 16

switch (true) {
    case (hour >= 6 && hour <= 12):
        console.log("günaydın")
        break;
    case (hour >= 13 && hour <= 18):
        console.log("iyi günler")
        break;
    case (hour >= 19 && hour <= 24):
        console.log("iyi akşamlar")
        break;

    default:
        console.log("lütfen geçerli bir saat girin")
        break;
}

