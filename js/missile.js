class Missile {
    constructor(ctx, canvasWidth, canvasHeight, speed, points, damage, imgName) {
        this.ctx = ctx
        this.position = {
            x: Math.floor(860 * Math.random()),
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

        this.damage = damage
        this.speed = speed
        this.points = points
    }

    move() {
        this.position.y += this.speed
    }

    draw() {
        this.ctx.drawImage(this.img, this.position.x, this.position.y, this.size.width, this.size.height)
        this.move()
    }
}