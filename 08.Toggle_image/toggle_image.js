let clicked = false;
function toggle(){
    if(clicked){
        document.getElementById("buttonStyle").style.backgroundColor="#cbd2d9";
        document.getElementById("symbolStyle").style.color="#cbd2d9";
        document.getElementById("toggleImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        clicked=false;
    }
    else{
        document.getElementById("buttonStyle").style.backgroundColor="blue";
        document.getElementById("symbolStyle").style.color="blue";
        document.getElementById("toggleImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        clicked=true;
    }
}