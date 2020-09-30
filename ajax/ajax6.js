//requete vers fichier XML

let listClients = [

]

onload = init;

function init(){
 ajax1();
}

function ajax1(){

  //On instancie un bjet 'ajax'
  let xhr = new XMLHttpRequest();
  console.log(xhr);

  //On établit une connexion
  xhr.open("GET", "clients.xml");

  //On envoie la requete
  xhr.send();

  //On écoute le changement du readState
  xhr.onreadystatechange = function() {
    //Le readystte === 4 (4=réponse prête)
    if(xhr.readyState === 4 && xhr.status === 200) {
      let data = xhr.responseXML; //Or responseXML
      // console.log(data);
      processResponse(data);
    }
  }
}

function processResponse(data){
  let nodesClients = data.getElementsByTagName("client");
  for (let i=0; i<nodesClients.length; i++){
    let id = nodesClients[i].getAttribute("id");
    // console.log(id);

    let nom = nodesClients[i].getElementsByTagName("nom")[0].firstChild.nodeValue;
    // console.log(nom);

    let score = nodesClients[i].getElementsByTagName("score")[0].firstChild.nodeValue;
    // console.log(score);

    let client = new Client(id, nom, score);

    listClients.push(client);
    
  }

  listClients.forEach(c => {

    document.getElementById("output").innerHTML += c.id + " " + c.nom + " " + c.score + "<br>";

  });

}