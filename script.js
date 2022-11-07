
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



var list = document.getElementsByClassName("listname");
var i;

for (i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function () {
        this.classList.toggle("show");
        var itemlist = this.nextElementSibling;
        if (itemlist.style.maxHeight) {
            itemlist.style.maxHeight = null;
        } else {
            itemlist.style.maxHeight = itemlist.scrollHeight + "px";
        }
    });
}

function sub() {

    // Preview Box
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    var clear = document.getElementById("btnclear");
    modal.style.display = "block";

    var cno = document.getElementById("cno").value;
    var date = document.getElementById("date").value;

    document.getElementById("pcount").innerHTML = "People: " + cno;
    document.getElementById("edate").innerHTML = "Date: " + date;

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    //data fetching
    var starter = document.querySelectorAll('input[name="starter[]"]:checked');
    var main = document.querySelectorAll('input[name="main[]"]:checked');

    document.getElementById('data').style.visibility = "visible";

    document.getElementById('list1').innerHTML = "";
    document.getElementById('list2').innerHTML = ""; 21

    for (var checkbox of starter) {
        document.getElementById('list1').innerHTML += '<dd>' + checkbox.value + '</dd>';
    }
    for (var checkbox of main) {
        document.getElementById('list2').innerHTML += '<dd>' + checkbox.value + '</dd>';
    }

    clear.onclick = function () {
        document.getElementById('list1').innerHTML = "";
        document.getElementById('list2').innerHTML = "";
    }
}

