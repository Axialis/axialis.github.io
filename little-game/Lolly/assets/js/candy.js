export default class Candy {
    constructor() {
        this.image = new Image();
        this.image.src = './assets/img/atribute/candy.png';
        this.x = 0;
        this.y = 300;
        this.width = 503 / 5;
        this.height = 496 / 5;
        this.angle = 0;
        this.speed = 0.1;
    }

    update(x, y) {
        this.x = x;
        this.y = y + Math.sin(this.angle) * 10;
        this.angle = this.angle + this.speed;
    }

    draw() {
        ctx.drawImage(this.image,
            this.x,
            this.y,
            this.width,
            this.height);
    }
}