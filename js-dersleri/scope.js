// SCOPE KAVRAMI    

// GLOBAL SCOPE , FUNCTİON SCOPE , BLOCK SCOPE 


// Evet, "kapsam" veya İngilizce terimiyle "scope", bir programın içinde belirli bir değişkenin erişilebilir olduğu alanı ifade eder. JavaScript gibi dillerde, değişkenlerin erişilebilir olduğu alan belirlidir ve bu kapsamın dışında erişilemezler.

// JavaScript'te kapsam, fonksiyonlar tarafından oluşturulur. Bir değişkenin tanımlandığı yer, o değişkenin kapsamını belirler. Kapsam, genellikle {} süslü parantezlerle belirtilen bir kod bloğu içinde tanımlanan değişkenlerin erişilebilirliğini ifade eder.






// Global Kapsam (Global Scope): Global kapsam, kodun en dışında, herhangi bir fonksiyon içinde tanımlanmayan ve doğrudan window (tarayıcı ortamında) veya global (Node.js ortamında) nesnesi içinde tanımlanan değişkenleri içerir. Bu tür değişkenlere her yerden erişilebilir.


// var globalDegisken = 10; // Global kapsamda tanımlanan bir değişken
// function fonksiyon() {
//     console.log(globalDegisken); // Bu fonksiyon içinde globalDegisken'e erişilebilir
// }

// Yerel Kapsam (Local Scope): Yerel kapsam, bir fonksiyon içinde tanımlanan değişkenleri içerir. Yerel kapsamdaki değişkenlere sadece o fonksiyon içinde erişilebilir.


// function fonksiyon() {
//     var lokalDegisken = 20; // Yerel kapsamda tanımlanan bir değişken
//     console.log(lokalDegisken); // Bu fonksiyon içinde lokalDegisken'e erişilebilir
// }
// Kapsam, iç içe fonksiyonlar durumunda da geçerlidir. Bir iç fonksiyon, dış fonksiyonun kapsamına erişebilir, ancak dış fonksiyon, iç fonksiyonun kapsamına erişemez.



// function dısFonksiyon() {
//     var dısDegisken = 30; // Dış fonksiyonun yerel değişkeni

//     function içFonksiyon() {
//         console.log(dısDegisken); // İç fonksiyon, dış fonksiyonun yerel değişkenine erişebilir
//     }

//     içFonksiyon(); // 30 çıktısını verecek
// }

// dısFonksiyon();
// Kapsam, değişkenlerin etki alanını belirler ve değişkenlerin çakışmasını önler. Bu nedenle, kapsamın doğru bir şekilde anlaşılması ve yönetilmesi, programların düzgün çalışmasında önemli bir rol oynar.



// GLOBAL SCOPE 

var globalDegisken = 20;

function global() {
    console.log(globalDegisken)
}

global();


var veri1 = 5
let veri2 = 6
const veri4 = 7


// fonksyon scopenin global scoptan daha öncelikli olur 

function fonksiyon() {
    var veri1 = 20
    let veri2 = 30
    const veri4 = 40
    console.log(veri1, veri2, veri4)
}

fonksiyon();


// console.log(veri1,veri2,veri4) // ama buranın çıktısı 5,6,7 olur 


// block scope 

if (true) {
    var veri1 = 10
    let veri2 = 15
    const veri4 = 20

    console.log(veri1)
    console.log(veri2)
    console.log(veri4)

    // global olarak tanımlanırsa eğer block içinde hangi değerler yazılıysa o değerler alır 
}

console.log(veri1)
console.log(veri2)
console.log(veri4)

console.log(a)
console.log(b)
console.log(c)

// şimdi burada değişkenlerimiz farklı tanımlandğı içi  sadece a değerini yazar çünkü bloack scope içine yadığımız var değişkeni console yazılır

