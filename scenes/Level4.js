class Level4 extends Phaser.Scene {

    constructor() {
        super("Level4");
    }

    create() {

        // ====================
        // BACKGROUND
        // ====================

        this.add.image(400, 225, "background");

        // ====================
        // HUD
        // ====================

        this.score = 0;

        this.scoreText = this.add.text(20, 20, "Score: 0", {
            fontSize: "24px",
            color: "#ffffff"
        });

        this.lifeText = this.add.text(20, 50, "❤️❤️❤️", {
            fontSize: "22px"
        });

        this.levelText = this.add.text(650, 20, "Level 4", {
            fontSize: "22px",
            color: "#ffffff"
        });

        // ====================
        // PLATFORM
        // ====================

        this.platforms = this.physics.add.staticGroup();

        this.platforms.create(400, 430, "ground")
            .setScale(4, 1)
            .refreshBody();

        this.platforms.create(150, 360, "ground");
        this.platforms.create(320, 290, "ground");
        this.platforms.create(520, 220, "ground");
        this.platforms.create(700, 150, "ground");
        this.platforms.create(500, 80, "ground");

        // ====================
        // PLAYER
        // ====================

        this.player = new Player(this, 80, 350);

        this.physics.add.collider(
            this.player,
            this.platforms
        );

        // ====================
        // PORTAL FINISH
        // ====================

        this.finish = this.add.sprite(
            500,
            30,
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

        // ====================
        // KEYBOARD
        // ====================

        this.cursors = this.input.keyboard.createCursorKeys();

    }

    completeLevel() {

        this.add.text(
            200,
            170,
            "LEVEL 4 COMPLETE!",
            {
                fontSize: "38px",
                color: "#ffff00"
            }
        );

        this.physics.pause();

        this.time.delayedCall(1500, () => {
            this.scene.start("Menu");
        });

    }

    update() {

        this.player.update(this.cursors);

    }

}
