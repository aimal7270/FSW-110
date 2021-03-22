document.body.style.backgroundColor="lightblue";

document.getElementById("add").addEventListener("click", display);
function display(){
var add = Number(document.getElementById("first").value) + Number(document.getElementById("second").value);
    document.getElementById("result").innerHTML = "Results: " + add;
    document.getElementById("result").style.color = "red";
}

document.getElementById("sub").addEventListener("click", answer);
function answer(){
var sub = Number(document.getElementById("Here").value) - Number(document.getElementById("There").value);
    document.getElementById("result").innerHTML = "Results: " + sub;
    document.getElementById("result").style.color = "red";
}

document.getElementById("mul").addEventListener("click", conclusion);
function conclusion(){
var mul = Number(document.getElementById("one").value) * Number(document.getElementById("two").value);
    document.getElementById("result").innerHTML = "Results: " + mul;
    document.getElementById("result").style.color = "red";
}