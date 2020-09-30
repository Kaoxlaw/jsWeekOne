onload = init;

let elNombre = 0;
let elTimer = null;
let elButton;

function init() {
  elButton = document.getElementById("bt1");
  elButton.addEventListener("click", play);
}

function play() {

  if(elTimer == null){
    elTimer = setInterval(action, 2000);
    elButton.value = "Pause";
  }  else {
    clearInterval(elTimer);
    elButton.value = "Play";
    elTimer = null;
  }
  
}

function action() {
  ++elNombre;
  document.getElementById("output").innerHTML = elNombre;
}