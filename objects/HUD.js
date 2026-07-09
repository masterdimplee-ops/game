class HUD {

    constructor(scene) {

        this.scene = scene;

        this.scoreText = scene.add.text(
            20,
            20,
            "Score : 0",
            {
                fontSize: "22px",
                color: "#ffffff"
            }
        );

        this.lifeText = scene.add.text(
            20,
            50,
            "❤️❤️❤️",
            {
                fontSize: "22px"
            }
        );

    }

    updateScore(score) {
        this.scoreText.setText("Score : " + score);
    }

    updateLives(lives) {

        let heart = "";

        for (let i = 0; i < lives; i++) {
            heart += "❤️";
        }

        this.lifeText.setText(heart);

    }

}
