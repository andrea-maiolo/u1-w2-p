/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  const pet = pets[i];
  console.log(pet);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

// const ordinatedPets = pets.sort();
// console.log(ordinatedPets);

//senza cambiare l'array originale
const ordinatedPets2 = pets.toSorted();
console.log(ordinatedPets2);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

for (let i = pets.length - 1; i >= 0; i--) {
  const pet = pets[i];
  console.log(pet);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let firstPet = pets.shift();
pets.push(firstPet);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate"
     con valore a tua scelta.
*/

//---------------------------
// console.log(myLicense[i]);

// DEVI CREARE UNA FUNZIONE
// crea una license
// 2 lettere 3 numeri 2lettere
// function random() {
//   return Math.floor(Math.random() * 10);
// }
//------------------------
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];

  let myLicense = ["TS567VX", "QR234NP", "AB123CD"];

  car.licensePlate = myLicense[i];
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars",
    rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

myCar = { brand: "Toyota", model: "yaris", color: "grey", licensePlate: "OT593LS", trims: ["titanium", "st", "active"] };
cars.push(myCar);
console.log(cars);

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  car.trims.splice(car.trims.length - 1, 1);
}

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  let firstTrim = car.trims[0];
  justTrims.push(firstTrim);
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. 
    Se la prima lettera della proprietà "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  if (car.color[0] === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
//-------------------------------
// prova a stampare anche32
//----------------------------------

const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

let counter = 0;
let reference;
while (reference !== 32) {
  console.log(numericArray[counter]);
  counter++;
  reference = numericArray[counter];
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array
     composto dalle posizioni di ogni carattere all'interno dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

const charactersArray = ["g", "n", "u", "z", "d"];

const newArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  let letter = charactersArray[i];

  switch (letter) {
    case "a":
      letter = 1;
      newArray.push(letter);
      break;
    case "b":
      letter = 2;
      newArray.push(letter);
      break;
    case "c":
      letter = 3;
      newArray.push(letter);
      break;
    case "d":
      letter = 4;
      newArray.push(letter);
      break;
    case "e":
      letter = 5;
      newArray.push(letter);
      break;
    case "f":
      letter = 6;
      newArray.push(letter);
      break;
    case "g":
      letter = 7;
      newArray.push(letter);
      break;
    case "h":
      letter = 8;
      newArray.push(letter);
      break;
    case "i":
      letter = 9;
      newArray.push(letter);
      break;
    case "l":
      letter = 10;
      newArray.push(letter);
      break;
    case "m":
      letter = 11;
      newArray.push(letter);
      break;
    case "n":
      letter = 12;
      newArray.push(letter);
      break;
    case "o":
      letter = 13;
      newArray.push(letter);
      break;
    case "p":
      letter = 14;
      newArray.push(letter);
      break;
    case "q":
      letter = 15;
      newArray.push(letter);
      break;
    case "r":
      letter = 16;
      newArray.push(letter);
      break;
    case "s":
      letter = 17;
      newArray.push(letter);
      break;
    case "t":
      letter = 18;
      newArray.push(letter);
      break;
    case "u":
      letter = 19;
      newArray.push(letter);
      break;
    case "v":
      letter = 20;
      newArray.push(letter);
      break;
    case "z":
      letter = 21;
      newArray.push(letter);
      break;
    default:
      break;
  }
}

console.log(newArray);
