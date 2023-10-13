let student = {
  prenom: "yanis",
  favoritefood: "crêpes",
  ville: "paris"
};

// facile ou pas

let result = 0;
let values = Object.values(student);

values.forEach((value)=> {
  result += value.length
});

console.log(result);

// complexe

result = 0
result = values.reduce((acc, value) => acc + value.length, 0)
console.log(result);

// pair ou impair

if (result % 2) {
  console.log("impair");
} else {
  console.log("pair");
}

console.log(`le resultat est ${result}`); // l'interpolation
console.log('le resultat est ' + result); // la concaténation

// Ternaire
console.log(`le resultat est ${result} et est ${result % 2 ? 'impair' : 'pair'}`);
// condition ? vrai : faux

