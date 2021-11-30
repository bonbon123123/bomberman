var context = document.getElementById("board").getContext("2d");
var timerCanvas = document.getElementById("timer").getContext("2d");
var brick1 = new Image();
brick1.src = './sprites/brick1.png';
var brick2 = new Image();
brick2.src = './sprites/brick2.png';
var brick3 = new Image();
brick3.src = './sprites/brick3.png';
var brick4 = new Image();
brick4.src = './sprites/brick4.png';
var brick5 = new Image();
brick5.src = './sprites/brick5.png';
var brick6 = new Image();
brick6.src = './sprites/brick6.png';
var wall = new Image();
wall.src = './sprites/wall.png';
var down1 = new Image();
down1.src = "./sprites/down1.png";
var down2 = new Image();
down2.src = "./sprites/down2.png";
var down3 = new Image();
down3.src = "./sprites/down3.png";
var up1 = new Image();
up1.src = "./sprites/up1.png";
var up2 = new Image();
up2.src = "./sprites/up2.png";
var up3 = new Image();
up3.src = "./sprites/up3.png";
var left1 = new Image();
left1.src = "./sprites/left1.png";
var left2 = new Image();
left2.src = "./sprites/left2.png";
var left3 = new Image();
left3.src = "./sprites/left3.png";
var right1 = new Image();
right1.src = "./sprites/right1.png";
var right2 = new Image();
right2.src = "./sprites/right2.png";
var right3 = new Image();
right3.src = "./sprites/right3.png";
var bomb1 = new Image();
bomb1.src = "./sprites/bomb1.png";
var bomb2 = new Image();
bomb2.src = "./sprites/bomb2.png";
var bomb3 = new Image();
bomb3.src = "./sprites/bomb3.png";
var xCenter1 = new Image();
xCenter1.src = "./sprites/xCenter1.png";
var xCenter2 = new Image();
xCenter2.src = "./sprites/xCenter2.png";
var xCenter3 = new Image();
xCenter3.src = "./sprites/xCenter3.png";
var xCenter4 = new Image();
xCenter4.src = "./sprites/xCenter4.png";
var xCenterTab = [xCenter1, xCenter2, xCenter3, xCenter4, xCenter3, xCenter2, xCenter1];
var xDown1 = new Image();
xDown1.src = "./sprites/xDown1.png";
var xDown2 = new Image();
xDown2.src = "./sprites/xDown2.png";
var xDown3 = new Image();
xDown3.src = "./sprites/xDown3.png";
var xDown4 = new Image();
xDown4.src = "./sprites/xDown4.png";
var xDownTab = [xDown1, xDown2, xDown3, xDown4, xDown3, xDown2, xDown1];
var xUp1 = new Image();
xUp1.src = "./sprites/xUp1.png";
var xUp2 = new Image();
xUp2.src = "./sprites/xUp2.png";
var xUp3 = new Image();
xUp3.src = "./sprites/xUp3.png";
var xUp4 = new Image();
xUp4.src = "./sprites/xUp4.png";
var xUpTab = [xUp1, xUp2, xUp3, xUp4, xUp3, xUp2, xUp1];
var xLeft1 = new Image();
xLeft1.src = "./sprites/xLeft1.png";
var xLeft2 = new Image();
xLeft2.src = "./sprites/xLeft2.png";
var xLeft3 = new Image();
xLeft3.src = "./sprites/xLeft3.png";
var xLeft4 = new Image();
xLeft4.src = "./sprites/xLeft4.png";
var xLeftTab = [xLeft1, xLeft2, xLeft3, xLeft4, xLeft3, xLeft2, xLeft1];
var xRight1 = new Image();
xRight1.src = "./sprites/xRight1.png";
var xRight2 = new Image();
xRight1.src = "./sprites/xRight1.png";
var xRight3 = new Image();
xRight3.src = "./sprites/xRight3.png";
var xRight4 = new Image();
xRight4.src = "./sprites/xRight4.png";
var xRightTab = [xRight1, xRight2, xRight3, xRight4, xRight3, xRight2, xRight1];
var xVertical1 = new Image();
xVertical1.src = "./sprites/xVertical1.png";
var xVertical2 = new Image();
xVertical2.src = "./sprites/xVertical2.png";
var xVertical3 = new Image();
xVertical3.src = "./sprites/xVertical3.png";
var xVertical4 = new Image();
xVertical4.src = "./sprites/xVertical4.png";
var xVerticalTab = [xVertical1, xVertical2, xVertical3, xVertical4, xVertical3, xVertical2, xVertical1];
var xHorizontal1 = new Image();
xHorizontal1.src = "./sprites/xHorizontal1.png";
var xHorizontal2 = new Image();
xHorizontal2.src = "./sprites/xHorizontal2.png";
var xHorizontal3 = new Image();
xHorizontal3.src = "./sprites/xHorizontal3.png";
var xHorizontal4 = new Image();
xHorizontal4.src = "./sprites/xHorizontal4.png";
var xHorizontalTab = [xHorizontal1, xHorizontal2, xHorizontal3, xHorizontal4, xHorizontal3, xHorizontal2, xHorizontal1];
var dead1 = new Image();
dead1.src = "./sprites/dead1.png";
var dead2 = new Image();
dead2.src = "./sprites/dead2.png";
var dead3 = new Image();
dead3.src = "./sprites/dead3.png";
var dead4 = new Image();
dead4.src = "./sprites/dead4.png";
var dead5 = new Image();
dead5.src = "./sprites/dead5.png";
var dead6 = new Image();
dead6.src = "./sprites/dead6.png";
var dead7 = new Image();
dead7.src = "./sprites/dead7.png";
var dead8 = new Image();
dead8.src = "./sprites/dead8.png";
var deathTab = [dead1, dead2, dead3, dead4, dead5, dead6, dead7, dead8];
var enemy1left1 = new Image();
enemy1left1.src = "./sprites/enemy1left1.png";
var enemy1left2 = new Image();
enemy1left2.src = "./sprites/enemy1left2.png";
var enemy1left3 = new Image();
enemy1left3.src = "./sprites/enemy1left3.png";
var enemy1leftTab = [enemy1left1, enemy1left2, enemy1left3, enemy1left2];
var enemy2left1 = new Image();
enemy2left1.src = "./sprites/enemy2left1.png";
var enemy2left2 = new Image();
enemy2left2.src = "./sprites/enemy2left2.png";
var enemy2left3 = new Image();
enemy2left3.src = "./sprites/enemy2left3.png";
var enemy2leftTab = [enemy2left1, enemy2left2, enemy2left3, enemy2left2];
var enemyleftTab = [enemy1leftTab, enemy2leftTab];
var enemy1right1 = new Image();
enemy1right1.src = "./sprites/enemy1right1.png";
var enemy1right2 = new Image();
enemy1right2.src = "./sprites/enemy1right2.png";
var enemy1right3 = new Image();
enemy1right3.src = "./sprites/enemy1right3.png";
var enemy1rightTab = [enemy1right1, enemy1right2, enemy1right3, enemy1right2];
var enemy2right1 = new Image();
enemy2right1.src = "./sprites/enemy2right1.png";
var enemy2right2 = new Image();
enemy2right2.src = "./sprites/enemy2right2.png";
var enemy2right3 = new Image();
enemy2right3.src = "./sprites/enemy2right3.png";
var enemy2rightTab = [enemy2right1, enemy2right2, enemy2right3, enemy2right2];
var enemyrightTab = [enemy1rightTab, enemy2rightTab];
var superEnemyRight1 = new Image();
superEnemyRight1.src = "./sprites/superEnemyRight1.png";
var superEnemyRight2 = new Image();
superEnemyRight2.src = "./sprites/superEnemyRight2.png";
var superEnemyRight3 = new Image();
superEnemyRight3.src = "./sprites/superEnemyRight3.png";
var superEnemyRightTab = [superEnemyRight1, superEnemyRight2, superEnemyRight3, superEnemyRight2];
var superEnemyLeft1 = new Image();
superEnemyLeft1.src = "./sprites/superEnemyLeft1.png";
var superEnemyLeft2 = new Image();
superEnemyLeft2.src = "./sprites/superEnemyLeft2.png";
var superEnemyLeft3 = new Image();
superEnemyLeft3.src = "./sprites/superEnemyLeft3.png";
var superEnemyLeftTab = [superEnemyLeft1, superEnemyLeft2, superEnemyLeft3, superEnemyLeft2];
var enemy1dead1 = new Image();
enemy1dead1.src = "./sprites/enemy1dead1.png";
var enemy1dead2 = new Image();
enemy1dead2.src = "./sprites/enemy1dead2.png";
var enemy1dead3 = new Image();
enemy1dead3.src = "./sprites/enemy1dead3.png";
var enemy1dead4 = new Image();
enemy1dead4.src = "./sprites/enemy1dead4.png";
var enemy1dead5 = new Image();
enemy1dead5.src = "./sprites/enemy1dead5.png";
var enemy2dead1 = new Image();
enemy2dead1.src = "./sprites/enemy2dead1.png";
var enemy2dead2 = new Image();
enemy2dead2.src = "./sprites/enemy2dead2.png";
var enemy2dead3 = new Image();
enemy2dead3.src = "./sprites/enemy2dead3.png";
var enemy2dead4 = new Image();
enemy2dead4.src = "./sprites/enemy2dead4.png";
var enemy2dead5 = new Image();
enemy2dead5.src = "./sprites/enemy2dead5.png";
var superEnemyDead = new Image();
superEnemyDead.src = "./sprites/superEnemyDead.png";
var superEnemyDeadTab = [superEnemyDead, enemy1dead2, enemy1dead3, enemy1dead4, enemy1dead5];
var enemy1deadTab = [enemy1dead1, enemy1dead2, enemy1dead3, enemy1dead4, enemy1dead5];
var enemy2deadTab = [enemy2dead1, enemy2dead2, enemy2dead3, enemy2dead4, enemy2dead5];
var enemyDeathTab = [enemy1deadTab, enemy2deadTab];
var bonusRangeIcon = new Image();
bonusRangeIcon.src = "./sprites/bonusRangeIcon.png";
var bonusBombIcon = new Image();
bonusBombIcon.src = "./sprites/bonusBombIcon.png";
var doorIcon = new Image();
doorIcon.src = "./sprites/doorIcon.png";
var blockSize = 50;
var bombindex = 0;
var xplotionIndex = 0;
var offset = 0;
var bombcd = true;
timerCanvas.canvas.height = blockSize * 2;
timerCanvas.canvas.width = blockSize * 16;
var timerDiv = document.getElementById("timer");
timerDiv.style.position = "absolute";
timerDiv.style.top = "100px";
timerDiv.style.left = "100px";
var contextDiv = document.getElementById("board");
console.log(contextDiv);
contextDiv.style.position = "absolute";
contextDiv.style.left = "100px";
contextDiv.style.top = "".concat((blockSize * 2) + 100, "px");
context.canvas.height = blockSize * 13;
context.canvas.width = blockSize * 16;
var enemiesOnStage = 0;
var stage = 1;
var doors = 1;
var bonusBombs = 1;
var bonusRange = 1;
// Start the frame count at 1
var frameCount = 1;
// Set the number of obstacles to match the current "level"
var lastTime = 0;
// Create a collection to hold the generated x coordinates
var obXCoors = [];
var timer = 200;
var boxTab = [];
var powerUpTab = [];
var boardTab = [];
var score = 0;
var myFrame;
var enemyTab = [];
var xplosionTab = [];
var colisions = [];
var bombTab = [];
var Bomber = /** @class */ (function () {
    function Bomber(height, width, x, xVelocity, y, yVelocity, step, direction, bombs, exposionSize, lives, died, stateOfDecay) {
        this.height = height;
        this.width = width;
        this.x = x;
        this.xVelocity = xVelocity;
        this.y = y;
        this.yVelocity = yVelocity;
        this.step = step;
        this.direction = direction;
        this.bombs = bombs;
        this.exposionSize = exposionSize;
        this.lives = lives;
        this.died = died;
        this.stateOfDecay = stateOfDecay;
    }
    return Bomber;
}());
var stopGame = false;
var square = new Bomber(blockSize, blockSize * 0.75, 15, 0, 15, 0, 1, "left", 1, 2, 2, false, 0);
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
var spawnBaboons = function (x, y) {
    setTimeout(function () {
        console.log("baboons");
        for (var i = 0; i < 6; i++) {
            var enemy = new Enemy(x, y, enemiesOnStage, x * blockSize, y * blockSize, 2, false, 1);
            enemy.myAnimation();
            enemy.controleMovement();
            enemyTab[enemiesOnStage] = enemy;
            enemiesOnStage += 1;
        }
    }, 500);
};
var endGame = function () {
    window.cancelAnimationFrame(myFrame);
    context.fillStyle = "#000000";
    context.fillRect(0, 0, blockSize * 16, blockSize * 13);
    context.font = "30px Arial";
    context.fillStyle = "white";
    context.textAlign = "center";
    square.lives -= 1;
    if (square.lives == -1) {
        context.fillText("Game Over", context.canvas.width / 2, context.canvas.height / 2);
    }
    else {
        context.fillText("Stage ".concat(stage), context.canvas.width / 2, context.canvas.height / 2);
        for (var i = 0; i < enemyTab.length; i++) {
            enemyTab[i].died = true;
            enemyTab[i] = 0;
        }
        setTimeout(function () { startLoop(); }, 3000);
    }
};
var nextStage = function () {
    stage++;
    window.cancelAnimationFrame(myFrame);
    context.fillStyle = "#000000";
    context.fillRect(0, 0, blockSize * 16, blockSize * 13);
    context.font = "30px Arial";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.fillText("Stage ".concat(stage), context.canvas.width / 2, context.canvas.height / 2);
    for (var i = 0; i < enemyTab.length; i++) {
        enemyTab[i].died = true;
        enemyTab[i] = 0;
    }
    stopGame = true;
    setTimeout(function () { startLoop(); }, 3000);
};
var animateDeath = function (i) {
    if (i == 8) {
        endGame();
    }
    else {
        square.stateOfDecay = i;
        setTimeout(function () { animateDeath(i + 1); }, 300);
    }
};
var startLoop = function () {
    stopGame = false;
    square.died = false;
    square.x = 15;
    square.y = 15;
    bombTab = [];
    obXCoors = [];
    colisions = [];
    boardTab = [];
    boxTab = [];
    timer = 200;
    for (var i = 0; i < 31; i++) {
        boardTab[i] = [];
        for (var j = 0; j < 13; j++) {
            if (i == 0 || j == 0 || i == 30 || j == 12) {
                boardTab[i][j] = "wall";
                obXCoors.push([i, j]);
            }
            else if (i % 2 == 0 && j % 2 == 0) {
                boardTab[i][j] = "wall";
                obXCoors.push([i, j]);
                var colision = new ColisionObj(i * blockSize, (i + 1) * blockSize, j * blockSize, (j + 1) * blockSize, "wall");
                colisions.push(colision);
            }
            else {
                boardTab[i][j] = 0;
            }
        }
    }
    //w grze jest pomiędzy 50 a 60
    for (var i = 0; i < 60; i++) {
        var x = getRandomInt(1, 30);
        var y = getRandomInt(1, 12);
        if (x == 1 && y == 1 || x == 1 && y == 2 || x == 2 && y == 1) {
            i--;
        }
        else {
            if (boardTab[x][y] == 0) {
                boardTab[x][y] = "box";
                boxTab.push([x, y, brick1]);
                var colision = new ColisionObj(x * blockSize, (x + 1) * blockSize, y * blockSize, (y + 1) * blockSize, "box");
                colisions.push(colision);
            }
            else {
                i--;
            }
        }
    }
    for (var i = 0; i < powerUpTab.length; i++) {
        powerUpTab[i] = 0;
    }
    for (var i = 0; i < stage; i++) {
        var x = getRandomInt(1, 30);
        var y = getRandomInt(1, 12);
        if (boardTab[x][y] == "box") {
            var powerUp = new PowerUpObj(x, y, bonusRangeIcon, "range");
            powerUpTab.push(powerUp);
        }
        else {
            i--;
        }
    }
    for (var i = 0; i < stage; i++) {
        var x = getRandomInt(1, 30);
        var y = getRandomInt(1, 12);
        if (boardTab[x][y] == "box") {
            var powerUp = new PowerUpObj(x, y, bonusBombIcon, "bomb");
            powerUpTab.push(powerUp);
        }
        else {
            i--;
        }
    }
    for (var i = 0; i < 1; i++) {
        var x = getRandomInt(1, 30);
        var y = getRandomInt(1, 12);
        if (boardTab[x][y] == "box") {
            var powerUp = new PowerUpObj(x, y, doorIcon, "doors");
            powerUpTab.push(powerUp);
        }
        else {
            i--;
        }
    }
    enemiesOnStage = 0;
    enemyTab = [];
    for (var i = 0; i < 6; i++) {
        var x = getRandomInt(1, 30);
        var y = getRandomInt(1, 12);
        if (x == 1 && y == 1 || x == 1 && y == 2 || x == 2 && y == 1) {
            i--;
        }
        else {
            if (boardTab[x][y] == 0) {
                if (stage > 2) {
                    var enemy = new Enemy(x, y, enemiesOnStage, x * blockSize, y * blockSize, 2, false, 1);
                    enemy.myAnimation();
                    enemy.controleMovement();
                    enemyTab[enemiesOnStage] = enemy;
                }
                else {
                    var enemy = new Enemy(x, y, enemiesOnStage, x * blockSize, y * blockSize, stage, false, stage - 1);
                    enemy.myAnimation();
                    enemy.controleMovement();
                    enemyTab[enemiesOnStage] = enemy;
                }
                enemiesOnStage++;
            }
            else {
                i--;
            }
        }
    }
    myFrame = window.requestAnimationFrame(loop);
};
var PowerUpObj = /** @class */ (function () {
    function PowerUpObj(x, y, image, type) {
        this.x = x;
        this.y = y;
        this.image = image;
        this.type = type;
    }
    return PowerUpObj;
}());
var ColisionObj = /** @class */ (function () {
    function ColisionObj(x1, x2, y1, y2, type) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        this.type = type;
    }
    return ColisionObj;
}());
var Enemy = /** @class */ (function () {
    function Enemy(xinTab, yinTab, id, x, y, speed, isSuper, type) {
        this.xinTab = xinTab;
        this.yinTab = yinTab;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.id = id;
        this.width = blockSize;
        this.height = blockSize;
        this.direction = "down";
        this.directionSideways = "left";
        this.animationState = 1;
        this.image = enemy1left1;
        this.died = false;
        this.isSuper = isSuper;
        this.type = type;
    }
    Enemy.prototype.controleMovement = function () {
        if (this.died == false) {
            var randomDirection = getRandomInt(1, 5);
            var that_1 = this;
            if (this.isSuper) {
                switch (randomDirection) {
                    case (1):
                        if (boardTab[this.xinTab][this.yinTab - 1] != "wall") {
                            this.moveUp();
                        }
                        else {
                            setTimeout(function () { that_1.controleMovement(); }, 5);
                        }
                        break;
                    case (2):
                        if (boardTab[this.xinTab][this.yinTab + 1] != "wall") {
                            this.moveDown();
                        }
                        else {
                            setTimeout(function () { that_1.controleMovement(); }, 5);
                        }
                        break;
                    case (3):
                        if (boardTab[this.xinTab - 1][this.yinTab] != "wall") {
                            this.moveLeft();
                        }
                        else {
                            setTimeout(function () { that_1.controleMovement(); }, 5);
                        }
                        break;
                    case (4):
                        if (boardTab[this.xinTab + 1][this.yinTab] != "wall") {
                            this.moveRight();
                        }
                        else {
                            setTimeout(function () { that_1.controleMovement(); }, 5);
                        }
                        break;
                }
            }
            else {
                switch (randomDirection) {
                    case (1):
                        if (boardTab[this.xinTab][this.yinTab - 1] == 0) {
                            this.moveUp();
                        }
                        else {
                            setTimeout(function () { that_1.controleMovement(); }, 5);
                        }
                        break;
                    case (2):
                        if (boardTab[this.xinTab][this.yinTab + 1] == 0) {
                            this.moveDown();
                        }
                        else {
                            setTimeout(function () { that_1.controleMovement(); }, 5);
                        }
                        break;
                    case (3):
                        if (boardTab[this.xinTab - 1][this.yinTab] == 0) {
                            this.moveLeft();
                        }
                        else {
                            setTimeout(function () { that_1.controleMovement(); }, 5);
                        }
                        break;
                    case (4):
                        if (boardTab[this.xinTab + 1][this.yinTab] == 0) {
                            this.moveRight();
                        }
                        else {
                            setTimeout(function () { that_1.controleMovement(); }, 5);
                        }
                        break;
                }
            }
        }
    };
    Enemy.prototype.moveUp = function () {
        if (this.died == false) {
            this.direction = "up";
            this.y -= this.speed;
            var that_2 = this;
            if (square.x + square.width > that_2.x && square.x < this.x + this.width
                && square.y + square.height > this.y && square.y < this.y + this.height) {
                if (square.died == false) {
                    square.died = true;
                    animateDeath(0);
                }
            }
            if (this.y / blockSize == (this.yinTab - 1)) {
                this.yinTab -= 1;
                if (this.isSuper) {
                    if (boardTab[this.xinTab][this.yinTab - 1] == "wall" || boardTab[this.xinTab][this.yinTab - 1] == undefined) {
                        var randomDirection = getRandomInt(1, 10);
                        if (randomDirection == 1) {
                            this.controleMovement();
                        }
                        else {
                            this.moveDown();
                            this.directionSideways = "right";
                        }
                        //this.controleMovement()
                    }
                    else {
                        var randomDirection = getRandomInt(1, 20);
                        if (randomDirection == 1) {
                            this.controleMovement();
                        }
                        else {
                            setTimeout(function () { that_2.moveUp(); }, 5);
                        }
                    }
                }
                else {
                    if (boardTab[this.xinTab][this.yinTab - 1] != 0) {
                        var randomDirection = getRandomInt(1, 3);
                        if (randomDirection == 1) {
                            this.controleMovement();
                        }
                        else {
                            this.moveDown();
                            this.directionSideways = "right";
                        }
                        //this.controleMovement()
                    }
                    else {
                        var randomDirection = getRandomInt(1, 5);
                        if (randomDirection == 1) {
                            this.controleMovement();
                        }
                        else {
                            setTimeout(function () { that_2.moveUp(); }, 5);
                        }
                    }
                }
            }
            else {
                setTimeout(function () { that_2.moveUp(); }, 5);
            }
        }
    };
    Enemy.prototype.moveDown = function () {
        if (this.died == false) {
            this.direction = "down";
            this.y += this.speed;
            var that_3 = this;
            if (square.x + square.width > that_3.x && square.x < this.x + this.width
                && square.y + square.height > this.y && square.y < this.y + this.height) {
                if (square.died == false) {
                    square.died = true;
                    animateDeath(0);
                }
            }
            if (this.y / blockSize == (this.yinTab + 1)) {
                this.yinTab += 1;
                if (this.isSuper) {
                    if (boardTab[this.xinTab][this.yinTab + 1] == "wall" || boardTab[this.xinTab][this.yinTab + 1] == undefined) {
                        var randomDirection = getRandomInt(1, 10);
                        if (randomDirection == 1) {
                            this.controleMovement();
                        }
                        else {
                            this.moveUp();
                            this.directionSideways = "right";
                        }
                        //this.controleMovement()
                    }
                    else {
                        var randomDirection = getRandomInt(1, 20);
                        if (randomDirection == 1) {
                            this.controleMovement();
                        }
                        else {
                            setTimeout(function () { that_3.moveDown(); }, 5);
                        }
                    }
                }
                else {
                    if (boardTab[this.xinTab][this.yinTab + 1] != 0) {
                        var randomDirection = getRandomInt(1, 3);
                        if (randomDirection == 1) {
                            this.controleMovement();
                        }
                        else {
                            this.moveUp();
                            this.directionSideways = "right";
                        }
                        //this.controleMovement()
                    }
                    else {
                        var randomDirection = getRandomInt(1, 5);
                        if (randomDirection == 1) {
                            this.controleMovement();
                        }
                        else {
                            setTimeout(function () { that_3.moveDown(); }, 5);
                        }
                    }
                }
            }
            else {
                setTimeout(function () { that_3.moveDown(); }, 5);
            }
        }
    };
    Enemy.prototype.moveRight = function () {
        if (this.died == false) {
            this.direction = "right";
            this.directionSideways = "right";
            this.x += this.speed;
            var that_4 = this;
            if (square.x + square.width > that_4.x && square.x < this.x + this.width
                && square.y + square.height > this.y && square.y < this.y + this.height) {
                if (square.died == false) {
                    square.died = true;
                    animateDeath(0);
                }
            }
            if (this.x / blockSize == this.xinTab + 1) {
                this.xinTab += 1;
                if (this.isSuper) {
                    if (boardTab[this.xinTab + 1][this.yinTab] == "wall" || boardTab[this.xinTab + 1][this.yinTab] == undefined) {
                        var randomDirection = getRandomInt(1, 10);
                        if (randomDirection == 1) {
                            this.controleMovement();
                        }
                        else {
                            this.moveLeft();
                        }
                        //this.controleMovement()
                    }
                    else {
                        var randomDirection = getRandomInt(1, 20);
                        if (randomDirection == 1) {
                            this.controleMovement();
                        }
                        else {
                            setTimeout(function () { that_4.moveRight(); }, 5);
                        }
                    }
                }
                else {
                    if (boardTab[this.xinTab + 1][this.yinTab] != 0) {
                        var randomDirection = getRandomInt(1, 3);
                        if (randomDirection == 1) {
                            this.controleMovement();
                        }
                        else {
                            this.moveLeft();
                        }
                        //this.controleMovement()
                    }
                    else {
                        var randomDirection = getRandomInt(1, 5);
                        if (randomDirection == 1) {
                            this.controleMovement();
                        }
                        else {
                            setTimeout(function () { that_4.moveRight(); }, 5);
                        }
                    }
                }
            }
            else {
                setTimeout(function () { that_4.moveRight(); }, 5);
            }
        }
    };
    Enemy.prototype.moveLeft = function () {
        if (this.died == false) {
            this.direction = "left";
            this.directionSideways = "left";
            this.x -= this.speed;
            var that_5 = this;
            if (square.x + square.width > that_5.x && square.x < this.x + this.width
                && square.y + square.height > this.y && square.y < this.y + this.height) {
                if (square.died == false) {
                    square.died = true;
                    animateDeath(0);
                }
            }
            if (this.x / blockSize == this.xinTab - 1) {
                this.xinTab -= 1;
                if (this.isSuper) {
                    if (boardTab[this.xinTab - 1][this.yinTab] == "wall" || boardTab[this.xinTab - 1][this.yinTab] == undefined) {
                        var randomDirection = getRandomInt(1, 10);
                        if (randomDirection == 1) {
                            this.controleMovement();
                        }
                        else {
                            this.moveRight();
                        }
                        //this.controleMovement()
                    }
                    else {
                        var randomDirection = getRandomInt(1, 20);
                        if (randomDirection == 1) {
                            this.controleMovement();
                        }
                        else {
                            setTimeout(function () { that_5.moveLeft(); }, 5);
                        }
                    }
                }
                else {
                    if (boardTab[this.xinTab - 1][this.yinTab] != 0) {
                        var randomDirection = getRandomInt(1, 3);
                        if (randomDirection == 1) {
                            this.controleMovement();
                        }
                        else {
                            this.moveRight();
                        }
                        //this.controleMovement()
                    }
                    else {
                        var randomDirection = getRandomInt(1, 5);
                        if (randomDirection == 1) {
                            this.controleMovement();
                        }
                        else {
                            setTimeout(function () { that_5.moveLeft(); }, 5);
                        }
                    }
                }
            }
            else {
                setTimeout(function () { that_5.moveLeft(); }, 5);
            }
        }
    };
    Enemy.prototype.myAnimation = function () {
        if (this.died == false) {
            this.animationState += 1;
            if (this.animationState == 4) {
                this.animationState = 0;
            }
            if (this.isSuper) {
                switch (this.directionSideways) {
                    case ("right"):
                        this.image = superEnemyRightTab[this.animationState];
                        break;
                    case ("left"):
                        this.image = superEnemyLeftTab[this.animationState];
                        break;
                }
            }
            else {
                switch (this.directionSideways) {
                    case ("right"):
                        this.image = enemyrightTab[this.type][this.animationState];
                        break;
                    case ("left"):
                        this.image = enemyleftTab[this.type][this.animationState];
                        break;
                }
            }
            var that_6 = this;
            setTimeout(function () { that_6.myAnimation(); }, 200);
        }
    };
    Enemy.prototype.die = function () {
        if (this.died == false) {
            this.animationState = 0;
            this.died = true;
        }
        else {
            this.animationState += 1;
        }
        if (this.animationState == 5) {
            enemyTab[this.id] = 0;
            score += 100;
            enemiesOnStage -= 1;
        }
        if (this.isSuper) {
            this.image = superEnemyDeadTab[this.animationState];
        }
        else {
            this.image = enemyDeathTab[this.type][this.animationState];
        }
        var that = this;
        setTimeout(function () { that.die(); }, 500);
    };
    return Enemy;
}());
var Bomb = /** @class */ (function () {
    function Bomb(x, y, id) {
        this.x = x;
        this.y = y;
        this.id = id;
        this.lastState = 1;
        this.isSolid = false;
        this.image = bomb1;
        this.explotionCycle = 0;
        this.numberOfXplotions = 0;
        this.numberOfXplotionsDone = 0;
    }
    Bomb.prototype.place = function () {
        square.bombs -= 1;
        bombTab[this.id] = this;
        boardTab[this.x][this.y] = this;
        var that = this;
        setTimeout(function () { that.changeState(); }, 200);
        setTimeout(function () { that.xplode(); }, 3000);
        //context.drawImage(bomb2, (this.x * blockSize) - offset, this.y, blockSize, blockSize);
    };
    Bomb.prototype.changeState = function () {
        if (bombTab[this.id] != undefined) {
            if (bombTab[this.id].image == (bomb1)) {
                bombTab[this.id].image = (bomb2);
                this.lastState = 1;
            }
            else if (bombTab[this.id].image == (bomb2)) {
                if (this.lastState == 1) {
                    bombTab[this.id].image = (bomb3);
                }
                else {
                    bombTab[this.id].image = (bomb1);
                }
                this.lastState = 2;
            }
            else if (bombTab[this.id].image == (bomb3)) {
                bombTab[this.id].image = (bomb2);
                this.lastState = 3;
            }
            var that_7 = this;
            setTimeout(function () { that_7.changeState(); }, 200);
        }
    };
    Bomb.prototype.xplode = function () {
        //colisions.findIndex(x => x.id === '45')
        for (var i = 0; i < colisions.length; i++) {
            if (colisions[i].type == "bomb" && colisions[i].x1 == this.x * blockSize && colisions[i].y1 == this.y * blockSize) {
                colisions.splice(i, 1);
            }
        }
        boardTab[this.x][this.y] = 0;
        bombTab[this.id] = 0;
        this.startAnimatingXplotion(this.x, this.y, xCenterTab, this.id);
        this.numberOfXplotions++;
        setTimeout(function () { square.bombs++; }, 200);
        this.destroyAround();
    };
    Bomb.prototype.demolishWall = function (x, y) {
        var that = this;
        for (var i = 0; i < boxTab.length; i++) {
            if (boxTab[i][0] == x && boxTab[i][1] == y) {
                if (boxTab[i][2] == brick1) {
                    boxTab[i][2] = brick2;
                    setTimeout(function () { that.demolishWall(x, y); }, 100);
                }
                else if (boxTab[i][2] == brick2) {
                    boxTab[i][2] = brick3;
                    setTimeout(function () { that.demolishWall(x, y); }, 100);
                }
                else if (boxTab[i][2] == brick3) {
                    boxTab[i][2] = brick4;
                    setTimeout(function () { that.demolishWall(x, y); }, 100);
                }
                else if (boxTab[i][2] == brick4) {
                    boxTab[i][2] = brick5;
                    setTimeout(function () { that.demolishWall(x, y); }, 100);
                }
                else if (boxTab[i][2] == brick5) {
                    boxTab[i][2] = brick6;
                    setTimeout(function () { that.demolishWall(x, y); }, 100);
                }
                else if (boxTab[i][2] == brick6) {
                    boxTab[i] = 0;
                    for (var i_1 = 0; i_1 < colisions.length; i_1++) {
                        if (colisions[i_1].type == "box" && colisions[i_1].x1 == (x) * blockSize && colisions[i_1].y1 == y * blockSize) {
                            colisions.splice(i_1, 1);
                            var discoveredDoor = false;
                            for (var i_2 = 0; i_2 < powerUpTab.length; i_2++) {
                                if (powerUpTab[i_2].type == "doors" && powerUpTab[i_2].x == (x) && powerUpTab[i_2].y == y) {
                                    discoveredDoor = true;
                                }
                            }
                            if (discoveredDoor) {
                                boardTab[x][y] = "doors";
                            }
                            else {
                                boardTab[x][y] = 0;
                            }
                        }
                    }
                }
            }
        }
    };
    Bomb.prototype.progressExposion = function () {
        this.explotionCycle += 1;
        var that = this;
        setTimeout(function () { that.progressExposion(); }, 10);
    };
    Bomb.prototype.animatexplode = function (x, y, img, bombId) {
        var that = this;
        var myId = "".concat(x).concat(y);
        if (x == Math.round(square.x / blockSize) && y == Math.round(square.y / blockSize)) {
            if (square.died == false) {
                square.died = true;
                animateDeath(0);
            }
        }
        enemyTab.forEach(function (enemy) {
            if (enemy != 0) {
                if (x == enemy.xinTab && y == enemy.yinTab && enemy.died == false) {
                    enemy.die();
                }
            }
        });
        if (this.numberOfXplotions == this.numberOfXplotionsDone) {
            this.numberOfXplotionsDone = 0;
            this.explotionCycle++;
        }
        for (var i = 0; i < xplosionTab.length; i++) {
            if (xplosionTab[i][2] == myId && xplosionTab[i][4] == bombId) {
                if (this.explotionCycle == 6) {
                    xplosionTab[i] = 0;
                }
                else {
                    xplosionTab[i][3] = img[this.explotionCycle];
                    this.numberOfXplotionsDone += 1;
                    setTimeout(function () { that.animatexplode(x, y, img, bombId); }, 100);
                }
            }
        }
    };
    Bomb.prototype.startAnimatingXplotion = function (x, y, img, bombId) {
        var myId = "".concat(x).concat(y);
        var that = this;
        xplosionTab.push([x, y, myId, img[this.explotionCycle], bombId]);
        setTimeout(function () { that.animatexplode(x, y, img, bombId); }, 200);
    };
    Bomb.prototype.destroyAround = function () {
        var upSmash = false;
        var downSmash = false;
        var rightSmash = false;
        var leftSmash = false;
        for (var i = 1; i <= square.exposionSize; i++) {
            if (this.x + i < 30) {
                if (boardTab[this.x + i][this.y] == "wall") {
                    upSmash = true;
                }
                else if (boardTab[this.x + i][this.y] == "box" && upSmash == false) {
                    upSmash = true;
                    this.demolishWall(this.x + i, this.y);
                }
                else if (boardTab[this.x + i][this.y] == "doors" && upSmash == false) {
                    upSmash = true;
                    spawnBaboons(this.x + i, this.y);
                }
                else if (boardTab[this.x + i][this.y] == 0 && upSmash == false) {
                    if (i == square.exposionSize) {
                        this.numberOfXplotions++;
                        this.startAnimatingXplotion(this.x + i, this.y, xRightTab, this.id);
                    }
                    else {
                        this.numberOfXplotions++;
                        this.startAnimatingXplotion(this.x + i, this.y, xHorizontalTab, this.id);
                    }
                }
            }
            if (this.x - i > 0) {
                if (boardTab[this.x - i][this.y] == "wall") {
                    downSmash = true;
                }
                else if (boardTab[this.x - i][this.y] == "box" && downSmash == false) {
                    downSmash = true;
                    this.demolishWall(this.x - i, this.y);
                }
                else if (boardTab[this.x - i][this.y] == "doors" && downSmash == false) {
                    downSmash = true;
                    spawnBaboons(this.x - i, this.y);
                }
                else if (boardTab[this.x - i][this.y] == 0 && downSmash == false) {
                    if (i == square.exposionSize) {
                        this.numberOfXplotions++;
                        this.startAnimatingXplotion(this.x - i, this.y, xLeftTab, this.id);
                    }
                    else {
                        this.numberOfXplotions++;
                        this.startAnimatingXplotion(this.x - i, this.y, xHorizontalTab, this.id);
                    }
                }
            }
            if (this.y - i > 0) {
                if (boardTab[this.x][this.y - i] == "wall") {
                    rightSmash = true;
                }
                else if (boardTab[this.x][this.y - i] == "box" && rightSmash == false) {
                    rightSmash = true;
                    this.demolishWall(this.x, this.y - i);
                }
                else if (boardTab[this.x][this.y - i] == "doors" && rightSmash == false) {
                    rightSmash = true;
                    spawnBaboons(this.x, this.y - i);
                }
                else if (boardTab[this.x][this.y - i] == 0 && rightSmash == false) {
                    if (i == square.exposionSize) {
                        this.numberOfXplotions++;
                        this.startAnimatingXplotion(this.x, this.y - i, xUpTab, this.id);
                    }
                    else {
                        this.numberOfXplotions++;
                        this.startAnimatingXplotion(this.x, this.y - i, xVerticalTab, this.id);
                    }
                }
            }
            if (this.y - i < 12) {
                if (boardTab[this.x][this.y + i] == "wall") {
                    leftSmash = true;
                }
                if (boardTab[this.x][this.y + i] == "box" && leftSmash == false) {
                    leftSmash = true;
                    this.demolishWall(this.x, this.y + i);
                }
                else if (boardTab[this.x][this.y + i] == "doors" && leftSmash == false) {
                    leftSmash = true;
                    spawnBaboons(this.x, this.y + i);
                }
                else if (boardTab[this.x][this.y + i] == 0 && leftSmash == false) {
                    if (i == square.exposionSize) {
                        this.numberOfXplotions++;
                        this.startAnimatingXplotion(this.x, this.y + i, xDownTab, this.id);
                    }
                    else {
                        this.numberOfXplotions++;
                        this.startAnimatingXplotion(this.x, this.y + i, xVerticalTab, this.id);
                    }
                }
            }
        }
    };
    return Bomb;
}());
var controller = {
    left: false,
    right: false,
    up: false,
    down: false,
    keyListener: function (event) {
        var key_state = (event.type == "keydown") ? true : false;
        switch (event.keyCode) {
            case 37: // left key
                controller.left = key_state;
                break;
            case 38: // up key
                controller.up = key_state;
                break;
            case 39: // right key
                controller.right = key_state;
                break;
            case 40: // right key
                controller.down = key_state;
                break;
        }
    }
};
var loop = function () {
    if (Date.now() - lastTime > 1000) {
        lastTime = Date.now();
        timer--;
        timerCanvas.fillStyle = "#a1a1a1";
        timerCanvas.fillRect(0, 0, blockSize * 16, blockSize * 2);
        timerCanvas.font = "bold 28px verdana, sans-serif ";
        timerCanvas.fillStyle = "#ffffff";
        timerCanvas.fillText("Time ".concat(timer), blockSize * 0.5, blockSize * 1.5);
        timerCanvas.fillText("Score ".concat(score), blockSize * 8, blockSize * 1.5);
        timerCanvas.fillText("Left ".concat(square.lives), blockSize * 12, blockSize * 1.5);
        if (timer == 1) {
            enemiesOnStage = 6;
            enemyTab = [];
            for (var i = 0; i < enemiesOnStage; i++) {
                var x = getRandomInt(1, 30);
                var y = getRandomInt(1, 12);
                if (x == 1 && y == 1 || x == 1 && y == 2 || x == 2 && y == 1) {
                    i--;
                }
                else {
                    if (boardTab[x][y] == 0) {
                        var enemy = new Enemy(x, y, i, x * blockSize, y * blockSize, 5, true, 1);
                        enemy.myAnimation();
                        enemy.controleMovement();
                        enemyTab[i] = enemy;
                    }
                    else {
                        i--;
                    }
                }
            }
        }
        if (timer <= 0) {
            timer = 0;
        }
    }
    if (square.x > blockSize * 8 && square.x < blockSize * 23) {
        offset = square.x - blockSize * 8;
    }
    else if (square.x < blockSize * 8) {
        offset = 0;
    }
    if (controller.up || controller.left || controller.right || controller.down) {
        frameCount++;
        if (frameCount % 5 == 0) {
            square.step += 1;
        }
        if (square.step == 4) {
            square.step = 1;
        }
    }
    //wyrzuć squarevelocity poza elsa żeby było jak w oryginale
    if (controller.up) {
        if (square.direction == "down" && controller.down) {
        }
        else {
            square.direction = "up";
            square.yVelocity -= 2;
        }
    }
    if (controller.left) {
        if (square.direction == "right" && controller.right) {
        }
        else {
            square.direction = "left";
            square.xVelocity -= 2;
        }
    }
    if (controller.right) {
        if (square.direction == "left" && controller.left) {
        }
        else {
            square.direction = "right";
            square.xVelocity += 2;
        }
    }
    if (controller.down) {
        if (square.direction == "up" && controller.up) {
        }
        else {
            square.direction = "down";
            square.yVelocity += 2;
        }
    }
    // square.yVelocity += 1.5;// gravity
    var myBool1 = true;
    var myBool2 = true;
    colisions.forEach(function (element) {
        if (square.x + square.width + square.xVelocity > element.x1 && square.x + square.xVelocity < element.x2
            && square.y + square.height > element.y1 && square.y < element.y2) {
            myBool1 = false;
        }
        if (square.y + square.height + square.yVelocity > element.y1 && square.y + square.yVelocity < element.y2
            && square.x + square.width > element.x1 && square.x < element.x2) {
            myBool2 = false;
        }
    });
    if (square.died == false) {
        if (myBool1) {
            square.x += square.xVelocity;
        }
        if (myBool2) {
            square.y += square.yVelocity;
        }
    }
    square.xVelocity *= 0; // friction
    square.yVelocity *= 0; // friction
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
    }
    else if (square.x > blockSize * 29.2) { // if square goes past right boundary
        square.x = blockSize * 29.2;
    }
    function pickPowerup(element, index) {
        if (square.x + square.width > element.x * blockSize && square.x < element.x * blockSize + blockSize
            && square.y + square.height > element.y * blockSize && square.y < element.y * blockSize + blockSize) {
            console.log(element.type);
            if (element.type == "bomb") {
                square.bombs += 1;
                score += 1000;
                powerUpTab[index] = 0;
            }
            if (element.type == "range") {
                square.exposionSize += 1;
                score += 1000;
                powerUpTab[index] = 0;
            }
            if (element.type == "doors") {
                powerUpTab[index] = 0;
                nextStage();
                //if (enemiesOnStage == 0) {
                //}
            }
        }
    }
    context.fillStyle = "#388700";
    context.fillRect(0, 0, blockSize * 31, blockSize * 13); // x, y, width, height
    powerUpTab.forEach(function (power) {
        if (power != 0) {
            context.drawImage(power.image, power.x * blockSize - offset, power.y * blockSize, blockSize, blockSize);
        }
    });
    boxTab.forEach(function (box) {
        if (box != 0) {
            context.drawImage(box[2], box[0] * blockSize - offset, box[1] * blockSize, blockSize, blockSize);
        }
    });
    obXCoors.forEach(function (obXCoor) {
        context.drawImage(wall, obXCoor[0] * blockSize - offset, obXCoor[1] * blockSize, blockSize, blockSize);
    });
    xplosionTab.forEach(function (xplosion, i) {
        if (xplosion != 0) {
            context.drawImage(xplosion[3], xplosion[0] * blockSize - offset, xplosion[1] * blockSize, blockSize, blockSize);
        }
    });
    bombTab.forEach(function (bomb, i) {
        if (bomb != 0) {
            context.drawImage(bomb.image, bomb.x * blockSize - offset, bomb.y * blockSize, blockSize, blockSize);
            if (bomb.isSolid == false) {
                if (square.x + square.width < bomb.x * blockSize || square.x - blockSize * 0.2 > bomb.x * blockSize + square.width || square.y + square.height < bomb.y * blockSize || square.y > bomb.y * blockSize + square.height - blockSize * 0.02) {
                    var colision = new ColisionObj(bomb.x * blockSize, (bomb.x + 1) * blockSize, bomb.y * blockSize, (bomb.y + 1) * blockSize, "bomb");
                    boardTab[bomb.x][bomb.y].isSolid = true;
                    colisions.push(colision);
                }
            }
        }
    });
    enemyTab.forEach(function (enemy) {
        if (enemy != 0) {
            context.drawImage(enemy.image, (enemy.x - offset), enemy.y, enemy.width, enemy.height);
        }
    });
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
    powerUpTab.forEach(pickPowerup);
    if (stopGame == false) {
        myFrame = window.requestAnimationFrame(loop);
    }
};
window.addEventListener("keydown", controller.keyListener);
window.addEventListener("keyup", controller.keyListener);
function doWhichKey(e) {
    bombcd = false;
    e = e || window.event;
    var charCode = e.keyCode || e.which;
    if (charCode == 32 && boardTab[Math.round(square.x / blockSize)][Math.round(square.y / blockSize)] == 0 && square.bombs > 0) {
        bombindex++;
        var newBomb = new Bomb(Math.round(square.x / blockSize), Math.round(square.y / blockSize), bombindex);
        newBomb.place();
    }
    setTimeout(function () { bombcd = true; }, 200);
}
window.addEventListener('keypress', function (e) {
    if (bombcd) {
        doWhichKey(e);
    }
}, false);
startLoop();
