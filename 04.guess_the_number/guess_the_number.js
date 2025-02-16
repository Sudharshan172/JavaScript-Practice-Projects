let result = document.getElementById("message");
let inputValue = document.getElementById("input-box");
let random = Math.ceil(Math.random()*100);

function Guess(){
    let guessNumber = parseInt(inputValue.value);
    if (guessNumber>random){
        message.textContent="Too High! Try Again!";
        message.style.color="red";
        message.style.fontSize = "30px";
    }
    else if (guessNumber<random){
        message.textContent="Too Low! Try Again!";
        message.style.color="orange";
        message.style.fontSize = "30px";
    }
    else if (guessNumber===random){
        message.textContent="Hurray ! You Guess the Number Correctly!!";
        message.style.color="Green";
        message.style.fontSize = "30px";
    }
}