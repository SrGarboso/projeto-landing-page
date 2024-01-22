var rightArrow = window.document.getElementById("rightArrow");
var bruna = window.document.getElementById("bruna");
var leonardo = window.document.getElementById("leonardo");
var samantha = window.document.getElementById("samantha");
var leftArrow = window.document.getElementById("leftArrow"); 

function rightRoll(){
    bruna.style = "display:none";
    samantha.style = "display:flex";
    rightArrow.style = "display:none";
    leftArrow.style = "display:flex; margin: 55px 0px 0px 0px";

}

function leftRoll(){
    samantha.style = "display:none";
    bruna.style = "display:flex";
    rightArrow.style = "display:flex; margin: 55px 0px 0px 0px";
    leftArrow.style = "display:none";
} 