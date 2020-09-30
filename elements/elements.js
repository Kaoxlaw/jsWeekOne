onload = init;

let elButton;

function init() {
  elButton = document.getElementById("bt1");
  elButton.addEventListener("click", createDom);

}

function createDom() {

  let elDiv = document.createElement("div");
  elDiv.setAttribute("style", "color: blue");
  let content = document.createTextNode("Hello, It's the new Div!");
  
  elDiv.appendChild(content);

  document.getElementById("container").appendChild(elDiv);

}
