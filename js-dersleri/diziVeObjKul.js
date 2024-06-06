// dizi ve obj döngü kullanımı 

let city = ["istanbul","ankara","izmir"]
let users = [
    {firstName : "batuhan" , LastName : "semiz"},
    {firstName : "begüm" , LastName : "semiz"},
    {firstName : "selim" , LastName : "semiz"},
    {firstName : "kuş" , LastName : "semiz"}
]

// arrys

for (let i = 0; i<city.length; i++) {
   console.log(city[i])
}

// for-in methodu

for (let i in city){
    console.log(`index: ${i} value: ${city[i]} `)
}

// bu örneğin çıktısı
// index: 0 value: istanbul 
// index: 1 value: ankara 
// index: 2 value: izmir 


city.forEach(function(item){
    console.log(item)
});

for (let i = 0; i<users.length; i++ ) {
  console.log(users[i] ) // çıktısı :  {firstName: 'kuş', LastName: 'semiz'} 
  // users[i]. nokta koyduktan sonra neyi yazdırmak istersek onu seçelim
}

for (let i in users) {
   console.log(`index : ${i} value : ${users[i].firstName}`) // çıktı :index : 1 value : begüm
}

// map methodu returns an arrys

// map methodu nedir 



// map() bir dizi yöntemidir ve bir diziyi dönüştürmek için kullanılır.
// Her bir dizi öğesi üzerinde belirli bir işlem yapılmasını sağlar ve bu işlem sonucunda yeni bir dizi oluşturur.
// Genel olarak, map() yöntemi, orijinal dizinin her bir öğesini işlemek için bir işlev alır ve bu işlevin dönüştürdüğü sonuçları içeren yeni bir dizi döndürür.
// Bu işlev, her bir öğeyi işlerken kullanılır ve işlevin dönüştürdüğü değerler, yeni oluşturulan dizide ilgili öğeler olarak yer alır.

let veri = users.map(function(item){
    return item.firstName + " " + item.LastName;
    
}) 
//users dizisinde bulunan her bir öğeyi işleyerek, 
//her öğenin firstName ve LastName özelliklerini birleştirip yeni bir dizi oluşturuyor. 
console.log(veri) // çıktısı : ['batuhan semiz', 'begüm semiz', 'selim semiz', 'kuş semiz']

let numbers  = [1,2,3,4,5,6,7];

let  num = numbers.map(function(n){
  return n * n ;

});
console.log(num) // çktısı : [1, 4, 9, 16, 25, 36, 49]