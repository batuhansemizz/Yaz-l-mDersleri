// Döngüler 

//  While
// koşul doğru olduğu sürece çalışır

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