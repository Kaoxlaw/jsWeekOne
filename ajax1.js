//charger un fichier txt

onload = init;

function init(){
 ajax1();
}

function ajax1(){
  //On instancie un bjet 'ajax'
  let xhr = new XMLHttpRequest();
  console.log(xhr);

  //On établit une connexion
  xhr.open("GET", "hello.txt")

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