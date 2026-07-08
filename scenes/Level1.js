class Level1 extends Phaser.Scene {

    constructor() {
        super("Level1");
    }


    preload() {

        this.load.image(
            "player",
            "https://labs.phaser.io/assets/sprites/phaser-dude.png"
        );

    }


    create() {


        // ====================
        // SCORE
        // ====================

        this.score = 0;


        this.scoreText = this.add.text(
            20,
            20,
            "Score: 0",
            {
                fontSize:"24px",
                fill:"#ffffff"
            }
        );


        // ====================
        // PLATFORM
        // ====================


        let graphics = this.make.graphics({
            x:0,
            y:0,
            add:false
        });


        graphics.fillStyle(0x00aa00);

        graphics.fillRect(
            0,
            0,
            200,
            30
        );


        graphics.generateTexture(
            "ground",
            200,
            30
        );


        graphics.destroy();



        this.platforms =
        this.physics.add.staticGroup();



        this.platforms.create(
            400,
            430,
            "ground"
        )
        .setScale(4,1)
        .refreshBody();



        this.platforms.create(
            250,
            320,
            "ground"
        );


        this.platforms.create(
            600,
            230,
            "ground"
        );



        // ====================
        // PLAYER
        // ====================


        this.player =
        this.physics.add.sprite(
            100,
            250,
            "player"
        );


        this.player.setBounce(0.2);

        this.player.setCollideWorldBounds(true);



        this.physics.add.collider(
            this.player,
            this.platforms
        );



        // ====================
        // FINISH FLAG
        // ====================


        this.finish =
        this.add.rectangle(
            750,
            370,
            30,
            100,
            0xff0000
        );


        this.physics.add.existing(
            this.finish,
            true
        );



        this.physics.add.overlap(
            this.player,
            this.finish,
            this.completeLevel,
            null,
            this
        );



        // keyboard

        this.cursors =
        this.input.keyboard.createCursorKeys();


    }



    completeLevel(){

        this.add.text(
            250,
            150,
            "LEVEL COMPLETE!",
            {
                fontSize:"40px",
                fill:"#ffff00"
            }
        );


        this.physics.pause();


        // nanti pindah Level2

    }



    update(){


        if(this.cursors.left.isDown){

            this.player.setVelocityX(-250);

        }

        else if(this.cursors.right.isDown){

            this.player.setVelocityX(250);

        }

        else{

            this.player.setVelocityX(0);

        }



        if(
            this.cursors.up.isDown &&
            this.player.body.blocked.down
        ){

            this.player.setVelocityY(-450);

        }


    }

}
