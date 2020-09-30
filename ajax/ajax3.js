//requete vers fichier php
//avec 2 params

onload = init;

function init(){
 ajax1();
}

function ajax1(){

  let name = "Kao";
  let score = 100;

  //On instancie un bjet 'ajax'
  let xhr = new XMLHttpRequest();
  console.log(xhr);

  //On établit une connexion
  xhr.open("GET", "hello2.php?name="+ name + "&score=" + score);

  //On envoie la requete
  xhr.send();

  //On écoute le changement du readState
  xhr.onreadystatechange = function() {
    //Le readystte === 4 (4=réponse prête)
    if(xhr.readyState === 4 && xhr.status === 200) {
      let data = xhr.responseText; //Or responseXML
      // console.log(data);
      processResponse(data);
    }
  }
}

function processResponse(data){
  document.getElementById("output").innerHTML = data;
}