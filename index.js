
const express = require('express');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;
// var jsdom = require("jsdom");

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
app.set('views', './src/views');
app.set('view engine', 'ejs');


app.get('/', (req, res) => res.render('default'))

app.get('/players', (req, res) => res.render(
    'players',
    {
        message: ''
    }
))

// console.log(app.locals);

app.post('/game', (req, res) => {
    let arr = Object.values(req.body);
    let players = arr.filter(p => p !== '');
    if (players.length < 4){
        res.render(
            'players',
            {
                message: 'Please insert at least 4 players to start the game!'
            })
    }
    else{
        res.cookie('players-data', JSON.stringify(players));
        res.render('index');
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
