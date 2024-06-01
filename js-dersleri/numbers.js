let veri;

// Bir dizeyi sayıya dönüştürme
veri = Number("5"); 
// Çıktı: 5

// Bir dizeyi tam sayıya dönüştürme
veri = parseInt("5"); 
// Çıktı: 5

// Bir dizeyi ondalıklı sayıya dönüştürme
veri = parseFloat("3.2");
// Çıktı: 3.2

// Bir dizeyi tam sayıya dönüştürme, ancak dönüşüm başarısız olduğunda NaN (Geçersiz Sayı) döner
veri = parseInt("c5"); 
// Çıktı: NaN

// isNaN fonksiyonu, bir değerin NaN (Geçersiz Sayı) olup olmadığını kontrol eder
veri = isNaN("c5");
// Çıktı: true

// isNaN fonksiyonu, bir değerin NaN (Geçersiz Sayı) olup olmadığını kontrol eder
veri = isNaN("3");
// Çıktı: false

var sayi = 34.555666697;

// toPrecision metodu, bir sayıyı belirtilen basamak sayısına yuvarlar
veri = sayi.toPrecision(3);
// Çıktı: 34.6

// toFixed metodu, bir sayının ondalık kısmını belirli bir basamak sayısına yuvarlar
veri = sayi.toFixed(2);
// Çıktı: 34.56

// Math.PI, pi sayısını döndürür
veri = Math.PI;
// Çıktı: 3.141592653589793

// Math.round metodu, bir sayıyı en yakın tam sayıya yuvarlar
veri = Math.round(3.5);
// Çıktı: 4

// Math.ceil metodu, bir sayıyı her zaman yukarıya yuvarlar
veri = Math.ceil(4.9);
// Çıktı: 5

// Math.floor metodu, bir sayıyı her zaman aşağıya yuvarlar
veri = Math.floor(4.8);
// Çıktı: 4

// Math.pow metodu, bir sayının üssünü alır
veri = Math.pow(3,3);
// Çıktı: 27

// Math.sqrt metodu, bir sayının karekökünü alır
veri = Math.sqrt(81);
// Çıktı: 9

// Math.abs metodu, bir sayının mutlak değerini döndürür
veri = Math.abs(-50);
// Çıktı: 50

// Math.min metodu, verilen sayıların en küçüğünü döndürür
veri = Math.min(13,24,5,8,9,);
// Çıktı: 5

// Math.max metodu, verilen sayıların en büyüğünü döndürür
veri = Math.max(45,56,89,56,23,);
// Çıktı: 89

// Math.random metodu, 0 ile 1 arasında rastgele bir sayı döndürür
veri = Math.random();
// Rastgele bir sayı çıktı olarak gösterilir

console.log(veri);
console.log(typeof veri); // veri değişkeninin türünü yazdırır
