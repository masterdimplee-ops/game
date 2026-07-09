class Level2 extends Phaser.Scene {

    constructor() {
        super("Level2");
    }


    preload() {

        this.load.image(
            "player",
            "https://labs.phaser.io/assets/sprites/phaser-dude.png"
        );

    }


    create() {


        // ====================
        // HUD
        // ====================

        this.add.text(
            20,
            20,
            "Level 2",
            {
                fontSize:"28px",
                fill:"#ffffff"
            }
        );


        // ====================
        // PLATFORM TEXTURE
        // ====================

        let graphics = this.make.graphics({
            x:0,
            y:0,
            add:false
        });


        graphics.fillStyle(0x8B4513);

        graphics.fillRect(
            0,
            0,
            180,
            30
        );


        graphics.generateTexture(
            "ground2",
            180,
            30
        );


        graphics.destroy();



        // ====================
        // PLATFORM
        // ====================


        this.platforms =
        this.physics.add.staticGroup();



        this.platforms.create(
            400,
            430,
            "ground2"
        )
        .setScale(4,1)
        .refreshBody();



        this.platforms.create(
            200,
            340,
            "ground2"
        );


        this.platforms.create(
            500,
            250,
            "ground2"
        );


        this.platforms.create(
            700,
            160,
            "ground2"
        );



        // ====================
        // PLAYER
        // ====================


        this.player = new Player(
            this,
            80,
            250
        );


        this.physics.add.collider(
            this.player,
            this.platforms
        );



        // ====================
        // FINISH
        // ====================


        this.finish =
        this.add.rectangle(
            750,
            100,
            30,
            100,
            0x00ffff
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



        this.cursors =
        this.input.keyboard.createCursorKeys();

    }



    completeLevel(){


        this.add.text(
            250,
            200,
            "LEVEL 2 COMPLETE!",
            {
                fontSize:"35px",
                fill:"#ffff00"
            }
        );


        this.physics.pause();


    }



    update(){

        this.player.update(this.cursors);

    }

}
