// Write shorter conde
function add(...nums){
    let total = nums.reduce(function(x,y){
        return x+y;
    })
    console.log(total);
}

add(2,4,5);

// Shorter
function addShorter(...nums){
    let total = nums.reduce((x,y)=>x+y);
    console.log(total);
}
addShorter(2,4,5);

// codewithmosh- 👍
// Other things to consider
const square = number /*function(number)*/ => number*number; // If only one parameter is passed
const addNum = (a,b) /*function(a,b) */ => a+b; // If more than one parameter
const greetMsg = () /*function() */ => 'Hi There!';

console.log(square(5));
console.log(addNum(30,-5));
console.log(greetMsg());

// Note: Arrow Functions Don't rebind this

// Predicate Object
const jobs = [
    {id: 1, isActive: true, },
    {id: 2, isActive: true, },
    {id: 3, isActive: false, },
]

const activeJobs = jobs.filter(job=>job.isActive);

console.log(activeJobs);