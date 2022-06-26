const { response } = require('express');
const express = require('express') //we're writing this in express
const app = express()
const PORT = 8000; //the port we wanna use

const rappers = { //objects
    '21 savage': {
        'age':29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Johnathan Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'dylan': {
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan, West Virginia'
    }
}

app.get('/', (requst, response) => {    // request for the page
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request,response) => {    //request for the API info
    const rappersName = request.params.rapperName.toLowerCase() //request has params of rapperName
    if (rappers[rappersName]) {
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['dylan'])
    }
})

app.listen(PORT, ()=> { //confirms the server is running
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})