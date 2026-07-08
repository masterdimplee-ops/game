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


        // membuat platform
        this.platforms = this.physics.add.staticGroup();


        this.platforms.create(
            400,
            430,
            null
        )
        .setDisplaySize(800,40)
        .refreshBody();



        this.platforms.create(
            250,
            320,
            null
        )
        .setDisplaySize(200,20)
        .refreshBody();



        this.platforms.create(
            600,
            230,
            null
        )
        .setDisplaySize(200,20)
        .refreshBody();



        // player

        this.player = this.physics.add.sprite(
            100,
            250,
            "player"
        );


        this.player.setBounce(0.2);

        this.player.setCollideWorldBounds(true);



        // tabrakan

        this.physics.add.collider(
            this.player,
            this.platforms
        );



        // keyboard

        this.cursors =
        this.input.keyboard.createCursorKeys();


    }



    update() {


        if(this.cursors.left.isDown){

            this.player.setVelocityX(-250);

        }

        else if(this.cursors.right.isDown){

            this.player.setVelocityX(250);

        }

        else {

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
