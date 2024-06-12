

// Keyboard event

const text = document.getElementById("txtTaskName")

// focus Event

// text.addEventListener("focus",run);

// blur event

// text.addEventListener("blur",run)

// Paste,copy,cut da aynı şekilde çalışır

// text.addEventListener("paste",run);

// select

// text.addEventListener("select",run)

// key down

text.addEventListener("keyup",run)

// key up

text.addEventListener("keydown",run)

function run(e) {
    console.log(e.type)
}