window.onload = function(){
var x = false;
var z = false;
var c = false;
const myButton = document.getElementById('CPIT405');
const myButton2 = document.getElementById('CPIT470');
const myButton3 = document.getElementById('CPIS428');
myButton.addEventListener('click', function () {
    if (x == false) {
        document.getElementById('inner').style.display = "block";
        x = true;
    }
    else {
        document.getElementById('inner').style.display = "none";
        x = false;
    }
})
myButton2.addEventListener('click', function () {
    if (z == false) {
        document.getElementById('inner2').style.display = "block";
        z = true;
    }
    else {
        document.getElementById('inner2').style.display = "none";
        z = false;
    }
})
myButton3.addEventListener('click', function () {
    if (c == false) {
        document.getElementById('inner3').style.display = "block";
        c = true;
    }
    else {
        document.getElementById('inner3').style.display = "none";
        c = false;
    }
})}
