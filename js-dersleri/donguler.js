// Döngüler 

//  While
// JavaScript'te while döngüsü, belirli bir koşul doğru olduğu sürece bir bloğu tekrar tekrar çalıştırır.

let _x = 0;

while (x < 10) {
    console.log("Sayacın değeri: " + sayac);
    x++;
}

// bu yapıyı adım adım açıklayalım:

// Koşul: Döngünün her döneminde kontrol edilen bir ifadedir. Bu ifade, doğru (true) ya da yanlış (false) sonuç verebilen herhangi bir mantıksal ifade olabilir.
// Örneğin, x < 10 gibi bir ifade, x 10'dan küçük olduğu sürece döngünün devam etmesini sağlar.
// Döngü Bloğu: Koşul doğru olduğu sürece çalıştırılan bir bloktur. Bu blok içinde istediğimiz işlemleri gerçekleştirebiliriz. 
// Bu işlemler bir ya da daha fazla olabilir.
// Döngü Çıkışı: Döngü bloğu içinde bir noktada koşulun yanlış dönmesini sağlayacak bir değişiklik yapılmazsa, döngü sonsuz bir döngü haline gelebilir.
// Bu nedenle, döngünün bir noktada sona ermesini sağlayacak koşulun doğru bir şekilde belirlenmesi önemlidir. Aksi takdirde, program çalışmayı durdurmak zorunda kalabilir (donar).
let i = 0;

while (i < 10) {
    console.log(i)
    i++
}


let j = 10;

while (j > 0) {
    console.log(j)
    j--;
}

// break ve continue

let f = 0;

while (f < 10) {
    f++;
    if (f == 6) {
        break;
    }
    console.log(f)
}


let x = 0;

while (x < 10) {
    if (x == 3) {
        continue;
    }
    x++;
    console.log(x)
}



//  Do While

let y = 0;
do { // ilk do çalışır sonra while a bakar eğer true ise döngü kırılır

    console.log(y)
    y++;
} while (y < 10);

//  For 

let ı = 0;

for (let ı = 0; ı < 10; ı++) {
    console.log(ı)

}


for (let t = 0; t < 10; t++) {
    if (t == 5) {
        console.log("seçilen rakam")
        continue;
    }
}


let toplam = 0;

for (let i = 1; i < 10; i++) {
    toplam = toplam + i;
} 
console.log(toplam)