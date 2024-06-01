// ARİTMETİK OPERATÖRLER
let veri;
const a = 20;
const b = 30;
var c = 45;

// Toplama
veri = a + b;
console.log("Toplam:", veri);

// Çıkarma
veri = a - b;
console.log("Fark:", veri);

// Çarpma
veri = a * b;
console.log("Çarpım:", veri);

// Bölme
veri = a / b;
console.log("Bölüm:", veri);

// Arttırma
veri = c++;
console.log("c++:", veri, c);

// Arttırma
veri = ++c;
console.log("++c:", veri, c);

// ATAMA OPERATÖRLERİ
veri = a;
console.log("a:", veri);

// Toplama Atama
veri += a;
console.log("a += a:", veri);

// Çıkarma Atama
veri -= a;
console.log("a -= a:", veri);

// Çarpma Atama
veri *= a;
console.log("a *= a:", veri);

// Bölme Atama
veri /= a;
console.log("a /= a:", veri);

// Modül Atama
veri %= a;
console.log("a %= a:", veri);

// KARŞILAŞTIRMA OPERATÖRLERİ
var f = 45;
var d = 45;

// Eşitlik
veri = f == d;
console.log("c == d:", veri);

// MANTIKSAL OPERATÖRLER
veri = 5 === "5"; // Üç eşittir kullanıldığında hem değerlere hem de veri tiplerine bakar
console.log(veri);

veri = a != b; // Eşit değilse true döner
console.log(veri);

veri = f <= b; // Küçük eşitse true döner
console.log(veri);

// MANTIKSAL OPERATÖRLER
// && (ve)
veri = (a > b) && (a > f); // İki koşul da doğruysa true döner
console.log(veri);

// || (veya)
veri = (a > b) || (f > d); // Herhangi biri doğruysa true döner
console.log(veri);

// ! (değil)
veri = !(a > b); // Koşul doğru değilse true döner
console.log(veri);
