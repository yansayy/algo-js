class Pokemon {
constructor(name, attack, defense, hp, luck) {
  this.name = name;
  this.attack = attack;
  this.defense = defense;
  this.hp = hp;
  this.luck = luck;
}

  islucky() {
   return Math.floor(Math.random() * 100) <= this.luck;
   }

  attackPokemon(pokemon) {
  if (this.islucky()) {
 let damages = this.attack - pokemon.defense;
 pokemon.hp -= damages;
 console.log(`${this.name} a attaqué ${pokemon.name}, perdant ${damages} hp !`);
  } else {
    console.log(`${this.name} a raté son attaque !`);
  }
 }
}

let simiabraz = new Pokemon ("simiabraz", 18, 10, 45, 75)
let boskaara = new Pokemon ("boskaara", 15, 10, 50, 85)

while (simiabraz.hp > 0 && boskaara.hp > 0) {
  simiabraz.attackPokemon(boskaara);

  if (boskaara.hp <= 0) {
    console.log("boskaara a perdu le combat, il est KO");
    break;
  }

  boskaara.attackPokemon(simiabraz);

  if (simiabraz.hp <= 0) {
    console.log("simiabraz a perdu le combat, il est KO");
    break;
  }
}

console.log("le combat est terminé.");