class Menu extends Phaser.Scene {

    constructor(){
        super("Menu");
    }


    create(){

        this.add.text(
            180,
            120,
            "MINI FABIAN\nADVENTURE",
            {
                fontSize:"48px",
                fill:"#ffffff",
                align:"center"
            }
        );


        let playButton = this.add.text(
            330,
            280,
            "PLAY",
            {
                fontSize:"40px",
                fill:"#00ff00",
                backgroundColor:"#000000",
                padding:10
            }
        );


        playButton.setInteractive();


        playButton.on(
            "pointerdown",
            ()=>{

                this.scene.start("Level1");

            }
        );


    }

}
