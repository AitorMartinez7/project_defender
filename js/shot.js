class Shot {
    constructor(ctx, turretPosX, turretPosY, turretWidth, turretHeight, CanvasHeight, imgName) {
        this.ctx = ctx
        this.position = {
            x: turretPosX + 16,
            y: turretPosY - 40
        }
        this.size = {
            width: turretWidth / 3,
            height: turretHeight /2
        }
        this.maxRange = CanvasHeight
        this.img = new Image()
        this.img.src = `img/${imgName}`
    }

    draw() {
        this.ctx.drawImage(this.img, this.position.x, this.position.y, this.size.width, this.size.height)
        this.move()
    }

    move() {
        this.position.y -= 5
    }
}