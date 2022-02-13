import {Animal, Cat} from "./animal.js";

let cat = new Cat('Cat',4);
console.log(cat);
// cat.legs = 3;
cat.tail = false; // Lost tail in an accident
cat.classification = 'Domestic';
console.log(cat);

console.log(Animal.default()); // Need to instantiate
console.log(cat.metaData); // Need to instantiate
cat.makeNoise();