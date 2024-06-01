let zaman = new Date();

// Yeni bir Date nesnesi oluşturma
let birthday = new Date(2001, 9, 24); // Yıl, ay ve gün bilgisini belirterek tarih oluşturabiliriz

// Get Method
console.log(zaman); // Şu anki tarih ve saat bilgisini döndürür
console.log(zaman.getMonth()); // Ay bilgisini getirir (0'dan başlar)
console.log(zaman.getFullYear()); // Yıl bilgisini getirir
console.log(zaman.getDate()); // Ayın kaçıncı günü olduğunu getirir
console.log(zaman.getSeconds()); // Saniye bilgisini getirir
// Zamanın farkını almak için ayı ve yılı birbirinden çıkartıyoruz
console.log(zaman.getMonth() - birthday.getMonth()); // Ay farkını bulur
console.log(zaman.getFullYear() - birthday.getFullYear()); // Yıl farkını bulur

// Yeni bir Date nesnesi oluşturma ve Set Method kullanarak tarih belirleme
let customDate = new Date();
customDate.setDate(15); // Günü ayarlama
customDate.setMonth(5); // Ayı ayarlama (0'dan başlar, 5 Haziran'ı ifade eder)
customDate.setFullYear(2022); // Yılı ayarlama

console.log(customDate); // Yeni tarihi yazdırma

