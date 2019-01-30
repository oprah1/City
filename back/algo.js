const fs = require('fs');
const fetch = require('node-fetch')

let result = [];

app.get('/leaks', (req, res) => {

    async function algo () {
        
        const call = await fetch('https://s3.eu-central-1.amazonaws.com/ct-tech-test-files/hourly_consumption.json')
        const data = await call.json();
    
        for(let i = 0; i < data.length; i+=3){
            let somme = 0;
            chunk = data.slice(i, i+3)
            .map(x => { 
                return {
                    hour : x.hour,
                    day : x.day,
                    consumptionVolume: x.consumptionVolume
                }
            })
            for(let j = 0; j < chunk.length; j++){
                somme += chunk[j].consumptionVolume
            }
            console.log(somme)
            if(somme > 45)
            result.push(chunk); 
        }
        res.json(result);
    }
})
