let comp = null;
let player = null
let res = null
const result =
    JSON.parse((localStorage.getItem('shubham')))
    || {
        win: 0,
        lose: 0,
        draw: 0
    };








function computer_selected() {
    let comp1 = Math.random();
    // console.log(comp1);
    if (comp1 <= (1 / 3)) {
        comp = 'rock';
    }
    else if ((comp1 > (1 / 3)) && (comp1 <= (2 / 3))) {
        comp = 'paper';
    }
    else {
        comp = 'scissors'
    }
    // console.log(comp);
}
// console.log(lose);
function game_result(player) {
    if (player === comp) {
        res = 'draw!';
    }
    else {
        if ((player === 'rock') && (comp === 'paper')) {
            res = 'you lose!';
        } if ((player === 'rock') && (comp === 'scissors')) {
            res = 'you win!';
        } if ((player === 'paper') && (comp === 'rock')) {
            res = 'you win!';
        } if ((player === 'paper') && (comp === 'scissors')) {
            res = 'you lose!';
        } if ((player === 'scissors') && (comp === 'paper')) {
            res = 'you win!';
        } if ((player === 'scissors') && (comp === 'rock')) {
            res = 'you lose!';
        }
    }

    if (res === 'you win!') {
        result.win = result.win + 1;
    }
    if (res === 'you lose!') {
        result.lose = result.lose + 1;
    }
    if (res === 'draw!') {
        result.draw = result.draw + 1;
    }
    localStorage.setItem('shubham', (JSON.stringify(result)));
    document.querySelector('.game1').innerHTML = `${res}`;
    document.querySelector('.game2').
        innerHTML = `You
        <img src="${player}-emoji.png" class="img">
        <img src="${comp}-emoji.png" class="img">
        computer`;


    document.querySelector('.game').innerHTML = `draw ${result.draw}, win ${result.win} and lose ${result.lose}`;
    // console.log(`draw ${result.draw}, win ${result.win} and lose ${result.lose}`);

}
function reset() {

    if ((result.win === 0) && (result.lose === 0) && (result.draw === 0)) {
        alert('you did played once !');

        document.querySelector('.game').innerHTML = `draw ${result.draw}, win ${result.win} and lose ${result.lose}`;
        document.querySelector('.reset1-button').classList.remove('reset2-button');

    }
    else {
        result.win = 0;
        result.lose = 0;
        result.draw = 0;
        localStorage.removeItem('shubham');
        document.querySelector('.game').innerHTML = `draw ${result.draw}, win ${result.win} and lose ${result.lose}`;
        document.querySelector('.reset1-button').classList.add('reset2-button');

    }
}
// let game1 = document.querySelector('game').innerHTML='`draw ${result.draw}, win ${result.win} and lose ${result.lose}`';


