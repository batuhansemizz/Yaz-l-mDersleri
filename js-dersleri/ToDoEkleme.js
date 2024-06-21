// Elemanların Seçimi
const form = document.querySelector("form"); // HTML belgesindeki <form> elemanını seçiyoruz. Bu form, kullanıcı yeni bir görev eklediğinde gönderilecek.
const input = document.querySelector("#txtTaskName"); // Kullanıcının görev adını yazdığı <input> elemanını seçiyoruz.
const btnAddNewTask = document.querySelector("#btnAddNewTask"); // Yeni görev ekleme butonunu seçiyoruz. Kullanıcı bu butona tıklayarak yeni bir görev ekleyebilir.
const btnDeleteAll = document.querySelector("#btnDeleteAll"); // Tüm görevleri silme butonunu seçiyoruz. Kullanıcı bu butona tıklayarak tüm görevleri silebilir.
const TaskList = document.querySelector("#task-list"); // Görevlerin listeleneceği <ul> elemanını seçiyoruz. Görevler bu listeye eklenir.
let todos; // Görevleri saklamak için bir dizi oluşturuyoruz. Bu dizi, eklenen tüm görevleri tutacak.

// Görevleri Yükleme ve Event Listener'ların Eklenmesi
loadItems(); // Sayfa yüklendiğinde, daha önce eklenen görevleri Local Storage'dan yükleyip listeye eklemek için loadItems fonksiyonunu çağırıyoruz.
eventListeners(); // Kullanıcı etkileşimlerini (örneğin butona tıklama) dinlemek için eventListeners fonksiyonunu çağırıyoruz.

// Event Listener'ların Tanımlanması
function eventListeners() {
  form.addEventListener("submit", addNewItem); // Form gönderildiğinde (submit olayı) addNewItem fonksiyonunu çalıştırır.
  TaskList.addEventListener("click", deleteItem); // Görev listesinde herhangi bir yere tıklandığında deleteItem fonksiyonunu çalıştırır.
  btnDeleteAll.addEventListener("click", deleteAllItems); // Tüm görevleri silme butonuna tıklandığında deleteAllItems fonksiyonunu çalıştırır.
}

// Görevleri Yükleme
function loadItems() {
  todos = getItemsFromLS(); // Local Storage'dan görevleri alır ve todos dizisine atar.
  todos.forEach(function (item) {
    // Her bir görevi döngü ile dolaşır ve listeye ekler.
    creatItems(item); // Her bir görevi oluşturup listeye eklemek için creatItems fonksiyonunu çağırır.
  });
}

// Local Storage'dan Görevleri Almak
function getItemsFromLS() {
  if (localStorage.getItem("todos") == null) {
    // Local Storage'da "todos" anahtarı yoksa...
    todos = []; // Boş bir dizi oluşturur.
  } else {
    todos = JSON.parse(localStorage.getItem("todos")); // "todos" anahtarı varsa, JSON stringini diziye çevirir.
  }
  return todos; // Görevleri döndürür.
} 

// Yeni Bir Görevi Local Storage'a Eklemek
function setItemToLS(newTodo) {
  todos = getItemsFromLS(); // Mevcut görevleri alır.
  todos.push(newTodo); // Yeni görevi diziye ekler.
  localStorage.setItem("todos", JSON.stringify(todos)); // Diziyi JSON formatında Local Storage'a kaydeder.
}

// Yeni Bir Görev Oluşturmak ve Listeye Eklemek
function creatItems(newTodo) {
  const li = document.createElement("li"); // Yeni bir li (liste öğesi) elemanı oluşturur.
  li.classList = "list-group-item list-group-item-secondary"; // li'ye Bootstrap sınıflarını ekler (görünüm için).

  li.appendChild(document.createTextNode(newTodo)); // li'ye yeni görevin metnini ekler.

  const a = document.createElement("a"); // Yeni bir a (link) elemanı oluşturur.
  a.classList = "delete-item float-right"; // a'ya sınıf ekler (sağa hizalı silme butonu).
  a.setAttribute("href", "#"); // a'ya href ekler (link işlevselliği için).
  a.innerHTML = `<i class="fas fa-times"></i>`; // a'nın içeriğini belirler (silme ikonu).

  li.appendChild(a); // a'yı li'ye ekler.
  TaskList.appendChild(li); // li'yi ul'ye ekler.
}

