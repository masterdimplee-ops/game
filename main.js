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

            gravity: {
                y:900
            },

            debug:false

        }

    },


  scene: [

    Boot,
    Menu,
    Level1,
    Level2       
]

};


const game = new Phaser.Game(config);
