import { Test } from "./test/testRepo.js";
import { Dice } from "./models/dice.js";
import { Game } from "./models/game.js";
import { Player } from "./models/player.js";

class Main{
    constructor(){
        this.players = [new Player('takis', 0), new Player('maria', 1), new Player('giorgos', 2)];
        this.players[0].cardsTaken = 5;
        this.players[1].cardsTaken = 8;
        let game = new Game(this.players);
    }
}

let main = new Main();

