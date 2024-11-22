//imports
//var math = require('mathjs');

/*
VARIABLES
VARIABLES
VARIABLES
*/
var walker;
var keypad;


//health
var hesterHP = 100;
var pearl = {
    hp: 30,
    heal: 10,
    dmg: 15,
    inventory: true
}
var wood = {
    hp: 30,
    heal: 0, 
    dmg: 3,
    inventory: true
}
var needle = {
    hp: 50,
    heal: -5,
    dmg: 5,
    inventory: true
}
var water = {
    hp: 60,
    heal: 10,
    dmg: 2,
    inventory: false

}

var Dimmesdale = {
	hp: 60,
	preachDmg: 3,
	dagger: 5
}

var Rodger = {
	hp: 70,
	bookDmg: 4,
	chemDmg: 6
}

var mob = {
	hp: 120,
	stoneDmg: 5,
	fatDmg: 7
}
/*
FUNCTIONS
FUNCTIONS
FUNCTIONS
*/

function TEXTBOX (){
	//console.log("this");
	
	const backRect = new Phaser.Geom.Rectangle(100,500,1080,200);
	const colorWhite = this.add.graphics({ fillStyle: { color: whiteHexCode } });
	colorWhite.fillRectShape(backRect);

	const frontRect = new Phaser.Geom.Rectangle(105,505,1070,190);
	const colorBlack = this.add.graphics({ fillStyle: { color: blackHexCode } });
	colorBlack.fillRectShape(frontRect);

	welcome.setOrigin(0.5, 0.5);
	welcome.text = input;
	welcome.setStyle({ "fontFamily": "Arial", "fontSize": "30px" });

	//this.add.image(200,600, imageKey);
}

function randomNumber(){
	return Math.floor((Math.random() * 5)+1);
}

function attack (item, target){
	var multiplier = randomNumber();
	target.hp = target.hp - (item.dmg * multiplier);
	i
}

function heal (item){}


/* SCENES */
/* SCENES */
/* SCENES */

/* START OF COMPILED CODE */


// 
class Level extends Phaser.Scene {

	constructor() {
        super({ key: 'Level' });

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

		walker = this.physics.add.image(300,300, "guapen");
		walker.setInteractive();
		walker.setCollideWorldBounds(true);

		keypad = this.input.keyboard.createCursorKeys();


		walker.setCollideWorldBounds(true);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(dino);

		//const onWalkerDownScript = new On

		// pushActionScript
		new PushActionScript(onPointerDownScript);
		///new PushActionScript(onWalkerDownScript);

		// onAwakeScript
		const onAwakeScript = new OnAwakeScript(dino);

		// moveInSceneActionScript
		const moveInSceneActionScript = new MoveInSceneActionScript(onAwakeScript);

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

		// moveInSceneActionScript (components)
		const moveInSceneActionScriptDurationConfigComp = new DurationConfigComp(moveInSceneActionScript);
		moveInSceneActionScriptDurationConfigComp.duration = 1000;

		// fadeActionScript (prefab fields)
		fadeActionScript.fadeDirection = "FadeIn";

		// fadeActionScript (components)
		const fadeActionScriptDurationConfigComp = new DurationConfigComp(fadeActionScript);
		fadeActionScriptDurationConfigComp.duration = 1500;

		this.events.emit("scene-awake");

		this.input.once('pointerdown', function (event) {
			console.log("mouse recongized");
			this.scene.start('Fight');
        }, this);
	
		
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

		if (isUpDown){
			walker.setVelocityY(-200);
		} else if (isDownDown){
			walker.setVelocityY(200);
		} else if (isLeftDown){
			walker.setVelocityX(-200);
		} else if (isRightDown){
			walker.setVelocityX(200);
		} else {
			walker.setVelocityX(0);
			walker.setVelocityY(0);
		}

	}

	/* END-USER-CODE */
	
}
// You can write more code here
/* START OF COMPILED CODE */
class Fight extends Phaser.Scene 
{

	constructor() {
        super({ key: 'Fight' });

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	} 

	preload(){
		this.load.image("guapen", "assets/guapen");
	}

	/** @returns {void} */
	editorCreate() {
		//creates keypad
		var number = randomNumber();
		keypad = this.input.keyboard.createCursorKeys();
		this.add.image(300,300, "guapen");
		this.add.text(100, 200, 'Phaser', { fontFamily: 'Arial', fontSize: 64, color: '#00ff00' });
	}

	/* START-USER-CODE */
	
	// Write more your code here

	create() {

		this.editorCreate();

	}

	update(){
		
		//arrow keys
		var isUpDown = keypad.up.isDown;
		var isDownDown = keypad.down.isDown;
		var isLeftDown = keypad.left.isDown;
		var isRightDown = keypad.right.isDown;
		//special keys
		var isSpaceDown = keypad.space.isDown;
		var isShiftDown = keypad.shift.isDown;

		if (isDownDown){
			//textbox("enter","guapen");
			this.add.image(200,600, "guapen");
			//console.log("work");
		}
	}

	/* END-USER-CODE */
	
}
/* END OF COMPILED CODE */
// You can write more code here


/* END OF COMPILED CODE */

// You can write more code here

