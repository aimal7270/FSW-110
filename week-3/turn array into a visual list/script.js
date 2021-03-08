var html = document.getElementsByTagName('html')[0];


for(var i = 0; i < 10; i++){
    var h1 = document.createElement('h1');
    h1.textContent = "Hello World";
    html.appendChild(h1);
    h1.style.color = "green";
}

const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];
for(var i = 0; i < names.length; i++){
    var li = document.createElement("li");
    li.innerHTML = names[i];
    html.appendChild(li);
    li.style.fontSize = "50px";
}



