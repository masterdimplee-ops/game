const config = {
    type: Phaser.AUTO,

    width: 900,
    height: 500,

    parent: "game",

    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 800
            },
            debug: false
        }
    },

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};


const game = new Phaser.Game(config);


let player;
let platforms;
let cursors;


// Load aset
function preload() {

    // karakter sementara (kotak)
    this.load.image(
        "player",
        "https://labs.phaser.io/assets/sprites/phaser-dude.png"
    );

}


// Membuat dunia game
function create() {


    // membuat platform
    platforms = this.physics.add.staticGroup();


    platforms.create(
        450,
        480,
        null
    )
    .setDisplaySize(900,40)
    .refreshBody();



    platforms.create(
        300,
        350,
        null
    )
    .setDisplaySize(200,20)
    .refreshBody();



    platforms.create(
        650,
        250,
        null
    )
    .setDisplaySize(200,20)
    .refreshBody();



    // player
    player = this.physics.add.sprite(
        100,
        300,
        "player"
    );


    player.setScale(0.8);

    player.setBounce(0.2);

    player.setCollideWorldBounds(true);



    // collision player dengan platform
    this.physics.add.collider(
        player,
        platforms
    );



    // keyboard
    cursors = this.input.keyboard.createCursorKeys();

}


// Update setiap frame
function update() {


    if(cursors.left.isDown){

        player.setVelocityX(-250);

    }

    else if(cursors.right.isDown){

        player.setVelocityX(250);

    }

    else{

        player.setVelocityX(0);

    }



    // lompat

    if(
        cursors.up.isDown &&
        player.body.touching.down
    ){

        player.setVelocityY(-450);

    }

}
