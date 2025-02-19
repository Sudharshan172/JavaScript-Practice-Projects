function switchoff(){
    document.getElementById("bulbOffImage").src="https://image.ibb.co/hoBxtm/light_bulb_off.png";
    document.getElementById("btn-off").style.backgroundColor="red";
    document.getElementById("btn-off").style.color="white";
    document.getElementById("btn-on").style.backgroundColor="white";
    document.getElementById("btn-on").style.color="black";
};
function switchon(){
    document.getElementById("bulbOffImage").src="https://image.ibb.co/cBBaeR/light_bulb_on.png";
    document.getElementById("btn-on").style.backgroundColor="green";
    document.getElementById("btn-on").style.color="white";
    document.getElementById("btn-off").style.backgroundColor="white";
    document.getElementById("btn-off").style.color="black";
}