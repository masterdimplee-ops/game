class Player extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {

        super(scene, x, y, "player");

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setBounce(0.2);
        this.setCollideWorldBounds(true);

        this.speed = 250;
        this.jumpPower = 450;

    }

    update(cursors) {

        if (cursors.left.isDown) {

            this.setVelocityX(-this.speed);

        } else if (cursors.right.isDown) {

            this.setVelocityX(this.speed);

        } else {

            this.setVelocityX(0);

        }

        if (cursors.up.isDown && this.body.blocked.down) {

            this.setVelocityY(-this.jumpPower);

        }

    }

}
