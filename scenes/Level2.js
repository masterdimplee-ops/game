class Level2 extends Phaser.Scene {

    constructor() {
        super("Level2");
    }

    create() {

        this.add.text(
            250,
            200,
            "SELAMAT DATANG DI LEVEL 2",
            {
                fontSize: "32px",
                color: "#ffffff"
            }
        );

    }

}
