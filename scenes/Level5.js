class Level5 extends Phaser.Scene {

    constructor() {
        super("Level5");
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

        this.scoreText = this.add.text(
            20,
            20,
            "Score: 0",
            {
                fontSize: "24px",
                color: "#ffffff"
            }
        );

        this.lifeText = this.add.text(
            20,
            50,
            "❤️❤️❤️",
            {
                fontSize: "22px"
            }
        );

        this.levelText = this.add.text(
            650,
            20,
            "Level 5",
            {
                fontSize: "22px",
                color: "#ffffff"
            }
        );

        // ====================
        // PLATFORM
        // ====================

        this.platforms = this.physics.add.staticGroup();

        this.platforms.create(400, 430, "ground")
            .setScale(4, 1)
            .refreshBody();

        this.platforms.create(120, 360, "ground");
        this.platforms.create(280, 290, "ground");
        this.platforms.create(460, 220, "ground");
        this.platforms.create(640, 150, "ground");
        this.platforms.create(760, 80, "ground");

        // ====================
        // PLAYER
        // ====================

        this.player = new Player(
            this,
            80,
            350
        );

        this.physics.add.collider(
            this.player,
            this.platforms
        );

        // ====================
        // PORTAL FINISH
        // ====================

        this.finish = this.add.sprite(
            760,
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
            this.completeGame,
            null,
            this
        );

        // ====================
        // KEYBOARD
        // ====================

        this.cursors =
            this.input.keyboard.createCursorKeys();

    }

    completeGame() {

        this.physics.pause();

        this.add.text(
            120,
            140,
            "🎉 CONGRATULATIONS! 🎉",
            {
                fontSize: "40px",
                color: "#ffff00"
            }
        );

        this.add.text(
            220,
            210,
            "YOU FINISHED THE GAME!",
            {
                fontSize: "28px",
                color: "#ffffff"
            }
        );

        this.time.delayedCall(3000, () => {

            this.scene.start("Menu");

        });

    }

    update() {

        this.player.update(this.cursors);

    }

}
