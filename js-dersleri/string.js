const Firstname = "batuhan";
const lastName = "semiz";
const age = "23";
let hobbies = "f1 spor";  
let veri;

// String birleştirme
veri = Firstname + " " + lastName;
// Çıktı: "batuhan semiz"

// String birleştirme
veri = "batuhan ";
veri += lastName;
// Çıktı: "batuhan semiz"

// String içinde değişken kullanarak birleştirme
veri = 'Benim adım ' + Firstname + ' ' + lastName + ', yaşım ' + age + ' ve Rize\'de yaşıyorum.';
// Çıktı: "Benim adım batuhan semiz, yaşım 23 ve Rize'de yaşıyorum."

// concat metodu ile string birleştirme
veri = Firstname.concat(' ', lastName);
// Çıktı: "batuhan semiz"

// replace metodu ile string içindeki bir değeri değiştirme
veri = veri.replace('batuhan', 'begüm');
// Çıktı: "begüm semiz"

// length özelliği ile stringin uzunluğunu bulma
veri = veri.length;
// Çıktı: 10

// split metodu ile stringi parçalara ayırma
veri = hobbies.split('');
// Çıktı: ['f', '1', ' ', 's', 'p', 'o', 'r']

console.log(veri);
