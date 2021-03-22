const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    
    var first = document.getElementById("first");
    var last = document.getElementById("last");
    var age = document.getElementById("age");

    // radio button options.
    var radio1 = document.getElementById("yes");
    var radio2 = document.getElementById("no");

    var answer;
    if(radio1.checked == true) {
        answer = radio1;
    } else {
        answer = radio2;
    }

    // check box options.
    var checkBox1 = document.getElementById("chk1");
    var checkBox2 = document.getElementById("chk2");
    var checkBox3 = document.getElementById("chk3");
    var checkBox4 = document.getElementById("chk4");
    var checkBox5 = document.getElementById("chk5");

    // If the checkbox is checked, display the output text
    var choice;
    if (checkBox1.checked == true) {
        choice = checkBox1;
    } else if(checkBox2.checked == true) {
        choice = checkBox2;
    } else if(checkBox3.checked == true) {
        choice = checkBox3;
    } else if(checkBox4.checked == true) {
        choice = checkBox4;
    } else {
        choice = checkBox5;
    } 

    alert("First Name: " + first.value + "\nLast Name: " + last.value + "\nAge: " + age.value 
    + "\nRetuning customer: " + answer.value
    + "\nRecommend a friend: " + choice.value);
    
    first.value = "";
    last.value = "";
    age.value = "";
    choice.checked = false;
    answer.checked = false;
});

// Checkbox and radio button selection.
window.onload = function () {
    var tbl = document.getElementById("tbl");
    var chks = tbl.getElementsByTagName("INPUT");
    var radio = document.getElementById("radio");
    var options = radio.getElementsByTagName("INPUT");
    for (var i = 0; i < chks.length; i++) {
        chks[i].onclick = function () {
            for (var i = 0; i < chks.length; i++) {
                if (chks[i] != this && this.checked) {
                    chks[i].checked = false;
                }
            }
        };
    }

    for (var i = 0; i < options.length; i++) {
        options[i].onclick = function () {
            for (var i = 0; i < options.length; i++) {
                if (options[i] != this && this.checked) {
                    options[i].checked = false;
                }
            }
        };
    }
};
