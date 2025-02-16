// Function to generate a random color
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the background color of the color-box div
function clickMe() {
    let colorBox = document.querySelector(".color-box");
    let newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
    document.getElementById("colorCode").textContent=newColor;
    document.getElementById("colorCode").style.color="white";
}
