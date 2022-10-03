
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