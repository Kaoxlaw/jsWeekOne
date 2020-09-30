function Client(id, name, score){

  this.id = id;
  this.name = name;
  this.score = score;

  this.display = function(){
    console.log("Id." + id + ", Name: " + name + ", Score: " + score);
  }

}

let kao = new Client(1, 'kao', 250);
let naruto = new Client(2, 'naruto', 650);

kao.display();
naruto.display();
