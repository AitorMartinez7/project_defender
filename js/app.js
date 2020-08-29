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
            this.generateDrops()
            this.clearDrops()
        }, 1000 / this.FPS);
    },
  
    drawAll() {
        this.background.draw()
        this.turret.draw()
        this.missiles.forEach(elm => elm.draw())
        this.parachutes.forEach(elm => elm.draw())
    },

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    },

    generateDrops() {
        if (this.framesCounter % 200 === 0) {
            this.missiles.push(new Missile(this.ctx, this.canvasSize.w, this.canvasSize.h, "missile.png"))
            console.log(this.missiles)
        }
        if (this.framesCounter % 500 === 0) {
            this.parachutes.push(new Parachute(this.ctx, this.canvasSize.w, this.canvasSize.h, "parachute.png"))
        }
    },

    clearDrops() {
        this.missiles = this.missiles.filter(miss => miss.position.y <= 500)
        this.parachutes = this.parachutes.filter(para => para.position.y <= 500)
    },

    reset() {
        this.turret = new Turret(this.ctx, this.canvasSize.w / 2, this.canvasSize.h - 110, this.canvasSize.w, this.canvasSize.h, "turret.png");
        this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h, "gameBackground.jpeg")
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
