const context = (document.getElementById("board") as HTMLCanvasElement).getContext("2d");
const timerCanvas = (document.getElementById("timer") as HTMLCanvasElement).getContext("2d");


const brick1: HTMLImageElement = new Image();
brick1.src = './sprites/brick1.png';
const brick2: HTMLImageElement = new Image();
brick2.src = './sprites/brick2.png';
const brick3: HTMLImageElement = new Image();
brick3.src = './sprites/brick3.png';
const brick4: HTMLImageElement = new Image();
brick4.src = './sprites/brick4.png';
const brick5: HTMLImageElement = new Image();
brick5.src = './sprites/brick5.png';
const brick6: HTMLImageElement = new Image();
brick6.src = './sprites/brick6.png';

const wall: HTMLImageElement = new Image();
wall.src = './sprites/wall.png';
const down1: HTMLImageElement = new Image()
down1.src = "./sprites/down1.png"
const down2: HTMLImageElement = new Image()
down2.src = "./sprites/down2.png"
const down3: HTMLImageElement = new Image()
down3.src = "./sprites/down3.png"

const up1: HTMLImageElement = new Image()
up1.src = "./sprites/up1.png"
const up2: HTMLImageElement = new Image()
up2.src = "./sprites/up2.png"
const up3: HTMLImageElement = new Image()
up3.src = "./sprites/up3.png"

const left1: HTMLImageElement = new Image()
left1.src = "./sprites/left1.png"
const left2: HTMLImageElement = new Image()
left2.src = "./sprites/left2.png"
const left3: HTMLImageElement = new Image()
left3.src = "./sprites/left3.png"

const right1: HTMLImageElement = new Image()
right1.src = "./sprites/right1.png"
const right2: HTMLImageElement = new Image()
right2.src = "./sprites/right2.png"
const right3: HTMLImageElement = new Image()
right3.src = "./sprites/right3.png"

const bomb1: HTMLImageElement = new Image()
bomb1.src = "./sprites/bomb1.png"
const bomb2: HTMLImageElement = new Image()
bomb2.src = "./sprites/bomb2.png"
const bomb3: HTMLImageElement = new Image()
bomb3.src = "./sprites/bomb3.png"

const xCenter1: HTMLImageElement = new Image()
xCenter1.src = "./sprites/xCenter1.png"
const xCenter2: HTMLImageElement = new Image()
xCenter2.src = "./sprites/xCenter2.png"
const xCenter3: HTMLImageElement = new Image()
xCenter3.src = "./sprites/xCenter3.png"
const xCenter4: HTMLImageElement = new Image()
xCenter4.src = "./sprites/xCenter4.png"

const xCenterTab: HTMLImageElement[] = [xCenter1, xCenter2, xCenter3, xCenter4, xCenter3, xCenter2, xCenter1]

const xDown1: HTMLImageElement = new Image()
xDown1.src = "./sprites/xDown1.png"
const xDown2: HTMLImageElement = new Image()
xDown2.src = "./sprites/xDown2.png"
const xDown3: HTMLImageElement = new Image()
xDown3.src = "./sprites/xDown3.png"
const xDown4: HTMLImageElement = new Image()
xDown4.src = "./sprites/xDown4.png"

const xDownTab: HTMLImageElement[] = [xDown1, xDown2, xDown3, xDown4, xDown3, xDown2, xDown1]

const xUp1: HTMLImageElement = new Image()
xUp1.src = "./sprites/xUp1.png"
const xUp2: HTMLImageElement = new Image()
xUp2.src = "./sprites/xUp2.png"
const xUp3: HTMLImageElement = new Image()
xUp3.src = "./sprites/xUp3.png"
const xUp4: HTMLImageElement = new Image()
xUp4.src = "./sprites/xUp4.png"

const xUpTab: HTMLImageElement[] = [xUp1, xUp2, xUp3, xUp4, xUp3, xUp2, xUp1]

const xLeft1: HTMLImageElement = new Image()
xLeft1.src = "./sprites/xLeft1.png"
const xLeft2: HTMLImageElement = new Image()
xLeft2.src = "./sprites/xLeft2.png"
const xLeft3: HTMLImageElement = new Image()
xLeft3.src = "./sprites/xLeft3.png"
const xLeft4: HTMLImageElement = new Image()
xLeft4.src = "./sprites/xLeft4.png"

const xLeftTab: HTMLImageElement[] = [xLeft1, xLeft2, xLeft3, xLeft4, xLeft3, xLeft2, xLeft1]

const xRight1: HTMLImageElement = new Image()
xRight1.src = "./sprites/xRight1.png"
const xRight2: HTMLImageElement = new Image()
xRight1.src = "./sprites/xRight1.png"
const xRight3: HTMLImageElement = new Image()
xRight3.src = "./sprites/xRight3.png"
const xRight4: HTMLImageElement = new Image()
xRight4.src = "./sprites/xRight4.png"

const xRightTab: HTMLImageElement[] = [xRight1, xRight2, xRight3, xRight4, xRight3, xRight2, xRight1]

const xVertical1: HTMLImageElement = new Image()
xVertical1.src = "./sprites/xVertical1.png"
const xVertical2: HTMLImageElement = new Image()
xVertical2.src = "./sprites/xVertical2.png"
const xVertical3: HTMLImageElement = new Image()
xVertical3.src = "./sprites/xVertical3.png"
const xVertical4: HTMLImageElement = new Image()
xVertical4.src = "./sprites/xVertical4.png"

const xVerticalTab: HTMLImageElement[] = [xVertical1, xVertical2, xVertical3, xVertical4, xVertical3, xVertical2, xVertical1]

const xHorizontal1: HTMLImageElement = new Image()
xHorizontal1.src = "./sprites/xHorizontal1.png"
const xHorizontal2: HTMLImageElement = new Image()
xHorizontal2.src = "./sprites/xHorizontal2.png"
const xHorizontal3: HTMLImageElement = new Image()
xHorizontal3.src = "./sprites/xHorizontal3.png"
const xHorizontal4: HTMLImageElement = new Image()
xHorizontal4.src = "./sprites/xHorizontal4.png"

const xHorizontalTab: HTMLImageElement[] = [xHorizontal1, xHorizontal2, xHorizontal3, xHorizontal4, xHorizontal3, xHorizontal2, xHorizontal1]

