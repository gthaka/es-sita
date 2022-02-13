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