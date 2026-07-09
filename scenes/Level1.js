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
            "Level 1",
            {
                fontSize: "22px",
                color: "#ffffff"
            }
        );

        // ====================
        // PLATFORM
        // ====================

        let graphics = this.make.graphics({
            x: 0,
            y: 0,
            add: false
        });

        graphics.fillStyle(0x00aa00);
        graphics.fillRect(0, 0, 200, 30);

        graphics.generateTexture("ground", 200, 30);
        graphics.destroy();

        this.platforms = this.physics.add.staticGroup();

        this.platforms.create(400, 430, "ground")
            .setScale(4, 1)
            .refreshBody();

        this.platforms.create(250, 320, "ground");
        this.platforms.create(600, 230, "ground");

        // ====================
        // PLAYER
        // ====================

        this.player = new Player(
            this,
            100,
            250
        );

        this.physics.add.collider(
            this.player,
            this.platforms
        );

        // ====================
        // FINISH FLAG
        // ====================

        this.finish = this.add.rectangle(
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

        // ====================
        // KEYBOARD
        // ====================

        this.cursors = this.input.keyboard.createCursorKeys();

    }

    completeLevel() {

        this.add.text(
            250,
            150,
            "LEVEL COMPLETE!",
            {
                fontSize: "40px",
                color: "#ffff00"
            }
        );

        this.physics.pause();

        this.time.delayedCall(1500, () => {
            this.scene.start("Level2");
        });

    }

    update() {

        this.player.update(this.cursors);

    }

}
