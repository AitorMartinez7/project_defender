class Background {
    constructor(ctx, canvasWidth, canvasHeight, imgName) {
        this.ctx = ctx
        this.backgroundSize = {
            width: canvasWidth,
            height: canvasHeight
        }
        this.img = new Image()
        this.img.src = `img/${imgName}`
    }

    draw() {
        this.ctx.drawImage(this.img, 0, 0, this.backgroundSize.width, this.backgroundSize.height)
    }
}