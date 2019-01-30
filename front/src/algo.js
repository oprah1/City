const fetch = require('node-fetch');

async function getData(){
const call = await fetch('https://s3.eu-central-1.amazonaws.com/ct-tech-test-files/hourly_consumption.json')
const data = await call.json();
return data
}
async function algo() {
const data = await getData();
for(let i = 0; i < data.length; i++){
if(data.slice(i, i+3).map(x => x.consumptionVolume).reduce((accum, currentvalue) => accum + currentvalue) > 45)
console.log(true);
console.log(false);
}
}


algo();


module.exports= getData 