const dead1: HTMLImageElement = new Image()
dead1.src = "./sprites/dead1.png"
const dead2: HTMLImageElement = new Image()
dead2.src = "./sprites/dead2.png"
const dead3: HTMLImageElement = new Image()
dead3.src = "./sprites/dead3.png"
const dead4: HTMLImageElement = new Image()
dead4.src = "./sprites/dead4.png"
const dead5: HTMLImageElement = new Image()
dead5.src = "./sprites/dead5.png"
const dead6: HTMLImageElement = new Image()
dead6.src = "./sprites/dead6.png"
const dead7: HTMLImageElement = new Image()
dead7.src = "./sprites/dead7.png"
const dead8: HTMLImageElement = new Image()
dead8.src = "./sprites/dead8.png"

const deathTab = [dead1, dead2, dead3, dead4, dead5, dead6, dead7, dead8]

const enemy1left1: HTMLImageElement = new Image()
enemy1left1.src = "./sprites/enemy1left1.png"
const enemy1left2: HTMLImageElement = new Image()
enemy1left2.src = "./sprites/enemy1left2.png"
const enemy1left3: HTMLImageElement = new Image()
enemy1left3.src = "./sprites/enemy1left3.png"

const enemy1leftTab: HTMLImageElement[] = [enemy1left1, enemy1left2, enemy1left3, enemy1left2]

const enemy2left1: HTMLImageElement = new Image()
enemy2left1.src = "./sprites/enemy2left1.png"
const enemy2left2: HTMLImageElement = new Image()
enemy2left2.src = "./sprites/enemy2left2.png"
const enemy2left3: HTMLImageElement = new Image()
enemy2left3.src = "./sprites/enemy2left3.png"

const enemy2leftTab: HTMLImageElement[] = [enemy2left1, enemy2left2, enemy2left3, enemy2left2]
const enemyleftTab: HTMLImageElement[][] = [enemy1leftTab, enemy2leftTab]

const enemy1right1: HTMLImageElement = new Image()
enemy1right1.src = "./sprites/enemy1right1.png"
const enemy1right2: HTMLImageElement = new Image()
enemy1right2.src = "./sprites/enemy1right2.png"
const enemy1right3: HTMLImageElement = new Image()
enemy1right3.src = "./sprites/enemy1right3.png"

const enemy1rightTab: HTMLImageElement[] = [enemy1right1, enemy1right2, enemy1right3, enemy1right2]

const enemy2right1: HTMLImageElement = new Image()
enemy2right1.src = "./sprites/enemy2right1.png"
const enemy2right2: HTMLImageElement = new Image()
enemy2right2.src = "./sprites/enemy2right2.png"
const enemy2right3: HTMLImageElement = new Image()
enemy2right3.src = "./sprites/enemy2right3.png"

const enemy2rightTab: HTMLImageElement[] = [enemy2right1, enemy2right2, enemy2right3, enemy2right2]
const enemyrightTab: HTMLImageElement[][] = [enemy1rightTab, enemy2rightTab]

const superEnemyRight1: HTMLImageElement = new Image()
superEnemyRight1.src = "./sprites/superEnemyRight1.png"
const superEnemyRight2: HTMLImageElement = new Image()
superEnemyRight2.src = "./sprites/superEnemyRight2.png"
const superEnemyRight3: HTMLImageElement = new Image()
superEnemyRight3.src = "./sprites/superEnemyRight3.png"

const superEnemyRightTab: HTMLImageElement[] = [superEnemyRight1, superEnemyRight2, superEnemyRight3, superEnemyRight2]

const superEnemyLeft1: HTMLImageElement = new Image()
superEnemyLeft1.src = "./sprites/superEnemyLeft1.png"
const superEnemyLeft2: HTMLImageElement = new Image()
superEnemyLeft2.src = "./sprites/superEnemyLeft2.png"
const superEnemyLeft3: HTMLImageElement = new Image()
superEnemyLeft3.src = "./sprites/superEnemyLeft3.png"

const superEnemyLeftTab: HTMLImageElement[] = [superEnemyLeft1, superEnemyLeft2, superEnemyLeft3, superEnemyLeft2]

const enemy1dead1: HTMLImageElement = new Image()
enemy1dead1.src = "./sprites/enemy1dead1.png"
const enemy1dead2: HTMLImageElement = new Image()
enemy1dead2.src = "./sprites/enemy1dead2.png"
const enemy1dead3: HTMLImageElement = new Image()
enemy1dead3.src = "./sprites/enemy1dead3.png"
const enemy1dead4: HTMLImageElement = new Image()
enemy1dead4.src = "./sprites/enemy1dead4.png"
const enemy1dead5: HTMLImageElement = new Image()
enemy1dead5.src = "./sprites/enemy1dead5.png"
const enemy2dead1: HTMLImageElement = new Image()
enemy2dead1.src = "./sprites/enemy2dead1.png"
const enemy2dead2: HTMLImageElement = new Image()
enemy2dead2.src = "./sprites/enemy2dead2.png"
const enemy2dead3: HTMLImageElement = new Image()
enemy2dead3.src = "./sprites/enemy2dead3.png"
const enemy2dead4: HTMLImageElement = new Image()
enemy2dead4.src = "./sprites/enemy2dead4.png"
const enemy2dead5: HTMLImageElement = new Image()
enemy2dead5.src = "./sprites/enemy2dead5.png"
const superEnemyDead: HTMLImageElement = new Image()
superEnemyDead.src = "./sprites/superEnemyDead.png"

const superEnemyDeadTab: HTMLImageElement[] = [superEnemyDead, enemy1dead2, enemy1dead3, enemy1dead4, enemy1dead5]
const enemy1deadTab: HTMLImageElement[] = [enemy1dead1, enemy1dead2, enemy1dead3, enemy1dead4, enemy1dead5]
const enemy2deadTab: HTMLImageElement[] = [enemy2dead1, enemy2dead2, enemy2dead3, enemy2dead4, enemy2dead5]
const enemyDeathTab: HTMLImageElement[][] = [enemy1deadTab, enemy2deadTab]

const bonusRangeIcon: HTMLImageElement = new Image()
bonusRangeIcon.src = "./sprites/bonusRangeIcon.png"
const bonusBombIcon: HTMLImageElement = new Image()
bonusBombIcon.src = "./sprites/bonusBombIcon.png"
const doorIcon: HTMLImageElement = new Image()
doorIcon.src = "./sprites/doorIcon.png"

