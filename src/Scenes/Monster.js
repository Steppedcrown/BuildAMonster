class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 200;
        this.bodyY = 200;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        //my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        // All sprite positions now relative to (0, 0) in the container
        my.sprite.leftArm = this.add.sprite(-100, 0, "monsterParts", "arm_blueA.png");
        my.sprite.rightArm = this.add.sprite(100, 0, "monsterParts", "arm_blueB.png");

        my.sprite.leftLeg = this.add.sprite(-50, 100, "monsterParts", "leg_blueA.png");
        my.sprite.rightLeg = this.add.sprite(50, 100, "monsterParts", "leg_blueB.png");

        my.sprite.eye = this.add.sprite(-50, -100, "monsterParts", "eye_blue.png");
        my.sprite.smile = this.add.sprite(0, -50, "monsterParts", "mouthE.png");
        my.sprite.fangs = this.add.sprite(0, -50, "monsterParts", "mouth_closed_fangs.png");

        my.sprite.antenna = this.add.sprite(0, -150, "monsterParts", "detail_blue_antenna_large.png");
        my.sprite.ear = this.add.sprite(50, -100, "monsterParts", "detail_blue_ear_round.png");

        // Create container for the monster parts
        this.monster = this.add.container(this.bodyX, this.bodyY, [
            my.sprite.leftArm,
            my.sprite.rightArm,
            my.sprite.leftLeg,
            my.sprite.rightLeg,
            my.sprite.eye,
            my.sprite.smile,
            my.sprite.fangs,
            my.sprite.antenna,
            my.sprite.ear
        ]); 

        // Set status of monster parts
        my.sprite.leftArm.flipX = true;
        my.sprite.leftLeg.flipX = true;
        my.sprite.fangs.visible = false; 

        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

       
    }

}