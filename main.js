function Calculator1() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) + parseInt(num2);
    alert(sum)
}

function Calculator2() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) - parseInt(num2);
    alert(sum)
}

function Calculator3() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) * parseInt(num2);
    alert(sum)
}

function Calculator4() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) / parseInt(num2);
    alert(sum)
}

function myalert() {
    alert("hello")
}

function bmi() {
    var num1 = document.getElementById("hight").value;
    var num2 = document.getElementById("width").value;
    var sh = num1/100;
    var sumsh = sh*sh;
    var result = num2 / sumsh;
    alert(result)
}