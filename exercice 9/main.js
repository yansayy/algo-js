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

}

let simiabraz = new Pokemon ("simiabraz", 10, 5, 30, 75)
getname()
getAttack()
getdefense()
gethp()
getluck()
let boskaara = new Pokemon ("boskaara", 7, 10, 35, 85)
getname()
getAttack()
getdefense()
gethp()
getluck()

let percent = 75
let islucky = Math.floor(Math.random() * 100) <= percent;

if (islucky) {
  console.log("attaque");
} 
else {
  console.log("rompiche");
}

console.log(moustillon.islucky());
