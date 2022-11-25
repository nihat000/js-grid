class Animal {
  constructor(species,habitat){
    this.species = species;
    this.habitat = habitat
  }
}


let lion = new Animal("lion","forest")
let zebra = new Animal("zebra","rainforest")
let bird = new Animal("bird","tree")
let fish = new Animal("fish","ocean")


lion.name = "Deli sirim";
lion.weight = "10 kq";


zebra.name = "Hundur zebram";
zebra.weight = "1kq ";


bird.name = "Goydeki qusum";
bird.weight = "50q";


fish.name = "Quru baliq";
fish.weight = "400q";


console.log(fish)