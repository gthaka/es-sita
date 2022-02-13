function add(numArray = []){ // Default to empty Array, otherwise calling without an array {add(empty)} throws error
    let total = 0;
    numArray.forEach((element)=>{total += element});

    console.log(total);
}

add([1,3,3]);