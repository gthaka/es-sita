let values = [1,4,7,3,6,3,88];
let values2 = [11,22,43,76,34];
let spreaded = [...values];
spreaded.push(8888);
let spreadIt = [99,45,34,...spreaded];

console.log(spreadIt);