// Yeni Görev Ekleme İşlemi
function addNewItem(e) {
  e.preventDefault(); // Formun varsayılan submit davranışını engeller.

  if (input.value === "") {
    // Eğer input boşsa, yani kullanıcı bir şey yazmadıysa...
    alert("Yeni bir eleman eklemelisiniz"); // Kullanıcıya uyarı mesajı gösterir.
    return; // İşlemi sonlandırır, yani aşağıdaki kodları çalıştırmaz.
  }

  creatItems(input.value); // Yeni görevi oluşturur ve listeye ekler.
  setItemToLS(input.value); // Yeni görevi Local Storage'a ekler.
  input.value = ""; // Input alanını temizler, böylece kullanıcı yeni bir görev ekleyebilir.
}

// Görev Silme İşlemi
function deleteItem(e) {
  if (e.target.className === "fas fa-times") {
    // Tıklanan elemanın sınıfı "fas fa-times" ise, yani silme butonuna tıklanmışsa...
    if (confirm("Silmek istediğinize emin misiniz?")) {
      // Kullanıcıdan silme işlemi için onay alır.
      e.target.parentElement.parentElement.remove(); // Görevi listeden kaldırır.
      deleteToDoFromStorage(e.target.parentElement.parentElement.textContent); // Görevi Local Storage'dan siler.
    }
  }
  e.preventDefault(); // Varsayılan davranışı engeller.
}

