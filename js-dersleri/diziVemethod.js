// İsim, yaş ve karmaşık bir dizi oluşturuyoruz
let names = ["batu","begüm","selim","sare","kuş"];
let ages = [1980,2001,2003,2019,1949];
let mix = ["arda","güler",2005,null,undefined,"futbol",["proglamlama","basketboll"]];

// Dizileri ve tip bilgilerini konsola yazdırıyoruz
console.log(names); // ["batu","begüm","selim","sare","kuş"]
console.log(ages); // [1980,2001,2003,2019,1949]
console.log(mix); // ["arda","güler",2005,null,undefined,"futbol",["proglamlama","basketboll"]]
console.log(typeof mix); // "object"
console.log(typeof names); // "object"
console.log(names.length); // 5
console.log(ages.length); // 5

// Dizi elemanlarını alıyoruz ve değiştiriyoruz
console.log(names[2]); // "selim"
names[0] = "kerem"; // İlk elemanı "kerem" ile değiştirir
console.log(names); // ["kerem","begüm","selim","sare","kuş"]
names[5] = "güler"; // Yeni bir eleman ekler
console.log(names); // ["kerem","begüm","selim","sare","kuş","güler"]
names[names.length] = "ahmet"; // Yeni bir eleman ekler
console.log(names); // ["kerem","begüm","selim","sare","kuş","güler","ahmet"]

// Yeni öğeler ekliyoruz
names.push("eda"); // Sonuna "eda"yı ekler
names.unshift("eda"); // Başına "eda"yı ekler
console.log(names); // ["eda","kerem","begüm","selim","sare","kuş","güler","ahmet","eda"]

// Öğeleri kaldırıyoruz
ages.pop(); // Son öğeyi kaldırır
console.log(ages); // [1980,2001,2003,2019]
ages.shift(); // İlk öğeyi kaldırır
console.log(ages); // [2001,2003,2019]

// Index'leri buluyoruz
let index = names.indexOf("begüm"); // "begüm"ün index'ini bulur (1)
console.log(index); // 1

// Diziyi ters çeviriyoruz
names.reverse(); // Diziyi tersine çevirir
console.log(names); // ["eda","ahmet","güler","kuş","sare","selim","begüm","kerem"]

// Sayıları küçükten büyüğe sıralıyoruz
ages.sort(); // Sayıları küçükten büyüğe sıralar
console.log(ages); // [2001,2003,2019]

// İsimleri alfabetik sıralıyoruz
names.sort(); // İsimleri alfabetik sıraya göre sıralar
console.log(names); // ["ahmet","begüm","eda","güler","kerem","kuş","sare","selim"]

// İki diziyi birleştiriyoruz
let veri = names.concat(ages); // İki diziyi birleştirir
console.log(veri); // ["ahmet","begüm","eda","güler","kerem","kuş","sare","selim",2001,2003,2019]

// Diziden öğe ekliyoruz
names.splice(2,0,"mehmet"); // İndeks 2'ye "mehmet"i ekler
console.log(names); // ["ahmet","begüm","mehmet","eda","güler","kerem","kuş","sare","selim"]

// Diziden öğe kaldırıyoruz ve ekliyoruz
names.splice(2,1,"selin"); // İndeks 2'deki elemanı kaldırır ve "selin"i ekler
console.log(names); // ["ahmet","begüm","selin","eda","güler","kerem","kuş","sare","selim"]
