import {Entity} from './entity.js';

export class Repo{

    static getEntities(arr){
        let entities = [];
        arr.forEach((s, index) => entities.push(new Entity(s, index)));
        return entities;
    }

    static getCards(){
        let syllables = ['ΜΟ', 'ΜΟΥ', 'ΙΜΙ', 'ΛΟ', 'ΞΟ'];
        return this.getEntities(syllables);
    }

    static getSides(){
        let sideText = ['Tick', 'Tack', 'Boom'];
        return this.getEntities(sideText);
    }
}