var myDiv = document.getElementById('my-div');
var h1 = document.createElement('h1');
h1.textContent = 'Welcome to my JS site';
myDiv.appendChild(h1);

var paragraph = document.getElementById('text');
var p = document.createElement('p');
p.textContent = 'All of this was created with Javascript';
paragraph.appendChild(p);


var orderedList = document.getElementById('my-list');
var list1 = document.createElement('li');
var list2 = document.createElement('li');
var list3 = document.createElement('li');

list1.textContent = 'Bryan University';
list2.textContent = 'Full-Stack';
list3.textContent = 'Web Development'

orderedList.appendChild(list1);
orderedList.appendChild(list2);
orderedList.appendChild(list3);

