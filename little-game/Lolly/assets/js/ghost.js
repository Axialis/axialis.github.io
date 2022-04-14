let frameCount = 0;

export default class Ghost {
    constructor() {
        this.image = new Image();
        this.image.src = './assets/img/ghost/merge_ghost.png';
        this.x = 10;
        this.y = 400;
        this.spriteWidth = 396;
        this.spriteHigth = 582;
        this.heigth = this.spriteHigth / 2.8;
        this.width = this.spriteWidth / 2.8;
        this.frame = 0;
    }
    update() {

        if (frameCount % 2 === 0) {
            this.frame > 9 ? this.frame = 0 : this.frame++;
        }

    }
    draw() {
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHigth, this.x, this.y, this.width, this.heigth);
        frameCount++;
    }
}