// Local Storage'dan Belirli Bir Görevi Silmek İçin
function deleteToDoFromStorage(deletetodo) {
  let todos = getItemsFromLS(); // Mevcut görevleri alır.
  todos.forEach(function (todo, index) {
    if (todo === deletetodo) {
      // Her bir görevi kontrol eder ve eşleşeni siler.
      todos.splice(index, 1); // Eşleşen görevi diziden çıkarır.
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos)); // Güncellenmiş diziyi Local Storage'a kaydeder.
}

// Tüm Görevleri Silme İşlemi
function deleteAllItems(e) {
  if (confirm("Tüm elemanları silmek istediğinizden emin misiniz?")) {
    // Kullanıcıdan tüm görevleri silme işlemi için onay alır.
    while (TaskList.firstChild) {
      // TaskList'in tüm çocuklarını (görevleri) siler.
      TaskList.removeChild(TaskList.firstChild);
    }
    localStorage.clear(); // Local Storage'ı temizler.
  }
  TaskList.innerHTML = ""; // Alternatif yöntem (hepsini bir kerede temizler).
}

/*



### Detaylı Açıklamalar

1. **Elemanların Seçimi**
    - `document.querySelector("form")` ifadesi, HTML belgesindeki form etiketini seçer. Bu form, kullanıcı yeni bir görev eklediğinde gönderilir.
    - `document.querySelector("#txtTaskName")` ifadesi, görev adının girileceği input alanını seçer.
    - `document.querySelector("#btnAddNewTask")` ifadesi, yeni görev ekleme butonunu seçer.
    - `document.querySelector("#btnDeleteAll")` ifadesi, tüm görevleri silme butonunu seçer.
    - `document.querySelector("#task-list")` ifadesi, görevlerin listeleneceği ul (unordered list) elemanını seçer.
    - `let todos;` ifadesi, görevleri saklamak için bir dizi tanımlar.

2. **Görevleri Yükleme ve Event Listener'ların Eklenmesi**
    - `loadItems()` fonksiyonu, sayfa yüklendiğinde görevleri Local Storage'dan alır ve listeye ekler.
    - `eventListeners()` fonksiyonu, kullanıcı etkileşimlerini dinleyen event listener'ları ekler.

3. **Event Listener'ların Tanımlanması**
    - `form.addEventListener("submit", addNewItem)` ifadesi, form gönderildiğinde addNewItem fonksiyonunu çalıştırır.
    - `TaskList.addEventListener("click", deleteItem)` ifadesi, görev listesinde herhangi bir yere tıklandığında deleteItem fonksiyonunu çalıştırır.
    - `btnDeleteAll.addEventListener("click", deleteAllItems)` ifadesi, tüm görevleri silme butonuna tıklandığında deleteAllItems fonksiyonunu çalıştırır.

4. **Görevleri Yükleme**
    - `todos = getItemsFromLS()` ifadesi, Local Storage'dan görevleri alır ve todos dizisine atar.
    - `todos.forEach(function(item) { creatItems(item); })` ifadesi, her bir görevi döngü ile dolaşır ve listeye ekler.

5. **Local Storage'dan Görevleri Almak**
    - `if(localStorage.getItem("todos") == null){ todos = []; }` ifadesi, Local Storage'da "todos" anahtarı yok

sa boş bir dizi oluşturur.
    - `else { todos = JSON.parse(localStorage.getItem("todos")); }` ifadesi, "todos" anahtarı varsa, JSON stringini diziye çevirir.
    - `return todos;` ifadesi, görevleri döndürür.

6. **Yeni Bir Görevi Local Storage'a Eklemek**
    - `todos = getItemsFromLS()` ifadesi, mevcut görevleri alır.
    - `todos.push(newTodo);` ifadesi, yeni görevi diziye ekler.
    - `localStorage.setItem("todos", JSON.stringify(todos));` ifadesi, diziyi JSON formatında Local Storage'a kaydeder.

7. **Yeni Bir Görev Oluşturmak ve Listeye Eklemek**
    - `const li = document.createElement("li");` ifadesi, yeni bir li (liste öğesi) elemanı oluşturur.
    - `li.classList = "list-group-item list-group-item-secondary";` ifadesi, li'ye Bootstrap sınıflarını ekler (görünüm için).
    - `li.appendChild(document.createTextNode(newTodo));` ifadesi, li'ye yeni görevin metnini ekler.
    - `const a = document.createElement("a");` ifadesi, yeni bir a (link) elemanı oluşturur.
    - `a.classList = "delete-item float-right";` ifadesi, a'ya sınıf ekler (sağa hizalı silme butonu).
    - `a.setAttribute("href", "#");` ifadesi, a'ya href ekler (link işlevselliği için).
    - `a.innerHTML = `<i class="fas fa-times"></i>`;` ifadesi, a'nın içeriğini belirler (silme ikonu).
    - `li.appendChild(a);` ifadesi, a'yı li'ye ekler.
    - `TaskList.appendChild(li);` ifadesi, li'yi ul'ye ekler.

8. **Yeni Görev Ekleme İşlemi**
    - `e.preventDefault();` ifadesi, formun varsayılan submit davranışını engeller.
    - `if (input.value === "") { alert("Yeni bir eleman eklemelisiniz"); return; }` ifadesi, eğer input boşsa kullanıcıya uyarı mesajı gösterir ve işlemi sonlandırır.
    - `creatItems(input.value);` ifadesi, yeni görevi oluşturur ve listeye ekler.
    - `setItemToLS(input.value);` ifadesi, yeni görevi Local Storage'a ekler.
    - `input.value = "";` ifadesi, input alanını temizler.

9. **Görev Silme İşlemi**
    - `if (e.target.className === "fas fa-times") {` ifadesi, tıklanan elemanın sınıfı "fas fa-times" ise, yani silme butonuna tıklanmışsa çalışır.
    - `if (confirm("Silmek istediğinize emin misiniz?")) {` ifadesi, kullanıcıdan silme işlemi için onay alır.
    - `e.target.parentElement.parentElement.remove();` ifadesi, görevi listeden kaldırır.
    - `deleteToDoFromStorage(e.target.parentElement.parentElement.textContent);` ifadesi, görevi Local Storage'dan siler.
    - `e.preventDefault();` ifadesi, varsayılan davranışı engeller.

10. **Local Storage'dan Belirli Bir Görevi Silmek İçin**
    - `let todos = getItemsFromLS();` ifadesi, mevcut görevleri alır.
    - `todos.forEach(function(todo, index){ if(todo === deletetodo){ todos.splice(index, 1); } });` ifadesi, her bir görevi kontrol eder ve eşleşeni diziden çıkarır.
    - `localStorage.setItem("todos", JSON.stringify(todos));` ifadesi, güncellenmiş diziyi Local Storage'a kaydeder.

11. **Tüm Görevleri Silme İşlemi**
    - `if (confirm("Tüm elemanları silmek istediğinizden emin misiniz?")) {` ifadesi, kullanıcıdan tüm görevleri silme işlemi için onay alır.
    - `while(TaskList.firstChild){ TaskList.removeChild(TaskList.firstChild); }` ifadesi, TaskList'in tüm çocuklarını (görevleri) siler.
    - `localStorage.clear();` ifadesi, Local Storage'ı temizler.
    - `TaskList.innerHTML = "";` ifadesi, alternatif yöntem olarak hepsini bir kerede temizler.

Bu kod, bir yapılacaklar listesi uygulamasının nasıl çalıştığını detaylı bir şekilde açıklar. Her adımda ne yapıldığını ve neden yapıldığını belirterek, JavaScript bilmeyen birinin bile anlayabileceği şekilde açıklamalarda bulundum.

*/
