
const express = require('express')
const cookieParser = require('cookie-parser')
const fs = require('fs')
const app = express()
const port = process.env.PORT || 5000
var jsdom = require("jsdom");

// ///get JQ
// const { JSDOM } = jsdom;
// const { window } = new JSDOM();
// const { document } = (new JSDOM('')).window;
// global.document = document;
// var $ = jQuery = require('jquery')(window);
///
// var players = [];

app.use(cookieParser());
app.use(express.static('client'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'))

app.get('/', (req, res) => res.sendFile(__dirname + '/views/default.html'))

app.get('/players', (req, res) => res.sendFile(__dirname + '/views/players.html'))

// console.log(app.locals);

app.post('/game', (req, res) => {
    res.cookie('players-data', JSON.stringify(req.body));
    res.sendFile(__dirname + '/views/index.html');
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
