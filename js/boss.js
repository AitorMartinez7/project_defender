class Boss {
    constructor(ctx, canvasWidth, canvasHeight, speed, imgName) {
        this.ctx = ctx
        this.position = {
            x: Math.floor(800 * Math.random()),
            y: 0
        }
        this.size = {
            width: 30,
            height: 60
        }
        this.canvasSize = {
            width: canvasWidth,
            height: canvasHeight
        }

        this.img = new Image()
        this.img.src = `img/${imgName}`
        
        this.lifesCounter = 30
        this.speed = speed
    }

    move() {
        this.position.y += this.speed
    }

    draw() {
        this.ctx.drawImage(this.img, this.position.x, this.position.y, this.size.width, this.size.height)
        this.move()
    }
}