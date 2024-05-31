// OPERATÖRLER  

// ARİTMETİK OP.
// ATAMA OP.
// KARŞILAŞTIRMA OP.
// MANTIKSAL OP.






// ARİTMETİK OP
let veri;
const a = 20;
const b = 30;
var c = 45;


veri = a + b;
console.log("Toplam:", veri);

veri = a - b;
console.log("Fark:", veri);

veri = a * b;
console.log("Çarpım:", veri);

veri = a / b;
console.log("Bölüm:", veri);

veri = c++;
console.log("c++:", veri, c);

veri = ++c;
console.log("++c:", veri, c);

// ATAMA OP
veri = a;
console.log("a:", veri);

veri += a;
console.log("a += a:", veri);

veri -= a;
console.log("a -= a:", veri);

veri *= a;
console.log("a *= a:", veri);

veri /= a;
console.log("a /= a:", veri);

veri %= a;
console.log("a %= a:", veri);

// KARŞILAŞTIRMA OP
var f = 45;
var d = 45;

veri = f == d;
console.log("c == d:", veri);

// MANTIKSAL OP.

veri = 5 === "5" // üç eşittir kullanırsak hem değerlere hem de veri tiplerine bakar
console.log(veri)

veri = a!=b
console.log(veri)

veri = f<=b
console.log(veri)

// MANTIKSAL OP.

// && (and)


veri = (a>b) && (a>f)  // iki ihtimal de doğru olursa true döner
console.log(veri)

// || (or)

veri = (a>b) || (f>d) // ikisinden birisi true olması lazım
console.log(veri)

veri = !(a>b)
console.log(veri)




