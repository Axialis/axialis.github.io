let frameRun = 0;

export default class Girl {
    constructor() {
        this.imageRun = new Image();
        this.imageJump = new Image();
        this.imageDead = new Image();
        this.imageRun.src = './assets/img/girl/run.png';
        this.imageJump.src = './assets/img/girl/jump.png';
        this.imageDead.src = './assets/img/girl/dead.png';
        this.x = 300;
        this.y = 450;
        this.flag = true;

        this.groundLevel = 250;

        this.jumpHight = 25;
        this.vy = this.jumpHight;


        this.widthFrame = 145;
        this.heigthFrame = 165;

        this.widthFrameJump = 160;
        this.higthFrameJump = 180;

        this.widthFrameDead = 160;
        this.heigthFrameDead = 180;


        this.width = this.widthFrame;
        this.heigth = this.heigthFrame;

        this.widthJump = this.widthFrameJump;
        this.heigthJump = this.higthFrameJump;

        this.widthDead = this.widthFrameDead;
        this.heigthDead = this.heigthFrameDead;

        this.frameRun = 0;
        this.frameJump = 0;
        this.frameDead = 0;
    }


    jump() {
        if (this.flag == true) {
            this.frameJump = 0;
            this.jumpUp()
        }
        else if (this.flag == false) {
            this.jumpDown()
        }
    }

    jumpUp() {
        if (this.vy > -1) {
            this.y = this.y - this.vy;
            this.vy--;

        } else {
            this.vy = 0;
            this.frameJump = 1;
            this.flag = false;
        }
    }

    jumpDown() {
        if (this.vy < this.jumpHight + 1) {
            this.y = this.y + this.vy;
            this.vy++;

        } else {
            this.vy = this.jumpHight;
            this.flag = true;
            keyboard = ''
        }
    }

    drawRun() {
        ctx.drawImage(this.imageRun,
            this.frameRun * this.widthFrame,
            0,
            this.widthFrame,
            this.heigthFrame,
            this.x,
            this.y,
            this.width,
            this.heigth);

        if (frameRun % 7 === 0) {
            this.frameRun > 4 ? this.frameRun = 0 : this.frameRun++;
        }
        frameRun++;
    }

    drawJump() {
        ctx.drawImage(this.imageJump,
            this.frameJump * this.widthFrameJump,
            0,
            this.widthFrameJump,
            this.higthFrameJump,
            this.x,
            this.y,
            this.widthJump,
            this.heigthJump);
    }

    drawDead() {
        ctx.drawImage(this.imageDead,
            this.frameDead * this.widthFrameDead,
            0,
            this.widthFrameDead,
            this.heigthFrameDead,
            this.x,
            this.y,
            this.widthDead,
            this.heigthDead);
            this.frameDead = 1;
    }
}


    
    