const blockSize: number = 50
let bombindex: number = 0
let xplotionIndex: number = 0
let offset: number = 0
let bombcd: boolean = true
timerCanvas.canvas.height = blockSize * 2;
timerCanvas.canvas.width = blockSize * 16;
let timerDiv: HTMLElement = document.getElementById("timer")
timerDiv.style.position = "absolute"
timerDiv.style.top = "100px"
timerDiv.style.left = "100px"
let contextDiv: HTMLElement = document.getElementById("board")
console.log(contextDiv)
contextDiv.style.position = "absolute"
contextDiv.style.left = "100px"
contextDiv.style.top = `${(blockSize * 2) + 100}px`
context.canvas.height = blockSize * 13;
context.canvas.width = blockSize * 16;

let enemiesOnStage: number = 0
let stage: number = 1
let doors: number = 1
let bonusBombs: number = 1
let bonusRange: number = 1
// Start the frame count at 1
let frameCount: number = 1;

// Set the number of obstacles to match the current "level"
let lastTime: number = 0
// Create a collection to hold the generated x coordinates
let obXCoors: Object[] = [];
let timer: number = 200
let boxTab: Object[] = []
let powerUpTab: (PowerUpObj | number)[] = []
let boardTab: Object[] = [];

let score: number = 0

let myFrame: number

let enemyTab: (Enemy | number)[] = []

const xplosionTab: (number | [] | string[])[] = [];

let colisions: ColisionObj[] = [];

let bombTab: (Bomb | number)[] = []

class Bomber {
    height: number
    width: number
    x: number
    xVelocity: number
    y: number
    yVelocity: number
    step: number
    direction: string
    bombs: number
    exposionSize: number
    lives: number
    died: boolean
    stateOfDecay: number
    constructor(height: number,
        width: number,
        x: number,
        xVelocity: number,
        y: number,
        yVelocity: number,
        step: number,
        direction: string,
        bombs: number,
        exposionSize: number,
        lives: number,
        died: boolean,
        stateOfDecay: number) {

        this.height = height
        this.width = width
        this.x = x
        this.xVelocity = xVelocity
        this.y = y
        this.yVelocity = yVelocity
        this.step = step
        this.direction = direction
        this.bombs = bombs
        this.exposionSize = exposionSize
        this.lives = lives
        this.died = died
        this.stateOfDecay = stateOfDecay

    }
}
let stopGame: boolean = false
const square = new Bomber(blockSize, blockSize * 0.75, 15, 0, 15, 0, 1, "left", 1, 2, 2, false, 0)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


const spawnBaboons = function (x, y) {
    setTimeout(function () {
        console.log("baboons")
        for (let i: number = 0; i < 6; i++) {

            let enemy: Enemy = new Enemy(x, y, enemiesOnStage, x * blockSize, y * blockSize, 2, false, 1)
            enemy.myAnimation()
            enemy.controleMovement()
            enemyTab[enemiesOnStage] = enemy
            enemiesOnStage += 1


        }
    }, 500);


}
const endGame = function () {

    window.cancelAnimationFrame(myFrame)
    context.fillStyle = "#000000";
    context.fillRect(0, 0, blockSize * 16, blockSize * 13)
    context.font = "30px Arial";
    context.fillStyle = "white";
    context.textAlign = "center";
    square.lives -= 1
    if (square.lives == -1) {
        context.fillText(`Game Over`, context.canvas.width / 2, context.canvas.height / 2);
    } else {
        context.fillText(`Stage ${stage}`, context.canvas.width / 2, context.canvas.height / 2);
        for (let i: number = 0; i < enemyTab.length; i++) {
            (enemyTab[i] as Enemy).died = true
            enemyTab[i] = 0
        }
        setTimeout(function () { startLoop() }, 3000);
    }


}
const nextStage = function () {
    stage++
    window.cancelAnimationFrame(myFrame)
    context.fillStyle = "#000000";
    context.fillRect(0, 0, blockSize * 16, blockSize * 13)
    context.font = "30px Arial";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.fillText(`Stage ${stage}`, context.canvas.width / 2, context.canvas.height / 2);
    for (let i: number = 0; i < enemyTab.length; i++) {
        (enemyTab[i] as Enemy).died = true
        enemyTab[i] = 0
    }
    stopGame = true
    setTimeout(function () { startLoop() }, 3000);
}


const animateDeath = function (i) {
    if (i == 8) {
        endGame()
    } else {
        square.stateOfDecay = i
        setTimeout(function () { animateDeath(i + 1) }, 300);
    }
}


