class Level3 extends Phaser.Scene {

    constructor() {
        super("Level3");
    }

    create() {

        // Background (jika sudah ada)
        this.add.image(400, 225, "background");

        // Score
        this.score = 0;

        this.scoreText = this.add.text(20, 20, "Score: 0", {
            fontSize: "24px",
            color: "#ffffff"
        });

        this.lifeText = this.add.text(20, 50, "❤️❤️❤️", {
            fontSize: "22px"
        });

        this.levelText = this.add.text(650, 20, "Level 3", {
            fontSize: "22px",
            color: "#ffffff"
        });

        // Platform
        this.platforms = this.physics.add.staticGroup();

        this.platforms.create(400, 430, "ground")
            .setScale(4, 1)
            .refreshBody();

        this.platforms.create(150, 340, "ground");
        this.platforms.create(400, 270, "ground");
        this.platforms.create(650, 190, "ground");
        this.platforms.create(520, 100, "ground");

        // Player
        this.player = new Player(this, 80, 360);

        this.physics.add.collider(
            this.player,
            this.platforms
        );

        // Portal Finish
        this.finish = this.add.sprite(
            740,
            50,
            "portal"
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

        // Keyboard
        this.cursors = this.input.keyboard.createCursorKeys();

    }

    completeLevel() {

        this.add.text(
            220,
            170,
            "LEVEL 3 COMPLETE!",
            {
                fontSize: "38px",
                color: "#ffff00"
            }
        );

        this.physics.pause();

        this.time.delayedCall(1500, () => {
            this.scene.start("Level4");
        });

    }

    update() {

        this.player.update(this.cursors);

    }

}
