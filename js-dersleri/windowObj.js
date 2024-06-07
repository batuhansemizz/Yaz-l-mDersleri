// 

console.log(window); // Tarayıcı penceresinin içeriğini konsola yazdırır

veri = window;
console.log(veri); // Tarayıcı penceresini temsil eden değişkeni konsola yazdırır

alert("mesaj"); // Kullanıcıya bir uyarı penceresi gösterir

var veri2 = prompt("adınızı girin"); // Kullanıcıdan bir giriş bekleyen bir ileti kutusu görüntüler
// Örneğin, kullanıcı "Ahmet" girdiğinde, veri2 değişkeni "Ahmet" değerini alır.

let _veri3 = confirm("çıkmak istediğinizden emin misiniz"); // Kullanıcıya bir onay kutusu gösterir
// Örneğin, kullanıcı "Evet" derse _veri3 değişkeni true değerini alır.

if (_veri3 == true) {
    console.log("çıkış gerçekleşti"); // Kullanıcı "Evet" derse bu mesajı konsola yazdırır.
} else {
    console.log("çıkış gerçekleşmedi"); // Kullanıcı "Hayır" derse bu mesajı konsola yazdırır.
}
console.log(_veri3); // Kullanıcının seçimini konsola yazdırır.

let veri4 = window.location;
let veri5 = window.location.href; // Tam URL'yi alır
let veri6 = window.location.protocol; // URL'nin protokol kısmını alır
let veri7 = window.location.host; // URL'nin ana bilgisayarını alır

console.log(veri4); // Tarayıcı penceresi ile ilgili bilgileri konsola yazdırır.
console.log(veri5); // Tam URL'yi konsola yazdırır.
console.log(veri6); // URL'nin protokol kısmını konsola yazdırır. (http ya da https)
console.log(veri7); // URL'nin ana bilgisayarını konsola yazdırır. (örneğin: www.example.com)




// JavaScript'te window objesi, tarayıcı penceresini temsil eden global bir objedir. window objesi, tarayıcı penceresi ve tarayıcı ile etkileşim kurabilmemizi sağlayan birçok özelliği ve yöntemi içerir. İşlevleri şunlardır:

// Tarayıcı İçeriği: window objesi, tarayıcı penceresinin içeriğini temsil eder. Bu içerik, tarayıcıda açık olan tüm sekme ve pencereleri kapsar.

// Global Değişkenler: Tarayıcıda tanımlanan global değişkenler window objesi içinde yer alır. Yani, tarayıcıda tanımlanan herhangi bir değişkeni window objesi üzerinden erişebiliriz.

// Tarayıcı Penceresi Yönetimi: window objesi, tarayıcı penceresi ile ilgili birçok işlevi sağlar. Örneğin, pencerenin boyutunu değiştirme, pencereyi yeniden yükleme, pencereyi kapatma gibi işlemler window objesi üzerinden gerçekleştirilir.

// Navigasyon Kontrolü: window objesi, tarayıcıda gezinmeyle ilgili işlevleri sağlar. Örneğin, tarayıcıyı belirli bir URL'ye yönlendirme, sayfayı yenileme, sayfa geçmişiyle etkileşim kurma gibi işlemler window objesi üzerinden yapılır.

// Zamanlayıcılar: window objesi, zamanlanmış işlemleri gerçekleştirmemize olanak tanır. setTimeout() ve setInterval() gibi fonksiyonlar, window objesi üzerinden erişilir ve kullanılır.

// UI İşlevleri: window objesi, kullanıcı arayüzü ile ilgili işlevleri sağlar. Örneğin, kullanıcıya uyarılar gösterme (alert()), giriş almak için ileti kutuları gösterme (prompt()), onay kutuları gösterme (confirm()), tarayıcıda açılan yeni pencereler oluşturma gibi işlemler window objesi üzerinden gerçekleştirilir.

// Bu özellikler, window objesini JavaScript'te oldukça önemli bir obje haline getirir. Tarayıcı ile etkileşim kurmak, kullanıcı arayüzü oluşturmak ve tarayıcı içeriğini yönetmek için window objesini kullanırız.