const startLoop = function () {
    stopGame = false
    square.died = false
    square.x = 15
    square.y = 15
    bombTab = []
    obXCoors = []
    colisions = []
    boardTab = []
    boxTab = []
    timer = 200
    for (let i: number = 0; i < 31; i++) {
        boardTab[i] = []
        for (let j: number = 0; j < 13; j++) {
            if (i == 0 || j == 0 || i == 30 || j == 12) {
                boardTab[i][j] = "wall"
                obXCoors.push([i, j]);
            }
            else if (i % 2 == 0 && j % 2 == 0) {
                boardTab[i][j] = "wall"
                obXCoors.push([i, j]);
                let colision: ColisionObj = new ColisionObj(i * blockSize, (i + 1) * blockSize, j * blockSize, (j + 1) * blockSize, "wall")

                colisions.push(colision)
            }
            else {
                boardTab[i][j] = 0

            }
        }
    }
    //w grze jest pomiędzy 50 a 60
    for (let i: number = 0; i < 60; i++) {
        let x: number = getRandomInt(1, 30)
        let y: number = getRandomInt(1, 12)
        if (x == 1 && y == 1 || x == 1 && y == 2 || x == 2 && y == 1) {
            i--
        } else {
            if (boardTab[x][y] == 0) {
                boardTab[x][y] = "box"
                boxTab.push([x, y, brick1])
                let colision: ColisionObj = new ColisionObj(x * blockSize, (x + 1) * blockSize, y * blockSize, (y + 1) * blockSize, "box")

                colisions.push(colision)
            }
            else {
                i--
            }
        }
    }

    for (let i: number = 0; i < powerUpTab.length; i++) {
        powerUpTab[i] = 0
    }
    for (let i: number = 0; i < stage; i++) {
        let x: number = getRandomInt(1, 30)
        let y: number = getRandomInt(1, 12)
        if (boardTab[x][y] == "box") {
            let powerUp: PowerUpObj = new PowerUpObj(x, y, bonusRangeIcon, "range")
            powerUpTab.push(powerUp)
        } else {
            i--
        }
    }
    for (let i: number = 0; i < stage; i++) {
        let x: number = getRandomInt(1, 30)
        let y: number = getRandomInt(1, 12)
        if (boardTab[x][y] == "box") {
            let powerUp: PowerUpObj = new PowerUpObj(x, y, bonusBombIcon, "bomb")

            powerUpTab.push(powerUp)
        } else {
            i--
        }
    }
    for (let i: number = 0; i < 1; i++) {
        let x: number = getRandomInt(1, 30)
        let y: number = getRandomInt(1, 12)
        if (boardTab[x][y] == "box") {
            let powerUp: PowerUpObj = new PowerUpObj(x, y, doorIcon, "doors")
            powerUpTab.push(powerUp)
        }
        else {
            i--
        }
    }
    enemiesOnStage = 0
    enemyTab = []
    for (let i: number = 0; i < 6; i++) {
        let x: number = getRandomInt(1, 30)
        let y: number = getRandomInt(1, 12)
        if (x == 1 && y == 1 || x == 1 && y == 2 || x == 2 && y == 1) {
            i--
        } else {
            if (boardTab[x][y] == 0) {

                if (stage > 2) {
                    let enemy: Enemy = new Enemy(x, y, enemiesOnStage, x * blockSize, y * blockSize, 2, false, 1)
                    enemy.myAnimation()
                    enemy.controleMovement()
                    enemyTab[enemiesOnStage] = enemy

                }
                else {
                    let enemy: Enemy = new Enemy(x, y, enemiesOnStage, x * blockSize, y * blockSize, stage, false, stage - 1)
                    enemy.myAnimation()
                    enemy.controleMovement()
                    enemyTab[enemiesOnStage] = enemy

                }
                enemiesOnStage++
            }
            else {
                i--
            }
        }
    }

    myFrame = window.requestAnimationFrame(loop);
}
class PowerUpObj {
    x: number;
    y: number;
    image: HTMLImageElement;
    type: string
    constructor(x: number, y: number, image: HTMLImageElement, type: string) {
        this.x = x;
        this.y = y;
        this.image = image;
        this.type = type
    }
}
class ColisionObj {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
    type: string
    constructor(x1: number, x2: number, y1: number, y2: number, type: string) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        this.type = type
    }
}
class Enemy {
    x: number;
    y: number;
    xinTab: number;
    yinTab: number;
    width: number;
    height: number;
    id: number;
    speed: number;
    direction: string;
    directionSideways: string;
    animationState: number;
    image: HTMLImageElement;
    died: boolean
    isSuper: boolean
    type: number
    constructor(xinTab: number, yinTab: number, id: number, x: number, y: number, speed: number, isSuper: boolean, type: number) {
        this.xinTab = xinTab;
        this.yinTab = yinTab;
        this.x = x;
        this.y = y;
        this.speed = speed
        this.id = id;
        this.width = blockSize;
        this.height = blockSize;
        this.direction = "down";
        this.directionSideways = "left";
        this.animationState = 1;
        this.image = enemy1left1;
        this.died = false
        this.isSuper = isSuper
        this.type = type
    }

