const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var age = document.getElementById("age").value;
    alert("First Name: " + first + "\nLast Name: " + last + "\nAge: " + age);
    
    document.getElementById("first").value = "";
    document.getElementById("last").value = "";
    document.getElementById("age").value = "";
});