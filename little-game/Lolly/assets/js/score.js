export default class Score {
    constructor() {
        this.score = 0;
        this.x = 100;
        this.y = 670;
    }

    update() {
        this.score++;
    }

    drawText() {
        ctx.fillStyle = "white";
        ctx.fillText(`Score: ${this.score}`, this.x, this.y);
    }

    setScore(row, score) {
        localStorage.setItem(`score${row}`, `${score}`);
    }

    getScore(row) {
        const value = localStorage.getItem(`score${row}`);
        return value;
    }


    scoreTable(x) {
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.font = "60px AlfaSlabOne";
        ctx.fillStyle = `rgba(0, 0, 0, .6)`;
        ctx.rect(0, 0, 1200, 700);
        ctx.fill();
        ctx.fillStyle = "white"
        ctx.fillText(`GAME OVER`, x / 2, 500);
        ctx.font = "25px AlfaSlabOne";
        for (let i = 0; i < 10; i++) {
            ctx.fillText(`${i + 1}:`, x / 2.4, 40 * (i + 1));
            if (this.getScore(`${i}`) != `null`) {
                ctx.fillText(`${this.getScore(i)}`, x / 1.7, 40 * (i + 1));
            } else {
                ctx.fillText(`0`, x / 1.7, 40 * (i + 1));
            }
        }
        ctx.fillText(`Try again?`, x / 2, 580);
        ctx.fillText(`Press "ENTER"`, x / 2, 620);        
    }
}

