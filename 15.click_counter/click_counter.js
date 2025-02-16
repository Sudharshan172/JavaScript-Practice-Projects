let count = 0;
function clickMe() {
    count = count+1;
    document.getElementById("count").textContent="Count: "+count;
}
function reset(){
    document.getElementById("count").textContent="Count: 0";
    count = 0;
}

