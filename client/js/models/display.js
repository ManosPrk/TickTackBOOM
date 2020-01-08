
export class Display{
    constructor(){
        
    }

    getPlayerInputElement(){
        let arr = [];
        for (let i = 0; i > 8; i++){
            let input = document.createElement('input');
            input.id = i;
            arr.push(input);
        }
        return arr;
    }
}