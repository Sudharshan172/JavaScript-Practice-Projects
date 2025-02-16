function generateNumbers() {
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);
    document.getElementById("num1").textContent = num1;
    document.getElementById("num2").textContent = num2;
}

function checkValue() {
    let num1 = parseInt(document.getElementById("num1").textContent);
    let num2 = parseInt(document.getElementById("num2").textContent);
    let userInput = document.getElementsByClassName("input")[0].value.trim();
    let message = document.getElementsByClassName("message")[0];

    if (userInput === "") {
        message.textContent = "Please enter a number!";
        message.style.color = "red";
        return;
    }

    if (parseInt(userInput) === num1 + num2) {
        message.textContent = "Correct!";
        message.style.color = "green";
        document.getElementsByClassName("input")[0].value = ""; // Clear input
        generateNumbers(); // Generate new numbers
    } else {
        message.textContent = "Incorrect! Try again.";
        message.style.color = "red";
    }
}

function resetValue() {
    document.getElementsByClassName("input")[0].value = "";
    document.getElementsByClassName("message")[0].textContent = "";
}

generateNumbers();
