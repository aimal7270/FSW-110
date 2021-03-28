// make the box disapear when the user clicks it
var box = document.getElementsByClassName('red-box') [0];
box.addEventListener("click", function (e) {
   console.log(e);
   // box.style.removeProperty('color');
   box.remove();
});