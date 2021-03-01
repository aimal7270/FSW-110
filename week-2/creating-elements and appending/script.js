var body = document.getElementById('body');
var h1 = document.createElement('h1');
h1.textContent = 'Welcome to my JS site';
body.appendChild(h1);

var p = document.createElement('p');
p.textContent = 'All of this was created with Javascript';
body.appendChild(p);

var orderedList = document.createElement('ol');
var list1 = document.createElement('li');
list1.textContent = 'Bryan University';
var list2 = document.createElement('li');
list2.textContent = 'Full-Stack';
var list3 = document.createElement('li');
list3.textContent = 'Web Development';

orderedList.appendChild(list1);
orderedList.appendChild(list2);
orderedList.appendChild(list3);

body.appendChild(orderedList);