function switchOff() {
    document.getElementById("bulbImage").src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchStatus").textContent = "Switch Off";
    document.getElementById("switchOn").style.backgroundColor = "white";
    document.getElementById("switchOn").style.color = "black";
    document.getElementById("switchOff").style.backgroundColor = "Red";
    document.getElementById("switchOff").style.color = "white";
}

function switchOn() {
    document.getElementById("bulbImage").src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchStatus").textContent = "Switch On";
    document.getElementById("switchOff").style.backgroundColor = "white";
    document.getElementById("switchOff").style.color = "black";
    document.getElementById("switchOn").style.backgroundColor = "Green";
    document.getElementById("switchOn").style.color = "white";
}