function validate() {
    let names1 = document.ContactForm.name1.value;
    let names2 = document.ContactForm.name2.value;
    let Specialcharacter = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let regEx = /\d/;

    let numbers = document.ContactForm.number.value;

    let emailAdd = document.ContactForm.email.value;
    let atpos = emailAdd.indexOf("@");
    let dotpos = emailAdd.lastIndexOf(".");


    if (names1.match(Specialcharacter) || names1 == "" || names1.match(regEx)) {
        alert("First Name is Empty or Out of Alfa!");
        names1.focus();
        return false;
    } else if (names2.match(Specialcharacter) || names2 == "" || names2.match(regEx)) {
        alert("Last Name is Empty or Out of Alfa!");
        names2.focus();
        return false;
    } else if (numbers == "" || isNaN(numbers) ||
        numbers.length != 5) {

        alert("Please provide 5 numerical numbers!");
        numbers.focus();
        return false;

    } else
    if (atpos < 1 || (dotpos - atpos < 2) || emailAdd == "") {
        alert("Email Address must INCLUDE '@' and 'dot' without EMPTYSPACES!")
        emailAdd.focus();
        return false;

    } else {
        alert("Success! " + "\nNames: " + names1 + " " + names2 + "\nTel: " + numbers + "\nEmail: " + emailAdd);
    }
}

//Lab2 quiz
function showAnswer() {
    let txt;

    if (confirm("Press OK to show your Score and Correct Answers")) {
        txt = "Correct Answer: 1. Stockhoml is the capital of Sweden. 2. The Swedish national flag is YELLOW and BLUE color ";

        document.getElementById("form1").onsubmit = function() {
            let capital = parseInt(document.querySelector('input[name = "capital"]:checked').value);
            /////
            let obj = document.getElementsByName("flag");

            let k = 0;
            let scoreFlag = 0;

            for (k in obj) {

                if (obj[k].checked) {


                    scoreFlag += parseInt(obj[k].value);


                }

            }

            /////
            let result = capital + scoreFlag;
            document.getElementById("grade").innerHTML = result;
            alert("Your total score is: " + result);
            alert(txt);
            return false;
        }

    } else {
        txt = "Try again, Good Luck!";


    }

    document.getElementById("displayAnswer").innerHTML = txt;
}

function displayText() {
    let inputText = document.getElementById("txtInputData").value;
    if (inputText == "") {
        alert("no empty in the text box");
        inputText.focus();
        return false;
    } else {
        document.getElementById("showText").innerHTML = "Your favorite food is: " + inputText;
    }
}