const config = {
    type: Phaser.AUTO,
    width: 900,
    height: 500,
    backgroundColor: "#87CEEB",
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 800 },
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

function preload() {

    // Membuat tekstur sederhana tanpa gambar
    this.add.graphics()
        .fillStyle(0x00aa00)
        .fillRect(0,0,80,20)
        .generateTexture("ground",80,20);

    this.add.graphics()
        .fillStyle(0xff4444)
        .fillRect(0,0,40,50)
        .generateTexture("player",40,50);

}

function create() {

    platforms = this.physics.add.staticGroup();

    platforms.create(450,490,"ground").setScale(12,1).refreshBody();

    platforms.create(300,380,"ground");

    platforms.create(600,300,"ground");

    platforms.create(760,220,"ground");

    player = this.physics.add.sprite(100,300,"player");

    player.setBounce(0.1);

    player.setCollideWorldBounds(true);

    this.physics.add.collider(player, platforms);

    cursors = this.input.keyboard.createCursorKeys();

}

function update() {

    if(cursors.left.isDown){
        player.setVelocityX(-220);
    }
    else if(cursors.right.isDown){
        player.setVelocityX(220);
    }
    else{
        player.setVelocityX(0);
    }

    if(cursors.up.isDown && player.body.touching.down){
        player.setVelocityY(-500);
    }

}
