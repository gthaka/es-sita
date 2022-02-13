
let amounts = [55100,45000,99990,];
let total = 0;

for(const amount of amounts){
    console.log(amount);
    total += amount;
}

console.log(total);

// Use it with an Iterable
let someString = "We are family, we just need to work together!";

for(const string of someString){
    console.log(string);
}

