const express = require("express")
const fetch = require('node-fetch')
const fs = require('fs')
const cors = require("cors")
const app = express()



let result = [];

app.use(cors());

app.get('/leaks', (req, res) => {
        
    let data = null;
        
    fetch('https://s3.eu-central-1.amazonaws.com/ct-tech-test-files/hourly_consumption.json')
    .then(data => data.json())
    .then(data => data.push(data))
    
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
)

let server = app.listen(3030, () =>{
    console.log('listen on port', server.address().port)
})