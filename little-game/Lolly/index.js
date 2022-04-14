/**@type {HTMLCanvasElement} */
import Ghost from "./assets/js/ghost.js";
import Candy from "./assets/js/candy.js";
import Girl from "./assets/js/gerl.js";
import Layer from "./assets/js/background.js";
import Score from "./assets/js/score.js";
import Intro from "./assets/js/intro.js";
import TextScramble from "./assets/js/loading.js";

let score = [];

//------------LOADING SCREEN----------------------

const phrases = [
    'LOADING',
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
    if (counter < phrases.length) {
        fx.setText(phrases[counter]).then(() => {
            setTimeout(next, 800)
        })
        counter = (counter + 1)
    }
}

next();

const hero = new Girl();
const lolypop = new Candy();
const enemy = new Ghost();
const text = new Score();
const intro = new Intro();

const canvas = document.getElementById('canvas1');
const CANVAS_WIDTH = canvas.width = 1200;
const CANVAS_HEIGTH = canvas.heigth = 700;

let gameStatusFlag = 0;

globalThis.ctx = canvas.getContext('2d');
globalThis.gameSpeed = 5;
globalThis.keyboard = '';

ctx.font = "30px AlfaSlabOne";

function preloadGameScore()
{
    for(let i = 0; i<10; i++)
    {
        if(text.getScore(i) === null || text.getScore(i) === `null`)
        {

        }
        else
        {
            score[i] = text.getScore(i);            
        }
    }
}

//----------------LOAD AUDIO----------------------------

const bgAudio = new Audio();
bgAudio.src = './assets/audio/Main-theme.wav';

const pickUpCandy = new Audio();
pickUpCandy.src = './assets/audio/Pickup-candy.wav';

const gameOverAudio = new Audio();
gameOverAudio.src = './assets/audio/Game-over.mp3';

function playAudio() {
    bgAudio.play();
}

function playCandyAudio() {
    pickUpCandy.play();
}

function playGameOver() {
    gameOverAudio.play();
}

gameOverAudio.addEventListener("ended", function () {
    stopGameOver();
});

function stopGameOver() {
    gameOverAudio.currentTime = 0;
}
//----------------KEYBOARD HANDLER----------------------

const jmp = window.addEventListener('keydown', (el) => {
    if (el.key == ' ') {
        keyboard = ' ';
    }
})

const enter = window.addEventListener('keydown', (el) => {
    if (el.key == 'Enter') {
        if (gameStatusFlag == 0) {
            gameStatusFlag = 1;
        }
        if (gameStatusFlag == 3) {
            gameStatusFlag = 4;
        }
    }
})
//------------RANDOMIZER Y POSITION----------------------

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


let xpos = 1250;
let ypos = getRandomArbitrary(400, 300)


//-------------LOLLYPOP ANIMATION----------------------

function lollypopsMotion(speed) {
    lolypop.update(xpos, ypos);
    xpos = xpos - speed;
    if (xpos < -100) {
        xpos = 1250;
        ypos = getRandomArbitrary(400, 150);
        enemy.x = enemy.x + 50;
    }
    if (collisionDetection() == true) {
        playCandyAudio();
        text.update();
        xpos = 1250;
        ypos = getRandomArbitrary(400, 250);
        gameSpeed += 0.5;
    }
}

//----------------COLLISION DETECT----------------------

function collisionDetection() {
    const heroR = { radius: 70 };
    const candyR = { radius: 30 };
    let dx = Math.abs(hero.x + 50 - lolypop.x);
    let dy = Math.abs(hero.y - lolypop.y);
    let distance = Math.sqrt(dx * dx + dy * dy);
    let sumOfRad = heroR.radius + candyR.radius;
    collisionEnemyHero();
    if (sumOfRad > distance) {
        return true;
    } else {
        return false;
    }
}

function collisionEnemyHero() {
    const heroR = { radius: 70 };
    const ghostR = { radius: 30 };
    let dx = Math.abs(hero.x + 50 - enemy.x);
    let dy = Math.abs(hero.y - enemy.y);
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 130) {

        if (score.length < 10) {
            score.push(text.score);
            // score.sort((a, b) => b - a);
        } else {
            score.shift();
            score.push(text.score);
            // score.sort((a, b) => b - a);
        }
        for (let i = 0; i < 10; i++) {
            if (score[i] === undefined) {
                text.setScore(i, `null`);
            } else {
                text.setScore(i, score[i]);
            }
        }
        gameStatusFlag = 2;
    }
}


const Layer1 = new Layer(backgroundLayer1, 0.1);
const Layer2 = new Layer(backgroundLayer2, 0.2);
const Layer3 = new Layer(backgroundLayer3, 0.3);
const Layer4 = new Layer(backgroundLayer4, 0.35);
const Layer5 = new Layer(backgroundLayer5, 0.4);
const Layer6 = new Layer(backgroundLayer6, 0.45);
const Layer7 = new Layer(backgroundLayer7, 0.5);
const Layer8 = new Layer(backgroundLayer8, 0.7);
const layerObjects = [Layer1, Layer2, Layer3, Layer4, Layer5, Layer6, Layer7, Layer8]


//----------------RESET GAME---------------------------

function resetGame() {
    gameSpeed = 5;
    enemy.x = 10;
    text.score = 0;
    gameStatusFlag = 1;
}

//----------------MAIN ANIMATION----------------------



function animation() {
    preloadGameScore();
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGTH);
    if (gameStatusFlag == 0) {
        intro.drawIntroScreen(CANVAS_WIDTH, CANVAS_HEIGTH);
    }

    if (gameStatusFlag == 1) {
        playAudio();
        layerObjects.forEach(lay => {
            lay.update();
            lay.draw();
        });
        enemy.update();
        enemy.draw();
        if (keyboard == '') {
            hero.drawRun();
        } else if (keyboard == ' ') {
            hero.jump();
            hero.drawJump();
        }
        text.drawText();
        lollypopsMotion(gameSpeed);
        lolypop.draw();
    }
    if (gameStatusFlag == 2) {
        playGameOver();
        gameStatusFlag = 3;
    }

    if (gameStatusFlag == 3) {
        layerObjects.forEach(lay => {
            lay.draw();
        });
        enemy.draw();
        hero.drawDead();
        text.scoreTable(CANVAS_WIDTH);
    }

    if (gameStatusFlag == 4) {
        resetGame();
    }
    requestAnimationFrame(animation);
}


window.addEventListener("load", () => {
    document.querySelector('.container').remove();
    animation();
});

