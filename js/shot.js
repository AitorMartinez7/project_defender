class Shot {
    constructor(ctx, turretPosX, turretPosY, turretWidth, turretHeight, CanvasHeight, imgName) {
        this.ctx = ctx
        this.position = {
            x: turretPosX + 16,
            y: turretPosY - 40
        }
        this.shotSize = {
            width: turretWidth / 3,
            height: turretHeight /2
        }
        this.maxRange = CanvasHeight
        this.img = new Image()
        this.img.src = `img/${imgName}`
    }

    draw() {
        this.ctx.drawImage(this.img, this.position.x, this.position.y, this.shotSize.width, this.shotSize.height)
        this.move()
    }

    move() {
        this.position.y -= 5
    }
}