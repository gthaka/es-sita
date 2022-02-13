
const apiUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

function getTop100Canpers(){
    fetch(apiUrl) // Promise
        .then((r) => r.json())
        .then((json) => { console.log(json[0])})
        .catch((error) => { console.log('failed')});
}

getTop100Canpers();