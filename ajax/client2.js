class Client {
  constructor(id, nom, score){
    this.id = id;
    this.nom = nom;
    this.score = score;
  }

  display(){
    console.log("Id." + this.id + ", Name: " + this.nom + ", Score: " + this.score)
  }
}

let kao = new Client(1, 'kao', 250);
let naruto = new Client(2, 'naruto', 650);

kao.display();
naruto.display();