    controleMovement() {
        if (this.died == false) {
            let randomDirection: number = getRandomInt(1, 5)
            let that: Enemy = this
            if (this.isSuper) {
                switch (randomDirection) {

                    case (1):
                        if (boardTab[this.xinTab][this.yinTab - 1] != "wall") {
                            this.moveUp()
                        } else {
                            setTimeout(function () { that.controleMovement() }, 5);
                        }
                        break;
                    case (2):
                        if (boardTab[this.xinTab][this.yinTab + 1] != "wall") {
                            this.moveDown()
                        } else {
                            setTimeout(function () { that.controleMovement() }, 5);
                        }
                        break;
                    case (3):
                        if (boardTab[this.xinTab - 1][this.yinTab] != "wall") {
                            this.moveLeft()
                        } else {
                            setTimeout(function () { that.controleMovement() }, 5);
                        }
                        break;
                    case (4):
                        if (boardTab[this.xinTab + 1][this.yinTab] != "wall") {
                            this.moveRight()
                        } else {
                            setTimeout(function () { that.controleMovement() }, 5);
                        }
                        break;
                }
            }
            else {
                switch (randomDirection) {

                    case (1):
                        if (boardTab[this.xinTab][this.yinTab - 1] == 0) {
                            this.moveUp()
                        } else {
                            setTimeout(function () { that.controleMovement() }, 5);
                        }
                        break;
                    case (2):
                        if (boardTab[this.xinTab][this.yinTab + 1] == 0) {
                            this.moveDown()
                        } else {
                            setTimeout(function () { that.controleMovement() }, 5);
                        }
                        break;
                    case (3):
                        if (boardTab[this.xinTab - 1][this.yinTab] == 0) {
                            this.moveLeft()
                        } else {
                            setTimeout(function () { that.controleMovement() }, 5);
                        }
                        break;
                    case (4):
                        if (boardTab[this.xinTab + 1][this.yinTab] == 0) {
                            this.moveRight()
                        } else {
                            setTimeout(function () { that.controleMovement() }, 5);
                        }
                        break;
                }
            }
        }
    }
    moveUp() {
        if (this.died == false) {
            this.direction = "up"
            this.y -= this.speed
            let that: Enemy = this
            if (square.x + square.width > that.x && square.x < this.x + this.width
                && square.y + square.height > this.y && square.y < this.y + this.height) {
                if (square.died == false) {
                    square.died = true
                    animateDeath(0)
                }
            }
            if (this.y / blockSize == (this.yinTab - 1)) {

                this.yinTab -= 1
                if (this.isSuper) {
                    if (boardTab[this.xinTab][this.yinTab - 1] == "wall" || boardTab[this.xinTab][this.yinTab - 1] == undefined) {
                        let randomDirection: number = getRandomInt(1, 10)
                        if (randomDirection == 1) {
                            this.controleMovement()

                        }
                        else {
                            this.moveDown()
                            this.directionSideways = "right"
                        }

                        //this.controleMovement()
                    } else {
                        let randomDirection: number = getRandomInt(1, 20)
                        if (randomDirection == 1) {
                            this.controleMovement()
                        }
                        else {

                            setTimeout(function () { that.moveUp() }, 5);
                        }
                    }
                }
                else {
                    if (boardTab[this.xinTab][this.yinTab - 1] != 0) {
                        let randomDirection: number = getRandomInt(1, 3)
                        if (randomDirection == 1) {
                            this.controleMovement()

                        }
                        else {
                            this.moveDown()
                            this.directionSideways = "right"
                        }

                        //this.controleMovement()
                    } else {
                        let randomDirection: number = getRandomInt(1, 5)
                        if (randomDirection == 1) {
                            this.controleMovement()
                        }
                        else {

                            setTimeout(function () { that.moveUp() }, 5);
                        }
                    }
                }
            } else {
                setTimeout(function () { that.moveUp() }, 5);
            }
        }
    }
    moveDown() {
        if (this.died == false) {
            this.direction = "down"
            this.y += this.speed
            let that: Enemy = this
            if (square.x + square.width > that.x && square.x < this.x + this.width
                && square.y + square.height > this.y && square.y < this.y + this.height) {
                if (square.died == false) {
                    square.died = true
                    animateDeath(0)
                }
            }

            if (this.y / blockSize == (this.yinTab + 1)) {

                this.yinTab += 1
                if (this.isSuper) {

                    if (boardTab[this.xinTab][this.yinTab + 1] == "wall" || boardTab[this.xinTab][this.yinTab + 1] == undefined) {
                        let randomDirection: number = getRandomInt(1, 10)
                        if (randomDirection == 1) {
                            this.controleMovement()
                        }
                        else {
                            this.moveUp()
                            this.directionSideways = "right"
                        }
                        //this.controleMovement()
                    } else {
                        let randomDirection: number = getRandomInt(1, 20)
                        if (randomDirection == 1) {
                            this.controleMovement()
                        }
                        else {
                            setTimeout(function () { that.moveDown() }, 5);
                        }
                    }
                } else {
                    if (boardTab[this.xinTab][this.yinTab + 1] != 0) {
                        let randomDirection: number = getRandomInt(1, 3)
                        if (randomDirection == 1) {
                            this.controleMovement()
                        }
                        else {
                            this.moveUp()
                            this.directionSideways = "right"
                        }
                        //this.controleMovement()
                    } else {
                        let randomDirection: number = getRandomInt(1, 5)
                        if (randomDirection == 1) {
                            this.controleMovement()
                        }
                        else {
                            setTimeout(function () { that.moveDown() }, 5);
                        }
                    }
                }
            } else {
                setTimeout(function () { that.moveDown() }, 5);
            }
        }
    }
    moveRight() {
        if (this.died == false) {
            this.direction = "right"
            this.directionSideways = "right"
            this.x += this.speed
            let that: Enemy = this
            if (square.x + square.width > that.x && square.x < this.x + this.width
                && square.y + square.height > this.y && square.y < this.y + this.height) {
                if (square.died == false) {
                    square.died = true
                    animateDeath(0)
                }
            }
            if (this.x / blockSize == this.xinTab + 1) {

                this.xinTab += 1
                if (this.isSuper) {
                    if (boardTab[this.xinTab + 1][this.yinTab] == "wall" || boardTab[this.xinTab + 1][this.yinTab] == undefined) {
                        let randomDirection: number = getRandomInt(1, 10)
                        if (randomDirection == 1) {
                            this.controleMovement()
                        }
                        else {
                            this.moveLeft()
                        }
                        //this.controleMovement()
                    } else {
                        let randomDirection: number = getRandomInt(1, 20)
                        if (randomDirection == 1) {
                            this.controleMovement()
                        }
                        else {
                            setTimeout(function () { that.moveRight() }, 5);
                        }
                    }
                } else {


                    if (boardTab[this.xinTab + 1][this.yinTab] != 0) {
                        let randomDirection: number = getRandomInt(1, 3)
                        if (randomDirection == 1) {
                            this.controleMovement()
                        }
                        else {
                            this.moveLeft()
                        }
                        //this.controleMovement()
                    } else {
                        let randomDirection: number = getRandomInt(1, 5)
                        if (randomDirection == 1) {
                            this.controleMovement()
                        }
                        else {
                            setTimeout(function () { that.moveRight() }, 5);
                        }
                    }
                }
            } else {
                setTimeout(function () { that.moveRight() }, 5);
            }
        }
    }
    moveLeft() {
        if (this.died == false) {
            this.direction = "left"
            this.directionSideways = "left"
            this.x -= this.speed
            let that: Enemy = this
            if (square.x + square.width > that.x && square.x < this.x + this.width
                && square.y + square.height > this.y && square.y < this.y + this.height) {
                if (square.died == false) {
                    square.died = true
                    animateDeath(0)
                }
            }
            if (this.x / blockSize == this.xinTab - 1) {

                this.xinTab -= 1
                if (this.isSuper) {
                    if (boardTab[this.xinTab - 1][this.yinTab] == "wall" || boardTab[this.xinTab - 1][this.yinTab] == undefined) {
                        let randomDirection: number = getRandomInt(1, 10)
                        if (randomDirection == 1) {
                            this.controleMovement()
                        }
                        else {
                            this.moveRight()
                        }
                        //this.controleMovement()
                    } else {
                        let randomDirection: number = getRandomInt(1, 20)
                        if (randomDirection == 1) {
                            this.controleMovement()
                        }
                        else {
                            setTimeout(function () { that.moveLeft() }, 5);
                        }
                    }
                }
                else {
                    if (boardTab[this.xinTab - 1][this.yinTab] != 0) {
                        let randomDirection: number = getRandomInt(1, 3)
                        if (randomDirection == 1) {
                            this.controleMovement()
                        }
                        else {
                            this.moveRight()
                        }
                        //this.controleMovement()
                    } else {
                        let randomDirection: number = getRandomInt(1, 5)
                        if (randomDirection == 1) {
                            this.controleMovement()
                        }
                        else {
                            setTimeout(function () { that.moveLeft() }, 5);
                        }
                    }
                }
            } else {
                setTimeout(function () { that.moveLeft() }, 5);
            }
        }
    }
    myAnimation() {
        if (this.died == false) {

            this.animationState += 1
            if (this.animationState == 4) {
                this.animationState = 0
            }
            if (this.isSuper) {
                switch (this.directionSideways) {
                    case ("right"):
                        this.image = superEnemyRightTab[this.animationState]
                        break;
                    case ("left"):
                        this.image = superEnemyLeftTab[this.animationState]
                        break;
                }
            }
            else {
                switch (this.directionSideways) {
                    case ("right"):
                        this.image = enemyrightTab[this.type][this.animationState]
                        break;
                    case ("left"):
                        this.image = enemyleftTab[this.type][this.animationState]

                        break;
                }
            }
            let that: Enemy = this
            setTimeout(function () { that.myAnimation() }, 200);
        }
    }
    die() {
        if (this.died == false) {
            this.animationState = 0
            this.died = true
        }
        else {
            this.animationState += 1
        }

        if (this.animationState == 5) {
            enemyTab[this.id] = 0
            score += 100
            enemiesOnStage -= 1
        }
        if (this.isSuper) {
            this.image = superEnemyDeadTab[this.animationState]
        }
        else {
            this.image = enemyDeathTab[this.type][this.animationState]
        }
        let that: Enemy = this
        setTimeout(function () { that.die() }, 500);
    }
}

