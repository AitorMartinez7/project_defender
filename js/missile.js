class Missile {
    constructor(ctx, canvasWidth, canvasHeight, positionY, imgName) {
        this.ctx = ctx
        this.canvasSize = {
            width: canvasWidth,
            height: canvasHeight
        }
        this.position = {
            x: [],
            y: positionY
        }
        this.img = new Image()
        this.img.src = `img/${imgName}`
    }
    
}