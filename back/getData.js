async function getData(){
const call = await fetch('https://s3.eu-central-1.amazonaws.com/ct-tech-test-files/hourly_consumption.json')
const data = await call.json();
fs.writeFile('data.json', JSON.stringify(data), (err) => {
if (err) throw err;
console.log('The file has been saved!');
});
}


getData();