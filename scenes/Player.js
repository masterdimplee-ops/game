class Player extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {

        super(scene, x, y, "player");

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);
        this.setBounce(0.1);
    }

    update(cursors) {

        // Jalan kiri
        if (cursors.left.isDown) {
            this.setVelocityX(-200);
        }

        // Jalan kanan
        else if (cursors.right.isDown) {
            this.setVelocityX(200);
        }

        // Diam
        else {
            this.setVelocityX(0);
        }

        // Lompat
        if (cursors.up.isDown && this.body.blocked.down) {
            this.setVelocityY(-450);
        }

    }

}
