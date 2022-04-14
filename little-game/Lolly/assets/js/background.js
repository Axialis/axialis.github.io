
export default class Layer {
    constructor(image, speedMod) {
        this.x = 0;
        this.y = 0;
        this.width = 1919;
        this.heigth = 700;
        this.x2 = this.width;
        this.image = image;
        this.speedMod = speedMod;
        this.speed = gameSpeed * this.speedMod;
    }

    update() {
        this.speed = gameSpeed * this.speedMod;
        if (this.x <= -this.width) {
            this.x = this.width + this.x2 - this.speed;
        }
        if (this.x2 <= -this.width) {
            this.x2 = this.width + this.x - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.heigth);
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.heigth);
    }
}

globalThis.backgroundLayer1 = new Image();
backgroundLayer1.src = './assets/img/background/10_Sky.png'
globalThis.backgroundLayer2 = new Image();
backgroundLayer2.src = './assets/img/background/09_Forest.png'
globalThis.backgroundLayer3 = new Image();
backgroundLayer3.src = './assets/img/background/08_Forest.png'
globalThis.backgroundLayer4 = new Image();
backgroundLayer4.src = './assets/img/background/07_Forest.png'
globalThis.backgroundLayer5 = new Image();
backgroundLayer5.src = './assets/img/background/06_Forest.png'
globalThis.backgroundLayer6 = new Image();
backgroundLayer6.src = './assets/img/background/05_Particles.png'
globalThis.backgroundLayer7 = new Image();
backgroundLayer7.src = './assets/img/background/04_Forest.png'
globalThis.backgroundLayer8 = new Image();
backgroundLayer8.src = './assets/img/background/03_Particles.png'
