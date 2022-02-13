function addressMaker(city,state){
    const newAddress = {city,state};

    console.log(newAddress);
}

addressMaker('LA','California');

function addressMaker2(address){
    const {town,county}=address;

    const newAddress2 = {
        town,
        county,
        country: 'Kenya',
    };

    let addressVal = `${newAddress2.town}, ${newAddress2.county}, ${newAddress2.country},`;
    console.log(addressVal)
}

addressMaker2({town:'Kahawa West',county:'Kiambu'});