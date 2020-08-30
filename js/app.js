const game = {
    name: "Ironhack Defender",
    description: "Defense videogame",
    version: "0.2",
    authors: "Aitor Martinez & Oliver Blanco",
    license: undefined,
    canvas: undefined,
    ctx: undefined,
    framesCounter: 0,
    FPS: 60,
    turret: undefined,
    shot: undefined,
    missiles: [],
    parachutes: [],
    pointsCounter: 0,
    lifesCounter: 5,
    background: undefined,
    canvasSize: {
        w: 900,
        h: 500,
    },
    init() {
        this.canvas = document.querySelector("canvas");
        this.ctx = canvas.getContext("2d");
        this.setDimensions();
        this.start();
        this.setEventListeners()
    },
    setDimensions() {
        this.canvas.setAttribute("width", this.canvasSize.w);
        this.canvas.setAttribute("height", this.canvasSize.h);
    },

    start() {
        this.reset()
        setInterval(() => {
            if (this.framesCounter > 5000) {
                this.framesCounter = 0
            } else {
                this.framesCounter++
            }
            this.clear()
            this.drawAll()
            this.drawCounters()
            this.generateDrops()
            this.clearDrops()
            this.missilesColission()
            this.parachutesColission()
        }, 1000 / this.FPS);
    },
  
    drawAll() {
        this.background.draw()
        this.turret.draw()
        this.missiles.forEach(elm => elm.draw())
        this.parachutes.forEach(elm => elm.draw())
    },

    drawCounters() {
        document.querySelector(".points").innerHTML = this.pointsCounter
        document.querySelector(".lifes").innerHTML = this.lifesCounter
    },

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    },

    generateDrops() {
        if (this.framesCounter % 180 === 0) {
            this.missiles.push(new Missile(this.ctx, this.canvasSize.w, this.canvasSize.h, 1, 10, "missile.png"))

        }
        if (this.framesCounter % 500 === 0) {
            this.parachutes.push(new Parachute(this.ctx, this.canvasSize.w, this.canvasSize.h, 1, 50, "parachute.png"))
        }
    },

    clearDrops() {
        this.missiles.forEach(elm => {
            if (elm.position.y >= 470) {
                this.lifesCounter--
                // elm.imgName = "groundExplosion.png"
            }
        })
        this.missiles = this.missiles.filter(miss => miss.position.y < 470)

        this.parachutes.forEach(elm => {
            if (elm.position.y === 450) {
                this.pointsCounter += elm.points
                console.log(this.pointsCounter)
            }
        })
        this.parachutes = this.parachutes.filter(para => para.position.y <= 450)
    },

    reset() {
        this.turret = new Turret(this.ctx, this.canvasSize.w / 2, this.canvasSize.h - 110, this.canvasSize.w, this.canvasSize.h, "turret.png");
        this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h, "gameBackground.jpeg")
    }, 

    collision(elm1, elm2) {
        if (elm1.position.x < elm2.position.x + elm2.size.width &&
            elm1.position.x + elm1.size.width > elm2.position.x &&
            elm1.position.y < elm2.position.y + elm2.size.height &&
            elm1.position.y + elm1.size.height > elm2.position.y) {
            return true
        }
    },

    missilesColission() { 
        this.turret.shots.forEach(elm2 => {
            this.missiles.forEach(elm1 => {
                if (this.collision(elm1, elm2) === true) {
                    // elm1.imgName = "airExplosion.png"
                    const elm1Index = this.missiles.indexOf(elm1)
                    this.missiles.splice(elm1Index, 1)
                    const elm2Index = this.turret.shots.indexOf(elm2)
                    this.turret.shots.splice(elm2Index, 1)
                    this.pointsCounter += elm1.points
                }
            })
        })
    },

    parachutesColission() {
        this.turret.shots.forEach(elm2 => {
            this.parachutes.forEach(elm1 => {
                if (this.collision(elm1, elm2) === true) {
                    const elm1Index = this.parachutes.indexOf(elm1)
                    this.parachutes.splice(elm1Index, 1)
                    const elm2Index = this.turret.shots.indexOf(elm2)
                    this.turret.shots.splice(elm2Index, 1)
                    this.lifesCounter--
                    console.log(this.lifesCounter)
                }
            })
        })
    },

    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === 37 ? this.turret.move('left') : null
            e.keyCode === 39 ? this.turret.move('right') : null
        }
        document.addEventListener("keyup", e => {
            e.keyCode === 32 ? this.turret.shoot() : null
        });
    },
};
