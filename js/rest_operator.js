// Used when we do not know how many inputs will be used

function add(nums){
    console.log(nums); //Only shows once
    console.log(arguments); // Use arguments object for our vars (OLD) - Deprecated
}

add(1,2);
function addWell(...nums){ // Proper way
    console.log(nums);
}

addWell(2,4,5,6,8,7);