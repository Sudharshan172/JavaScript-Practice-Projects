function stopButton(){
    document.getElementById("btn1").style.backgroundColor="#cf1124";
    document.getElementById("stop-signal").style.backgroundColor="#cf1124";
    
    document.getElementById("btn2").style.backgroundColor="#1f1d41";
    document.getElementById("ready-signal").style.backgroundColor="#4b5069";
    document.getElementById("btn3").style.backgroundColor="#1f1d41";
    document.getElementById("go-signal").style.backgroundColor="#4b5069";
}
function readyButton(){
    document.getElementById("btn2").style.backgroundColor="#f7c948";
    document.getElementById("ready-signal").style.backgroundColor="#f7c948";

    document.getElementById("btn1").style.backgroundColor="#1f1d41";
    document.getElementById("stop-signal").style.backgroundColor="#4b5069";
    document.getElementById("btn3").style.backgroundColor="#1f1d41";
    document.getElementById("go-signal").style.backgroundColor="#4b5069";
}
function goButton(){
    document.getElementById("btn3").style.backgroundColor="#199473";
    document.getElementById("go-signal").style.backgroundColor="#199473";

    document.getElementById("btn1").style.backgroundColor="#1f1d41";
    document.getElementById("stop-signal").style.backgroundColor="#4b5069";
    document.getElementById("btn2").style.backgroundColor="#1f1d41";
    document.getElementById("ready-signal").style.backgroundColor="#4b5069";
}