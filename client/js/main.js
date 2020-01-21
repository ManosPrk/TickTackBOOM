import { Test } from "./test/testRepo.js";
import { Dice } from "./models/dice.js";
import { Game } from "./models/game.js";
import { Player } from "./models/player.js";
import { Common } from "./common/common.js";


export class Main{
    constructor(){
        this.players = [];
        let arr = JSON.parse(Common.getCookie('players-data'));
        // let arr = Object.values(formData);
        console.log(arr);
        arr.filter(name => name !== '')
            .forEach((player, index) => this.players.push(new Player(player, index)));
        // playersInput.forEach(p => console.log(p));
        // this.players = [new Player('Takis', 0), new Player('Maria', 1), new Player('Giorgos', 2), new Player('Kona', 3), 
        //                 new Player('Christina', 4), new Player('Stergios', 5), new Player('Manos', 6), new Player('Antonia', 7)];
        let game = new Game(this.players);
        
        // console.log(playersInput);
    }
}

let main = new Main();