class Bomb {
    x: number;
    y: number;
    id: number;
    lastState: number;
    isSolid: boolean;
    image: HTMLImageElement;
    explotionCycle: number;
    numberOfXplotions: number
    numberOfXplotionsDone: number

    constructor(x: number, y: number, id: number) {
        this.x = x;
        this.y = y;
        this.id = id
        this.lastState = 1
        this.isSolid = false
        this.image = bomb1
        this.explotionCycle = 0
        this.numberOfXplotions = 0
        this.numberOfXplotionsDone = 0
    }

    place() {
        square.bombs -= 1

        bombTab[this.id] = this
        boardTab[this.x][this.y] = this
        let that: Bomb = this
        setTimeout(function () { that.changeState() }, 200);
        setTimeout(function () { that.xplode() }, 3000);

        //context.drawImage(bomb2, (this.x * blockSize) - offset, this.y, blockSize, blockSize);
    }
    changeState() {
        if (bombTab[this.id] != undefined) {
            if ((bombTab[this.id] as Bomb).image == (bomb1)) {
                (bombTab[this.id] as Bomb).image = (bomb2)
                this.lastState = 1
            } else if ((bombTab[this.id] as Bomb).image == (bomb2)) {
                if (this.lastState == 1) {
                    (bombTab[this.id] as Bomb).image = (bomb3)
                } else {
                    (bombTab[this.id] as Bomb).image = (bomb1)
                }
                this.lastState = 2
            } else if ((bombTab[this.id] as Bomb).image == (bomb3)) {

                (bombTab[this.id] as Bomb).image = (bomb2)
                this.lastState = 3

            }
            let that: Bomb = this
            setTimeout(function () { that.changeState() }, 200);
        }
    }
    xplode() {

        //colisions.findIndex(x => x.id === '45')
        for (let i: number = 0; i < colisions.length; i++) {
            if (colisions[i].type == "bomb" && colisions[i].x1 == this.x * blockSize && colisions[i].y1 == this.y * blockSize) {

                colisions.splice(i, 1);

            }
        }
        boardTab[this.x][this.y] = 0

        bombTab[this.id] = 0
        this.startAnimatingXplotion(this.x, this.y, xCenterTab, this.id)

        this.numberOfXplotions++
        setTimeout(function () { square.bombs++ }, 200);
        this.destroyAround()
    }
    demolishWall(x, y) {
        let that: Bomb = this

        for (let i: number = 0; i < boxTab.length; i++) {
            if (boxTab[i][0] == x && boxTab[i][1] == y) {
                if (boxTab[i][2] == brick1) {
                    boxTab[i][2] = brick2
                    setTimeout(function () { that.demolishWall(x, y) }, 100);
                } else if (boxTab[i][2] == brick2) {
                    boxTab[i][2] = brick3
                    setTimeout(function () { that.demolishWall(x, y) }, 100);
                }
                else if (boxTab[i][2] == brick3) {
                    boxTab[i][2] = brick4
                    setTimeout(function () { that.demolishWall(x, y) }, 100);
                }
                else if (boxTab[i][2] == brick4) {
                    boxTab[i][2] = brick5
                    setTimeout(function () { that.demolishWall(x, y) }, 100);
                }
                else if (boxTab[i][2] == brick5) {
                    boxTab[i][2] = brick6
                    setTimeout(function () { that.demolishWall(x, y) }, 100);

                }
                else if (boxTab[i][2] == brick6) {
                    boxTab[i] = 0

                    for (let i: number = 0; i < colisions.length; i++) {
                        if (colisions[i].type == "box" && colisions[i].x1 == (x) * blockSize && colisions[i].y1 == y * blockSize) {
                            colisions.splice(i, 1);
                            let discoveredDoor: boolean = false
                            for (let i: number = 0; i < powerUpTab.length; i++) {
                                if ((powerUpTab[i] as PowerUpObj).type == "doors" && (powerUpTab[i] as PowerUpObj).x == (x) && (powerUpTab[i] as PowerUpObj).y == y) {
                                    discoveredDoor = true
                                }
                            }
                            if (discoveredDoor) {
                                boardTab[x][y] = "doors"
                            } else {
                                boardTab[x][y] = 0
                            }

                        }
                    }
                }


            }
        }

    }
    progressExposion() {
        this.explotionCycle += 1
        let that: Bomb = this
        setTimeout(function () { that.progressExposion() }, 10);
    }
    animatexplode(x, y, img, bombId) {
        let that: Bomb = this
        let myId: string = `${x}${y}`
        if (x == Math.round(square.x / blockSize) && y == Math.round(square.y / blockSize)) {
            if (square.died == false) {
                square.died = true
                animateDeath(0)
            }

        }
        enemyTab.forEach((enemy) => {
            if (enemy != 0) {
                if (x == (enemy as Enemy).xinTab && y == (enemy as Enemy).yinTab && (enemy as Enemy).died == false) {
                    (enemy as Enemy).die()
                }


            }
        })
        if (this.numberOfXplotions == this.numberOfXplotionsDone) {
            this.numberOfXplotionsDone = 0
            this.explotionCycle++
        }

        for (let i: number = 0; i < xplosionTab.length; i++) {
            if (xplosionTab[i][2] == myId && xplosionTab[i][4] == bombId) {
                if (this.explotionCycle == 6) {

                    xplosionTab[i] = 0

                } else {

                    xplosionTab[i][3] = img[this.explotionCycle]
                    this.numberOfXplotionsDone += 1
                    setTimeout(function () { that.animatexplode(x, y, img, bombId) }, 100);
                }
            }
        }

    }
    startAnimatingXplotion(x, y, img, bombId) {
        let myId: string = `${x}${y}`
        let that: Bomb = this
        xplosionTab.push([x, y, myId, img[this.explotionCycle], bombId])

        setTimeout(function () { that.animatexplode(x, y, img, bombId) }, 200);
    }
    destroyAround() {
        let upSmash: boolean = false
        let downSmash: boolean = false
        let rightSmash: boolean = false
        let leftSmash: boolean = false

        for (let i: number = 1; i <= square.exposionSize; i++) {
            if (this.x + i < 30) {
                if (boardTab[this.x + i][this.y] == "wall") {
                    upSmash = true
                }
                else if (boardTab[this.x + i][this.y] == "box" && upSmash == false) {
                    upSmash = true
                    this.demolishWall(this.x + i, this.y)
                }
                else if (boardTab[this.x + i][this.y] == "doors" && upSmash == false) {
                    upSmash = true
                    spawnBaboons(this.x + i, this.y)
                }
                else if (boardTab[this.x + i][this.y] == 0 && upSmash == false) {
                    if (i == square.exposionSize) {
                        this.numberOfXplotions++
                        this.startAnimatingXplotion(this.x + i, this.y, xRightTab, this.id)
                    }
                    else {
                        this.numberOfXplotions++
                        this.startAnimatingXplotion(this.x + i, this.y, xHorizontalTab, this.id)
                    }
                }
            }
            if (this.x - i > 0) {
                if (boardTab[this.x - i][this.y] == "wall") {
                    downSmash = true
                }
                else if (boardTab[this.x - i][this.y] == "box" && downSmash == false) {
                    downSmash = true
                    this.demolishWall(this.x - i, this.y)
                }
                else if (boardTab[this.x - i][this.y] == "doors" && downSmash == false) {
                    downSmash = true
                    spawnBaboons(this.x - i, this.y)
                }
                else if (boardTab[this.x - i][this.y] == 0 && downSmash == false) {
                    if (i == square.exposionSize) {
                        this.numberOfXplotions++
                        this.startAnimatingXplotion(this.x - i, this.y, xLeftTab, this.id)
                    }
                    else {
                        this.numberOfXplotions++
                        this.startAnimatingXplotion(this.x - i, this.y, xHorizontalTab, this.id)
                    }
                }
            }
            if (this.y - i > 0) {
                if (boardTab[this.x][this.y - i] == "wall") {
                    rightSmash = true
                }
                else if (boardTab[this.x][this.y - i] == "box" && rightSmash == false) {
                    rightSmash = true
                    this.demolishWall(this.x, this.y - i)
                }
                else if (boardTab[this.x][this.y - i] == "doors" && rightSmash == false) {
                    rightSmash = true
                    spawnBaboons(this.x, this.y - i)
                }
                else if (boardTab[this.x][this.y - i] == 0 && rightSmash == false) {
                    if (i == square.exposionSize) {
                        this.numberOfXplotions++
                        this.startAnimatingXplotion(this.x, this.y - i, xUpTab, this.id)
                    }
                    else {
                        this.numberOfXplotions++
                        this.startAnimatingXplotion(this.x, this.y - i, xVerticalTab, this.id)
                    }
                }
            }
            if (this.y - i < 12) {
                if (boardTab[this.x][this.y + i] == "wall") {
                    leftSmash = true
                }
                if (boardTab[this.x][this.y + i] == "box" && leftSmash == false) {
                    leftSmash = true
                    this.demolishWall(this.x, this.y + i)
                }
                else if (boardTab[this.x][this.y + i] == "doors" && leftSmash == false) {
                    leftSmash = true
                    spawnBaboons(this.x, this.y + i)
                }
                else if (boardTab[this.x][this.y + i] == 0 && leftSmash == false) {
                    if (i == square.exposionSize) {
                        this.numberOfXplotions++
                        this.startAnimatingXplotion(this.x, this.y + i, xDownTab, this.id)
                    }
                    else {
                        this.numberOfXplotions++
                        this.startAnimatingXplotion(this.x, this.y + i, xVerticalTab, this.id)
                    }
                }
            }
        }
    }
}

