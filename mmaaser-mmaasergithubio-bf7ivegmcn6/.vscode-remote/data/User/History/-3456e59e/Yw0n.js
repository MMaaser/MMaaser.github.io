// You can write more code here
//var tbox = require(./textbox);
//import { textbox } from "../textbox";
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
		keypad = this.input.keyboard.createCursorKeys();
		this.add.image(300,300, "guapen");


		
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

function consoleLog(){
	consoleLog("this is it");
}

/* END OF COMPILED CODE */
// You can write more code here

