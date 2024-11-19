
// You can write more code here
var walker;
var keypad;

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	preload(){
		this.load.image("guapen", "assets/guapen");

	}

	/** @returns {void} */
	editorCreate() {
	
		// dino
		const dino = this.add.image(640, 288, "dino");
		dino.setInteractive(new Phaser.Geom.Rectangle(0, 0, 250, 250), Phaser.Geom.Rectangle.Contains);

		const walker = this.add.image(300,300, "guapen");
		walker.setInteractive();

		keypad = this.input.keyboard.createCursorKeys();

		//walker.setCollideWorldBounds(true);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(dino);

		//const onWalkerDownScript = new On

		// pushActionScript
		new PushActionScript(onPointerDownScript);
		///new PushActionScript(onWalkerDownScript);

		// onAwakeScript
		const onAwakeScript = new OnAwakeScript(dino);
		//const onWakingWalkerScript = new onAwakeScript(walker);

		// moveInSceneActionScript
		const moveInSceneActionScript = new MoveInSceneActionScript(onAwakeScript);
		//const moveWalkerActionScript = new MoveInSceneActionScript(onWakingWalkerScript);

		// welcome
		const welcome = this.add.text(640, 478, "", {});
		welcome.setOrigin(0.5, 0.5);
		welcome.text = "Phaser 3 + Phaser Editor 2D";
		welcome.setStyle({ "fontFamily": "Arial", "fontSize": "30px" });

		// onAwakeScript_1
		const onAwakeScript_1 = new OnAwakeScript(welcome);

		// fadeActionScript
		const fadeActionScript = new FadeActionScript(onAwakeScript_1);

		// moveInSceneActionScript (prefab fields)
		moveInSceneActionScript.from = "TOP";
		//moveWalkerActionScript.from = "TOP";

		// moveInSceneActionScript (components)
		const moveInSceneActionScriptDurationConfigComp = new DurationConfigComp(moveInSceneActionScript);
		moveInSceneActionScriptDurationConfigComp.duration = 1000;

		// fadeActionScript (prefab fields)
		fadeActionScript.fadeDirection = "FadeIn";

		// fadeActionScript (components)
		const fadeActionScriptDurationConfigComp = new DurationConfigComp(fadeActionScript);
		fadeActionScriptDurationConfigComp.duration = 1500;

		this.events.emit("scene-awake");
		
	}

	/* START-USER-CODE */
	

	// Write more your code here

	create() {

		this.editorCreate();
	}

	update(){

		var isUpDown = keypad.up.isDown;
		var isDownDown = keypad.down.isDown;
		var isLeftDown = keypad.left.isDown;
		var isRightDown = keypad.right.isDown;
		var spaceDown = keypad.space.isDown;

		if (keypad.space.isDown){
			walker.setVelocityX(200);
		}
	}

	/* END-USER-CODE */
	
}
