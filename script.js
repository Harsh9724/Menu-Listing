
function show() {

    var starter = document.querySelectorAll('input[name="starter[]"]:checked');
    var dessert = document.querySelectorAll('input[name="dessert[]"]:checked');
    var starter1 = document.querySelectorAll('input[name="starter1[]"]:checked');

    document.getElementById('list1').innerHTML = "";
    document.getElementById('list2').innerHTML = "";
    document.getElementById('list3').innerHTML = "";

    document.getElementById('data').style.visibility = 'visible';

    for (var checkbox of starter) {
        document.getElementById('list1').innerHTML += '<li>' + checkbox.value + '</li>';
    }
    for (var checkbox of starter1) {
        document.getElementById('list3').innerHTML += '<li>' + checkbox.value + '</li>';
    }

    for (var checkbox of dessert) {
        document.getElementById('list2').innerHTML += '<li>' + checkbox.value + '</li>';
    }
}
function generatePDF() {
    html2pdf().from(document.getElementById("data")).save();
}

function Clean() {
    document.getElementById('data').innerHTML = '';
}


const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    modeToggle = document.querySelector(".dark-light"),
    searchToggle = document.querySelector(".searchToggle"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    siderbarClose = document.querySelector(".siderbarClose");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
    body.classList.add("dark");
}

modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    // js code to keep user selected mode even page refresh or file reopen
    if (!body.classList.contains("dark")) {
        localStorage.setItem("mode", "light-mode");
    } else {
        localStorage.setItem("mode", "dark-mode");
    }
});

searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active");
});


sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

body.addEventListener("click", e => {
    let clickedElm = e.target;

    if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
        nav.classList.remove("active");
    }
});


function show() {
    document.getElementById('listitems').classList.toggle("show");
}