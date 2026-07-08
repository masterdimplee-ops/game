const config = {
    type: Phaser.AUTO,

    parent: "game",

    width: 800,
    height: 450,

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 900 },
            debug: false
        }
    },

    scene: {
        preload,
        create,
        update
    }
};

const game = new Phaser.Game(config);

let player;
let platforms;
let cursors;

let moveLeft = false;
let moveRight = false;
let jump = false;

function preload() {

    this.load.image(
        "player",
        "https://labs.phaser.io/assets/sprites/phaser-dude.png"
    );

}

function create() {

    // ======================
    // Membuat tekstur platform
    // ======================

    const graphics = this.make.graphics({ x: 0, y: 0, add: false });

    graphics.fillStyle(0x3cb043);

    graphics.fillRect(0, 0, 200, 30);

    graphics.generateTexture("ground", 200, 30);

    // ======================

    platforms = this.physics.add.staticGroup();

    platforms.create(400, 435, "ground").setDisplaySize(800, 30).refreshBody();

    platforms.create(220, 330, "ground");

    platforms.create(600, 240, "ground");

    player = this.physics.add.sprite(80, 300, "player");

    player.setBounce(0.1);

    player.setCollideWorldBounds(true);

    this.physics.add.collider(player, platforms);

    cursors = this.input.keyboard.createCursorKeys();

    // ======================
    // Tombol Android
    // ======================

    const leftBtn = document.getElementById("left");
    const rightBtn = document.getElementById("right");
    const jumpBtn = document.getElementById("jump");

    if (leftBtn) {

        leftBtn.addEventListener("touchstart", () => moveLeft = true);
        leftBtn.addEventListener("touchend", () => moveLeft = false);

        leftBtn.addEventListener("mousedown", () => moveLeft = true);
        leftBtn.addEventListener("mouseup", () => moveLeft = false);

    }

    if (rightBtn) {

        rightBtn.addEventListener("touchstart", () => moveRight = true);
        rightBtn.addEventListener("touchend", () => moveRight = false);

        rightBtn.addEventListener("mousedown", () => moveRight = true);
        rightBtn.addEventListener("mouseup", () => moveRight = false);

    }

    if (jumpBtn) {

        jumpBtn.addEventListener("touchstart", () => jump = true);
        jumpBtn.addEventListener("touchend", () => jump = false);

        jumpBtn.addEventListener("mousedown", () => jump = true);
        jumpBtn.addEventListener("mouseup", () => jump = false);

    }

}

function update() {

    let speed = 250;

    if (cursors.left.isDown || moveLeft) {

        player.setVelocityX(-speed);

    }

    else if (cursors.right.isDown || moveRight) {

        player.setVelocityX(speed);

    }

    else {

        player.setVelocityX(0);

    }

    if ((cursors.up.isDown || jump) && player.body.blocked.down) {

        player.setVelocityY(-500);

    }

}
