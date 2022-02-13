if(false){
    var example = 5;
}
console.log(example); // Doesn't throw error, just undefined - even if it has not been accessed within the condition.

// let, is a strict version of var.
// used within a block scope
if(true){
    let exampleLet = 5;
}
//console.log(exampleLet); // Is not accessible and will throw error

///////////////////////
// const, quite different
const otherExample = {}; // Cannot change type, but can assign properties for Arrays and Objects
otherExample.name = 'Fred';
console.log(otherExample);
const exampleConst = 45 // primitive datatype , number string ..
// exampleConst = 10; // This is read only. Throws error
