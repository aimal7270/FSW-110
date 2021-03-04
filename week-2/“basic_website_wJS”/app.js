var html = document.getElementById('html');
var topNav = document.createElement("topNav");
var anchor = document.createElement("a");
anchor.href = "https://www.google.com";
anchor.textContent = "Google    ";
topNav.appendChild(anchor);


var anchor2 = document.createElement("a");
anchor2.href = "https://www.facebook.com/";
anchor2.textContent ="/Facebook ";
topNav.appendChild(anchor2);
html.appendChild(topNav);



var body =document.createElement('body');

var h1 = document.createElement('h1');
h1.textContent = 'What is Lorem Ipsum?';
body.appendChild(h1);

var p = document.createElement('p');
p.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
body.appendChild(p);

var orderedList = document.createElement('ol');
var list1 = document.createElement('li');
list1.textContent = 'Bryan University';
var list2 = document.createElement('li');
list2.textContent = 'JavaScript';
var list3 = document.createElement('li');
list3.textContent = 'Hyper Text Markup Language';

orderedList.appendChild(list1);
orderedList.appendChild(list2);
orderedList.appendChild(list3);
body.appendChild(orderedList);

var footer = document.createElement("footer");

var policy = document.createElement("p");
policy.href = "https://policies.google.com/privacy?hl=en&fg=1"
policy.textContent = "Google Policy";
footer.appendChild(policy);
body.appendChild(footer);
html.appendChild(body);
