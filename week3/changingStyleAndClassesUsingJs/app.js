var html = document.getElementsByTagName('html')[0];


for(var i = 0; i < 5; i++){
    var h1 = document.createElement('h1');
    h1.textContent = "Hello World";
    html.appendChild(h1);

    h1.classList.add('border');
    h1.style.fontSize = "20px";
    h1.style.fontWeight = "lighter";
    h1.style.fontFamily = "sans-serif"
    h1.style.color = "cornflowerblue";

}








