const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

const players = [];

app.use(express.static('client'))

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))

app.get('/players', (req, res) => res.sendFile(__dirname + '/views/players.html'))

app.post('/players', (req, res) => {
    console.log(req);
    res.send('OK');
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))