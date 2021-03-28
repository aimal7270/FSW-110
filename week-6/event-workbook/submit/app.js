// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function
var form = document.getElementById("submit-me");
var name = document.getElementById("name");
var age = document.getElementById("age");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Conragts you have submitted the form!");
});