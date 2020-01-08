import { Repo } from "./repo.js";
import { Bomb } from "./bomb.js";
import { Dice } from "./dice.js";
import { Player } from "./player.js";
import { Round } from "./round.js";


export class Game{
    constructor(players){
        this.randomTime = function(){ return Math.floor(Math.random() * (40 - 15) + 15)};
        this.cards = Repo.getCards();
        this.currentCard;
        this.cardDrawn = false;
        this.bomb = new Bomb();
        this.dice = new Dice();
        this.players = players;
        this.diceEle = document.getElementById('dice');
        this.cardEle = document.getElementById('card');
        this.bombEle = document.getElementById('bomb')
        let instance = this;

        this.diceEle.addEventListener('click', function(){
            instance.dice.roll(instance.intervalLoop);
        })

        this.cardEle.addEventListener('click', function(){
            instance.getCard();
        })

        this.bombEle.addEventListener('click', function(){
                instance.newRound();
        })
        
    }

    intervalLoop(foo){
        var count = setInterval(timer, 100)
        var timesPassed = 0;
        function timer(){
            if (timesPassed === 10){
                clearInterval(count);
                return;
            }
            else{
                foo();
            }
            timesPassed++;
        }
    }

    getCard(){
        if (!this.cardDrawn){
            this.cardEle.querySelector("#syllable").textContent = this.cards.shift().name;
            this.cardDrawn = true;
            console.log(this.cards);
        }else{
            alert('You have already drawn a card')
        }
    }
    

    resetGameState(){
        this.dice.reset();
        this.cardDrawn = false;
        this.bomb.reset();
    }

    newRoundConditionsMet(){
        let conditionsMet = true;
        if (!this.cardDrawn){
            alert('Please draw card before you start a new round');
            conditionsMet = false;
        }
        if (!this.dice.rolled){
            alert('Please roll the dice before you start a new round');
            conditionsMet = false;
        }
        return conditionsMet;
    }

    newRound(){
        if (this.newRoundConditionsMet() && !this.bomb.ticking){
            this.bomb.startTimer(this.randomTime(), this);
        }
    }

    showModal(){
        console.log('THIS IS A MODAL');
        this.resetGameState();
    }

    getStandings(){
        return this.players.sort((a, b) => (b.cardsTaken > a.cardsTaken) ? 1: -1);
    }


}