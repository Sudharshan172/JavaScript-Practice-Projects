let value = document.getElementById("value");
function increase(){
    let prev = value.textContent;
    let update = parseInt(prev)+1;
    value.textContent=update;
    if (update>0){
        value.style.color="green";
    }
    else if (update<0){
        value.style.color="red";
    }
    else{
        value.style.color="black";
    }
    
}

function decrease(){
    let prev = value.textContent;
    let update = parseInt(prev)-1;
    value.textContent=update;
    if (update>0){
        value.style.color="green";
    }
    else if (update<0){
        value.style.color="red";
    }
    else{
        value.style.color="black";
    }
}

function reset(){
    let update=0;
    value.textContent=update;
    value.style.color="black";
}