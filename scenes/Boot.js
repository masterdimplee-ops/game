class Boot extends Phaser.Scene {

    constructor() {
        super("Boot");
    }

    preload() {

        // Player
        this.load.image("player", "assets/player/player.png");

        // Musuh
        this.load.image("enemy", "assets/enemy/enemy.png");

        // Koin
        this.load.image("coin", "assets/coin/coin.png");

        // Background
        this.load.image("background", "assets/background/background.png");

        // Platform
        this.load.image("ground", "assets/tiles/ground.png");

        // Portal Finish
        this.load.image("portal", "assets/ui/portal.png");

    }

    create() {
        this.scene.start("Menu");
    }

}
