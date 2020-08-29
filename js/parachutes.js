class Parachute {
    constructor(ctx, canvasWidth, canvasHeight, imgName) {
        this.ctx = ctx
        this.position = {
            x: Math.floor(800 * Math.random()),
            y: 0
        }
        this.parachuteSize = {
            width: 30,
            height: 60
        }
        this.canvasSize = {
            width: canvasWidth,
            height: canvasHeight
        }

        this.img = new Image()
        this.img.src = `img/${imgName}`
    }

    move() {
        this.position.y += 1
    }

    draw() {
        this.ctx.drawImage(this.img, this.position.x, this.position.y, this.parachuteSize.width, this.parachuteSize.height)
        this.move()
    }
}