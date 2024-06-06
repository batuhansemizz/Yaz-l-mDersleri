// object literals

// Sitedeki kullanıcı bilgilerini saklamak için literal objeler kullanılır.

// Öncelikle, tek tek değişkenlerle her bir kullanıcı için bilgi saklamak yerine, bir obje oluşturarak bu işi daha etkili bir şekilde yapabiliriz.

let user = {
    userName : "batuhan",
    userSurname : "semiz",
    userAge : 23,
    userHobbies : ["futbol","yazılım","tenis"], 
    address : {
       city : "antalya",
       country : "türkiye",
       phoneNum : "554645645"
    }
}

// Bu şekilde, her bir kullanıcının bilgileri, bir kullanıcı objesi içinde düzenli bir şekilde saklanır.
// Ayrıca, daha önceki yöntemlerden farklı olarak, her kullanıcı için ayrı bir obje oluşturmak yerine, tek bir yapı içinde saklanır.

// Şimdi, oluşturduğumuz kullanıcı objesinin içeriğini ve türünü (type) konsola yazdıralım:

console.log(user); // Kullanıcı objesini konsola yazdırır.
console.log(typeof user); // Kullanıcı objesinin türünü (type) konsola yazdırır. Bu durumda, "object" çıktısını verir.
