class Turret {
    constructor(ctx, posX, posY, canvasWidth, canvasHeight, imgName) {
        this.ctx = ctx
        this.turretPos = {
            x: posX,
            y: posY
        }
        this.turretSize = {
            width: 50,
            height: 100
        }
        this.canvasSize = {
            width: canvasWidth,
            height: canvasHeight
        }
        this.img = new Image()
        this.img.src = `img/${imgName}`

        this.shots = []
        // this.setListeners()
    }
    
    move(dir) {
        if (dir === 'left' && this.turretPos.x >= 10) {
            this.turretPos.x -= 10
        } else if (dir === 'right' && this.turretPos.x <= this.canvasSize.width - 60) {
            this.turretPos.x += 10
        } else {
            null
        }

    }

    // setListeners() {
    //     document.addEventListener("keyup", e => {
    //         e.keyCode === 32 ? this.shoot() : null
    //     });
    // }

    draw() {
        this.ctx.drawImage(this.img, this.turretPos.x, this.turretPos.y, this.turretSize.width, this.turretSize.height)
        this.shots.forEach(elm => elm.draw())
        this.clearShots()
    }

    shoot() {
        this.shots.push(new Shot(this.ctx, this.turretPos.x, this.turretPos.y, this.turretSize.width, this.turretSize.height, this.canvasSize.height, "turretShot.png"))
    }

    clearShots() {
        this.shots = this.shots.filter(shot => shot.position.y >= -10)
    }
}