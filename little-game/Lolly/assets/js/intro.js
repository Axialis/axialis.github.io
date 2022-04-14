
export default class Intro
{
    constructor()
    {
        this.image = new Image();
        this.image.src = './assets/img/atribute/enter-button.png';
        this.x = 0;
        this.y = 0;
        this.width = 1875 / 10;
        this.height = 2000 / 10;
    }

    drawIntroScreen(width, height)
    {
        ctx.rect(this.x, this.y, width, height);
        ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
        ctx.textAlign = "center";
        ctx.fillText(`Jump and collect candy so`, width/2, height - 600);
        ctx.fillText(`you don't get chased by a ghost!`, width/2, height - 550);
        ctx.fillText(`If you're ready, press "ENTER"`, width/2, height - 500);
        ctx.drawImage(this.image, width/2.5, height/2.5, this.width, this.height)
        ctx.fillText(`Press "SPACE" for JUMP!`, width/2, height - 100);
    }
}