const controller = {

    left: false,
    right: false,
    up: false,
    down: false,

    keyListener: function (event) {

        var key_state = (event.type == "keydown") ? true : false;

        switch (event.keyCode) {

            case 37:// left key
                controller.left = key_state;


                break;
            case 38:// up key
                controller.up = key_state;



                break;
            case 39:// right key
                controller.right = key_state;



                break;
            case 40:// right key
                controller.down = key_state;


                break;
        }
    },



};

const loop = function () {
    if (Date.now() - lastTime > 1000) {
        lastTime = Date.now()
        timer--
        timerCanvas.fillStyle = "#a1a1a1";
        timerCanvas.fillRect(0, 0, blockSize * 16, blockSize * 2)
        timerCanvas.font = "bold 28px verdana, sans-serif ";

        timerCanvas.fillStyle = "#ffffff";
        timerCanvas.fillText(`Time ${timer}`, blockSize * 0.5, blockSize * 1.5);
        timerCanvas.fillText(`Score ${score}`, blockSize * 8, blockSize * 1.5);
        timerCanvas.fillText(`Left ${square.lives}`, blockSize * 12, blockSize * 1.5);
        if (timer == 1) {
            enemiesOnStage = 6
            enemyTab = []
            for (let i: number = 0; i < enemiesOnStage; i++) {
                let x: number = getRandomInt(1, 30)
                let y: number = getRandomInt(1, 12)
                if (x == 1 && y == 1 || x == 1 && y == 2 || x == 2 && y == 1) {
                    i--
                } else {
                    if (boardTab[x][y] == 0) {
                        let enemy: Enemy = new Enemy(x, y, i, x * blockSize, y * blockSize, 5, true, 1)
                        enemy.myAnimation()
                        enemy.controleMovement()
                        enemyTab[i] = enemy

                    }
                    else {
                        i--
                    }
                }
            }
        }
        if (timer <= 0) {
            timer = 0
        }
    }

    if (square.x > blockSize * 8 && square.x < blockSize * 23) {
        offset = square.x - blockSize * 8
    } else if (square.x < blockSize * 8) {
        offset = 0
    }
    if (controller.up || controller.left || controller.right || controller.down) {
        frameCount++
        if (frameCount % 5 == 0) {
            square.step += 1
        }
        if (square.step == 4) {
            square.step = 1

        }
    }
    //wyrzuć squarevelocity poza elsa żeby było jak w oryginale
    if (controller.up) {

        if (square.direction == "down" && controller.down) {

        } else {
            square.direction = "up"
            square.yVelocity -= 2;
        }


    }

    if (controller.left) {


        if (square.direction == "right" && controller.right) {

        } else {
            square.direction = "left"
            square.xVelocity -= 2;
        }

    }

    if (controller.right) {

        if (square.direction == "left" && controller.left) {

        } else {
            square.direction = "right"
            square.xVelocity += 2;
        }

    }
    if (controller.down) {

        if (square.direction == "up" && controller.up) {

        } else {
            square.direction = "down"
            square.yVelocity += 2;
        }
    }
    // square.yVelocity += 1.5;// gravity
    let myBool1: boolean = true
    let myBool2: boolean = true

    colisions.forEach(element => {
        if (square.x + square.width + square.xVelocity > element.x1 && square.x + square.xVelocity < element.x2
            && square.y + square.height > element.y1 && square.y < element.y2) {
            myBool1 = false
        }

        if (square.y + square.height + square.yVelocity > element.y1 && square.y + square.yVelocity < element.y2
            && square.x + square.width > element.x1 && square.x < element.x2) {
            myBool2 = false

        }
    })


    if (square.died == false) {
        if (myBool1) {
            square.x += square.xVelocity;
        }
        if (myBool2) {
            square.y += square.yVelocity;
        }
    }

    square.xVelocity *= 0;// friction
    square.yVelocity *= 0;// friction

    // if square is falling below floor line
    //
    if (square.y > blockSize * 11) {


        square.y = blockSize * 11;

    }
    else if (square.y < blockSize) {

        square.y = blockSize;


    }

    // if square is going off the left of the screen
    if (square.x < blockSize) {

        square.x = blockSize;


    } else if (square.x > blockSize * 29.2) {// if square goes past right boundary

        square.x = blockSize * 29.2;

    }



    function pickPowerup(element, index) {
        if (square.x + square.width > element.x * blockSize && square.x < element.x * blockSize + blockSize
            && square.y + square.height > element.y * blockSize && square.y < element.y * blockSize + blockSize) {
            console.log(element.type)
            if (element.type == "bomb") {
                square.bombs += 1
                score += 1000
                powerUpTab[index] = 0
            }
            if (element.type == "range") {
                square.exposionSize += 1
                score += 1000
                powerUpTab[index] = 0
            }
            if (element.type == "doors") {
                powerUpTab[index] = 0
                nextStage()

                //if (enemiesOnStage == 0) {

                //}
            }

        }
    }


    context.fillStyle = "#388700";
    context.fillRect(0, 0, blockSize * 31, blockSize * 13); // x, y, width, height

    powerUpTab.forEach((power) => {
        if (power != 0) {
            context.drawImage((power as PowerUpObj).image, (power as PowerUpObj).x * blockSize - offset, (power as PowerUpObj).y * blockSize, blockSize, blockSize);
        }
    })


    boxTab.forEach((box) => {
        if (box != 0) {
            context.drawImage(box[2], box[0] * blockSize - offset, box[1] * blockSize, blockSize, blockSize);
        }
    })


    obXCoors.forEach((obXCoor) => {
        context.drawImage(wall, obXCoor[0] * blockSize - offset, obXCoor[1] * blockSize, blockSize, blockSize);


    })

    xplosionTab.forEach((xplosion, i) => {
        if (xplosion != 0) {
            context.drawImage(xplosion[3], xplosion[0] * blockSize - offset, xplosion[1] * blockSize, blockSize, blockSize);

        }

    })

    bombTab.forEach((bomb, i) => {
        if (bomb != 0) {
            context.drawImage((bomb as Bomb).image, (bomb as Bomb).x * blockSize - offset, (bomb as Bomb).y * blockSize, blockSize, blockSize);

            if ((bomb as Bomb).isSolid == false) {

                if (square.x + square.width < (bomb as Bomb).x * blockSize || square.x - blockSize * 0.2 > (bomb as Bomb).x * blockSize + square.width || square.y + square.height < (bomb as Bomb).y * blockSize || square.y > (bomb as Bomb).y * blockSize + square.height - blockSize * 0.02) {


                    let colision: ColisionObj = new ColisionObj((bomb as Bomb).x * blockSize, ((bomb as Bomb).x + 1) * blockSize, (bomb as Bomb).y * blockSize, ((bomb as Bomb).y + 1) * blockSize, "bomb")
                    boardTab[(bomb as Bomb).x][(bomb as Bomb).y].isSolid = true
                    colisions.push(colision)
                }
            }
        }
    })
    enemyTab.forEach((enemy) => {
        if (enemy != 0) {
            context.drawImage((enemy as Enemy).image, ((enemy as Enemy).x - offset), (enemy as Enemy).y, (enemy as Enemy).width, (enemy as Enemy).height);

        }
    })

    // Creates and fills the cube for each framecontext.drawImage
    if (square.died == false) {
        switch (square.direction) {
            case ("down"): {

                switch (square.step) {
                    case (1):
                        context.drawImage(down1, square.x - offset, square.y, square.width, square.height);
                        break;
                    case (2):
                        context.drawImage(down2, square.x - offset, square.y, square.width, square.height);
                        break;
                    case (3):
                        context.drawImage(down3, square.x - offset, square.y, square.width, square.height);
                        break;
                }
                break;
            }
            case ("up"): {

                switch (square.step) {
                    case (1):
                        context.drawImage(up1, square.x - offset, square.y, square.width, square.height);
                        break;
                    case (2):
                        context.drawImage(up2, square.x - offset, square.y, square.width, square.height);
                        break;
                    case (3):
                        context.drawImage(up3, square.x - offset, square.y, square.width, square.height);
                        break;
                }
                break;
            }
            case ("left"): {

                switch (square.step) {
                    case (1):
                        context.drawImage(left1, square.x - offset, square.y, square.width, square.height);
                        break;
                    case (2):
                        context.drawImage(left2, square.x - offset, square.y, square.width, square.height);
                        break;
                    case (3):
                        context.drawImage(left3, square.x - offset, square.y, square.width, square.height);
                        break;
                }
                break;
            }
            case ("right"): {

                switch (square.step) {
                    case (1):
                        context.drawImage(right1, square.x - offset, square.y, square.width, square.height);
                        break;
                    case (2):
                        context.drawImage(right2, square.x - offset, square.y, square.width, square.height);
                        break;
                    case (3):
                        context.drawImage(right3, square.x - offset, square.y, square.width, square.height);
                        break;
                }
                break;
            }

        }
    }
    else {
        context.drawImage(deathTab[square.stateOfDecay], square.x - offset, square.y, square.width, square.height);
    }

    powerUpTab.forEach(pickPowerup)
    if (stopGame == false) {
        myFrame = window.requestAnimationFrame(loop);
    }


};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
function doWhichKey(e) {
    bombcd = false
    e = e || window.event;
    let charCode: number = e.keyCode || e.which;
    if (charCode == 32 && boardTab[Math.round(square.x / blockSize)][Math.round(square.y / blockSize)] == 0 && square.bombs > 0) {
        bombindex++
        let newBomb: Bomb = new Bomb(Math.round(square.x / blockSize), Math.round(square.y / blockSize), bombindex)
        newBomb.place()
    }
    setTimeout(function () { bombcd = true }, 200);
}

window.addEventListener('keypress', function (e) {
    if (bombcd) {
        doWhichKey(e);
    }

}, false);
startLoop()

